import { useLayoutEffect, useRef, useCallback } from 'react'
import './ScrollStack.css'

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
)

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  useWindowScroll = false,
  onStackComplete
}) => {
  const scrollerRef = useRef(null)
  const cardsRef = useRef([])
  const lastTransformsRef = useRef(new Map())
  const isUpdatingRef = useRef(false)
  const stackStartRef = useRef(null)

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight
      }
    } else {
      const scroller = scrollerRef.current
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight
      }
    }
  }, [useWindowScroll])

  const getElementOffset = useCallback(
    element => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect()
        return rect.top + window.scrollY
      } else {
        return element.offsetTop
      }
    },
    [useWindowScroll]
  )

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return

    isUpdatingRef.current = true

    const { scrollTop, containerHeight } = getScrollData()
    const totalCards = cardsRef.current.length

    // Get the stack start position
    const stackStart = stackStartRef.current ? getElementOffset(stackStartRef.current) : 0
    
    // Calculate scroll progress through the stack
    const stackHeight = containerHeight * 1.5 // Stack takes 1.5 viewport heights
    const stackEnd = stackStart + stackHeight
    const scrollProgress = Math.max(0, Math.min(1, (scrollTop - stackStart) / stackHeight))
    
    // Calculate which card should be active
    const activeCardIndex = Math.min(Math.floor(scrollProgress * totalCards), totalCards - 1)

    cardsRef.current.forEach((card, i) => {
      if (!card) return

      // Calculate transforms for each card
      const isActive = i === activeCardIndex
      const isPast = i < activeCardIndex
      const isFuture = i > activeCardIndex

      let translateY = 0
      let scale = 1
      let opacity = 1
      let zIndex = totalCards - i

      if (isActive) {
        // Active card - full size and opacity
        scale = 1
        opacity = 1
        zIndex = totalCards + 10
      } else if (isPast) {
        // Past cards - slightly behind and dimmed
        translateY = i * 20
        scale = 0.95
        opacity = 0.6
        zIndex = totalCards - i
      } else if (isFuture) {
        // Future cards - stacked behind with scale
        translateY = i * itemStackDistance
        scale = baseScale + (i - activeCardIndex) * itemScale
        opacity = 0.8
        zIndex = totalCards - i
      }

      // Apply transforms
      const transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`
      
      card.style.transform = transform
      card.style.opacity = String(opacity)
      card.style.zIndex = String(zIndex)
      card.style.pointerEvents = isActive ? 'auto' : 'none'
      
      lastTransformsRef.current.set(i, { transform, opacity, scale, translateY })
    })

    isUpdatingRef.current = false
  }, [
    itemScale,
    itemStackDistance,
    baseScale,
    useWindowScroll,
    getScrollData,
    getElementOffset
  ])

  const handleScroll = useCallback(() => {
    updateCardTransforms()
  }, [updateCardTransforms])

  useLayoutEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    // Find all cards
    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    )

    cardsRef.current = cards

    // Setup cards with proper positioning
    cards.forEach((card, i) => {
      card.style.willChange = 'transform, opacity'
      card.style.transformOrigin = 'center center'
      card.style.position = 'absolute'
      card.style.top = '0'
      card.style.left = '0'
      card.style.width = '100%'
    })

    // Setup scroll listener
    const scrollHandler = () => {
      requestAnimationFrame(handleScroll)
    }

    if (useWindowScroll) {
      window.addEventListener('scroll', scrollHandler, { passive: true })
    } else {
      scroller.addEventListener('scroll', scrollHandler, { passive: true })
    }

    // Initial update
    updateCardTransforms()

    return () => {
      if (useWindowScroll) {
        window.removeEventListener('scroll', scrollHandler)
      } else {
        scroller.removeEventListener('scroll', scrollHandler)
      }
      cardsRef.current = []
      lastTransformsRef.current.clear()
      isUpdatingRef.current = false
    }
  }, [
    itemScale,
    itemStackDistance,
    baseScale,
    useWindowScroll,
    updateCardTransforms,
    handleScroll
  ])

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner" ref={stackStartRef}>
        {children}
      </div>
    </div>
  )
}

export default ScrollStack


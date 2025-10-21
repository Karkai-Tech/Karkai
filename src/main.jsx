import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const root = createRoot(document.getElementById('app'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Simple scroll-reveal for elements with .lp-reveal and word-splitting for .lp-words
function initAnimations() {
  // word-by-word split
  document.querySelectorAll('.lp-words').forEach((el) => {
    if (el.dataset.processed) return
    const text = el.getAttribute('data-text') || el.textContent || ''
    el.textContent = ''
    const words = text.split(' ')
    words.forEach((w, i) => {
      const span = document.createElement('span')
      span.textContent = w
      span.style.animationDelay = `${Math.min(i * 140, 2200)}ms`
      el.appendChild(span)
      // add a real space between word spans so spacing is preserved
      if (i !== words.length - 1) el.appendChild(document.createTextNode(' '))
    })
    el.dataset.processed = '1'
  })

  // letter-by-letter split
  document.querySelectorAll('.lp-letters').forEach((el) => {
    if (el.dataset.processed) return
    const text = el.getAttribute('data-text') || el.textContent || ''
    el.textContent = ''
    Array.from(text).forEach((ch, i) => {
      const span = document.createElement('span')
      span.textContent = ch
      span.style.animationDelay = `${i * 40}ms`
      el.appendChild(span)
    })
    el.dataset.processed = '1'
  })

  // scroll reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'transform 1100ms ease, opacity 1100ms ease'
          entry.target.style.transform = 'translateY(0)'
          entry.target.style.opacity = '1'
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )
  document.querySelectorAll('.lp-reveal').forEach((el) => observer.observe(el))
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(initAnimations, 0)
} else {
  window.addEventListener('DOMContentLoaded', initAnimations)
}

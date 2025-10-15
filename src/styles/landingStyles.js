// JavaScript styles for the Landing Page (CSS-in-JS via plain objects)
// You can tweak colors, spacing, and shadows to better match your Figma

export const page = {
  minHeight: '100vh',
  backgroundColor: '#F5EEDC', // soft beige background
  color: '#222',
  fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
};

export const container = {
  maxWidth: 1100,
  padding: '12px 24px 60px',
  margin: '0 auto',
};

export const topBar = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 24,
};

export const brandSmall = {
  position: 'absolute',
  left: 0,
  top: 2,
  fontWeight: 600,
  letterSpacing: '2px',
  fontSize: 18,
};

export const navPill = {
  display: 'flex',
  gap: 26,
  padding: '10px 20px',
  borderRadius: 999,
  background: '#F7F0DB',
  boxShadow: '0 2px 0 rgba(0,0,0,0.25), 0 8px 12px rgba(0,0,0,0.08) inset, 0 3px 0 rgba(0,0,0,0.15)',
  border: '1px solid rgba(0,0,0,0.25)',
};

export const navItem = {
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '1px',
  padding: '6px 12px',
  borderRadius: 999,
  cursor: 'pointer',
  color: '#333',
  userSelect: 'none',
};

export const hero = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: 22,
};

export const logoBig = {
  width: 260,
  height: 'auto',
  filter: 'drop-shadow(0 2px 0 rgba(0,0,0,0.5))',
};

// Small logo used in the top bar (left)
export const brandLogoSmall = {
  position: 'absolute',
  left: 0,
  top: 2,
  height: 22,
  width: 'auto',
  objectFit: 'contain',
  filter: 'drop-shadow(0 1px 0 rgba(0,0,0,0.35))',
};

export const quote = {
  fontSize: 18,
  fontWeight: 500,
  maxWidth: 740,
};

export const sub = {
  maxWidth: 860,
  fontSize: 20,
  lineHeight: 1.6,
  color: '#333',
};

export const ctaRow = {
  marginTop: 24,
  display: 'flex',
  gap: 48,
};

export const cta = {
  padding: '12px 28px',
  borderRadius: 16,
  background: '#F2E7C8',
  border: '1px solid rgba(0,0,0,0.35)',
  boxShadow: '0 3px 0 rgba(0,0,0,0.35), 0 6px 14px rgba(0,0,0,0.12)',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '1px',
  cursor: 'pointer',
  minWidth: 140,
};

// 2x2 grid icon on the top right (4 boxes)
export const gridWrap = {
  position: 'absolute',
  right: 0,
  top: 4,
  width: 22,
  height: 22,
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
  gap: 3,
};

export const gridSquare = {
  borderRadius: 2,
  border: '1px solid rgba(0,0,0,0.35)',
  boxShadow: '0 2px 0 rgba(0,0,0,0.25)',
  background: '#F7F0DB',
};

// --- Video / Intro Section ---
export const videoSection = {
  marginTop: 48,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16,
};

export const videoCard = {
  width: 'min(92vw, 760px)',
  aspectRatio: '16 / 9',
  background: '#111',
  borderRadius: 16,
  boxShadow: '0 8px 0 rgba(0,0,0,0.35), 0 18px 30px rgba(0,0,0,0.25)',
  border: '1px solid rgba(0,0,0,0.35)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};

export const videoCaption = {
  maxWidth: 640,
  textAlign: 'center',
  color: '#2b2b2b',
  fontSize: 14,
  lineHeight: 1.6,
};

export const playButton = {
  width: 96,
  height: 64,
  background: '#ff2d2d',
  borderRadius: 12,
  boxShadow: '0 4px 0 rgba(0,0,0,0.35)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const playTriangle = {
  width: 0,
  height: 0,
  borderLeft: '18px solid white',
  borderTop: '12px solid transparent',
  borderBottom: '12px solid transparent',
  marginLeft: 4,
};

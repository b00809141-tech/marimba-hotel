import Link from 'next/link'
import { useState } from 'react'

export default function Nav({ transparent = true }) {
  const [open, setOpen] = useState(false)
  const linkColor = open ? '#1A0D00' : (transparent ? '#FAF7F2' : '#1A0D00')

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 24px',
        background: open ? '#FAF7F2' : (transparent ? 'linear-gradient(to bottom, rgba(20,8,0,0.75), transparent)' : '#FAF7F2'),
        borderBottom: (!transparent || open) ? '1px solid rgba(200,136,42,0.25)' : 'none',
      }}>
        <Link href="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="4" width="4" height="16" fill="#4A6FA5"/>
            <rect x="10" y="4" width="4" height="16" fill="#4A6FA5"/>
            <rect x="18" y="4" width="4" height="16" fill="#4A6FA5"/>
          </svg>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', letterSpacing: '0.12em', color: linkColor }}>MARIMBA</span>
        </Link>

        <div className="nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          <Link href="/rooms" style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: linkColor, textDecoration: 'none' }}>Your Room</Link>
          <Link href="/about" style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: linkColor, textDecoration: 'none' }}>About Us</Link>
          <Link href="/contact" style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: linkColor, textDecoration: 'none' }}>Contact</Link>
          <Link href="/booking" style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: '600', color: '#1A0D00', background: '#C8882A', padding: '14px 24px', textDecoration: 'none' }}>Reserve Your Stay</Link>
        </div>

        <button
          className="nav-burger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          style={{
            display: 'none',
            background: 'none', border: 'none', cursor: 'pointer', padding: '8px',
            flexDirection: 'column', gap: '5px',
          }}
        >
          <span style={{ display: 'block', width: '22px', height: '2px', background: linkColor }}/>
          <span style={{ display: 'block', width: '22px', height: '2px', background: linkColor }}/>
          <span style={{ display: 'block', width: '22px', height: '2px', background: linkColor }}/>
        </button>
      </nav>

      {open && (
        <div style={{
          position: 'fixed', top: '60px', left: 0, right: 0, bottom: 0, zIndex: 99,
          background: '#FAF7F2', padding: '40px 32px',
          display: 'flex', flexDirection: 'column', gap: '28px',
        }}>
          <Link href="/rooms" onClick={() => setOpen(false)} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#1A0D00', textDecoration: 'none' }}>Your Room</Link>
          <Link href="/about" onClick={() => setOpen(false)} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#1A0D00', textDecoration: 'none' }}>About Us</Link>
          <Link href="/contact" onClick={() => setOpen(false)} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#1A0D00', textDecoration: 'none' }}>Contact</Link>
          <Link href="/booking" onClick={() => setOpen(false)} style={{
            fontFamily: "'Jost', sans-serif", fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: '600',
            color: '#1A0D00', background: '#C8882A', padding: '18px 24px', textDecoration: 'none', textAlign: 'center', marginTop: '12px',
          }}>Reserve Your Stay</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop-links { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </>
  )
}

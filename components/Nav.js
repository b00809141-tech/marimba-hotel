import { useState } from 'react'
import Link from 'next/link'

export default function Nav({ transparent = false }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 48px',
        height: '72px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: transparent ? 'linear-gradient(to bottom, rgba(0,0,0,0.45), transparent)' : 'rgba(250,247,242,0.97)',
        backdropFilter: transparent ? 'none' : 'blur(8px)',
        borderBottom: transparent ? 'none' : '1px solid #E0CDB0',
        transition: 'background 0.4s ease',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="15" width="14" height="55" rx="3" fill="#2B5EA7"/>
            <rect x="43" y="15" width="14" height="55" rx="3" fill="#2B5EA7"/>
            <rect x="66" y="15" width="14" height="55" rx="3" fill="#2B5EA7"/>
            <ellipse cx="50" cy="50" rx="32" ry="18" stroke="#C8A060" strokeWidth="2" fill="none"/>
          </svg>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '20px',
            fontWeight: '500',
            letterSpacing: '0.08em',
            color: transparent ? '#FAF7F2' : '#1A0D00',
          }}>MARIMBA</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          {[
            { label: 'Your room', href: '/rooms' },
            { label: 'About us', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ].map(item => (
            <Link key={item.href} href={item.href} style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '12px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: '400',
              color: transparent ? 'rgba(250,247,242,0.9)' : '#5C3D1A',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#C8882A'}
            onMouseLeave={e => e.target.style.color = transparent ? 'rgba(250,247,242,0.9)' : '#5C3D1A'}
            >{item.label}</Link>
          ))}
          <Link href="/rooms" style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontWeight: '500',
            color: transparent ? '#1A0D00' : '#FAF7F2',
            background: transparent ? '#FAF7F2' : '#C8882A',
            padding: '10px 22px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.target.style.background = '#A06820'; e.target.style.color = '#FAF7F2'; }}
          onMouseLeave={e => { e.target.style.background = transparent ? '#FAF7F2' : '#C8882A'; e.target.style.color = transparent ? '#1A0D00' : '#FAF7F2'; }}
          >Reserve your stay</Link>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          nav { padding: 0 24px !important; }
          nav > div:last-child a:not(:last-child) { display: none; }
        }
      `}</style>
    </>
  )
}

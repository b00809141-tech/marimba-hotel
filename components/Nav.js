import Link from 'next/link'

export default function Nav({ transparent = true }) {
  const linkColor = transparent ? '#FAF7F2' : '#1A0D00'
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 48px',
      background: transparent ? 'linear-gradient(to bottom, rgba(20,8,0,0.75), transparent)' : '#FAF7F2',
      borderBottom: transparent ? 'none' : '1px solid rgba(200,136,42,0.25)',
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="4" width="4" height="16" fill="#4A6FA5"/>
          <rect x="10" y="4" width="4" height="16" fill="#4A6FA5"/>
          <rect x="18" y="4" width="4" height="16" fill="#4A6FA5"/>
        </svg>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', letterSpacing: '0.12em', color: linkColor }}>MARIMBA</span>
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <Link href="/rooms" style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: linkColor, textDecoration: 'none' }}>Your Room</Link>
        <Link href="/gallery" style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: linkColor, textDecoration: 'none' }}>Gallery</Link>
        <Link href="/about" style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: linkColor, textDecoration: 'none' }}>About Us</Link>
        <Link href="/contact" style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: linkColor, textDecoration: 'none' }}>Contact</Link>
        <Link href="/booking" style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: '600', color: '#1A0D00', background: '#C8882A', padding: '14px 24px', textDecoration: 'none' }}>Reserve Your Stay</Link>
      </div>
    </nav>
  )
}

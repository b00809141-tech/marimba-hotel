import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#1A0D00', padding: '80px 48px 32px' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '48px' }}>
        <div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', letterSpacing: '0.1em', color: '#FAF7F2', marginBottom: '16px' }}>MARIMBA</p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '15px', color: '#C8882A', marginBottom: '24px' }}>Damour Highway, Lebanese Coast</p>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '13px', color: '#B89A7A', lineHeight: '1.8' }}>The backyard is waiting.<br/>Come as you are.</p>
        </div>
        <div>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '20px' }}>Navigation</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <Link href="/rooms" style={{ fontFamily: "'Jost', sans-serif", fontSize: '14px', color: '#D8C4A8', textDecoration: 'none' }}>Your room</Link>
            <Link href="/about" style={{ fontFamily: "'Jost', sans-serif", fontSize: '14px', color: '#D8C4A8', textDecoration: 'none' }}>About us</Link>
            <Link href="/contact" style={{ fontFamily: "'Jost', sans-serif", fontSize: '14px', color: '#D8C4A8', textDecoration: 'none' }}>Contact & Socials</Link>
            <Link href="/booking" style={{ fontFamily: "'Jost', sans-serif", fontSize: '14px', color: '#D8C4A8', textDecoration: 'none' }}>Reserve your stay</Link>
          </div>
        </div>
        <div>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '20px' }}>Find us</p>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '14px', color: '#D8C4A8', lineHeight: '1.8', marginBottom: '16px' }}>Damour Highway<br/>Damour, Lebanon</p>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '14px', color: '#D8C4A8', marginBottom: '4px' }}>+961 76 417 651</p>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '14px', color: '#D8C4A8' }}>marimbasdamour@outlook.com</p>
        </div>
      </div>
      <div style={{ maxWidth: '1300px', margin: '64px auto 0', paddingTop: '24px', borderTop: '1px solid rgba(200,136,42,0.2)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', color: '#8A7260' }}>© 2026 Marimba Hotel. All rights reserved.</p>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '13px', color: '#8A7260' }}>The backyard is always open.</p>
      </div>
    </footer>
  )
}

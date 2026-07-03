import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: '#1A0D00',
      padding: '80px 48px 40px',
      color: '#E0CDB0',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '48px',
          paddingBottom: '64px',
          borderBottom: '1px solid rgba(200,136,42,0.2)',
          marginBottom: '40px',
        }}>
          <div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '28px',
              fontWeight: '500',
              letterSpacing: '0.1em',
              color: '#FAF7F2',
              marginBottom: '8px',
            }}>MARIMBA</div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '15px',
              fontStyle: 'italic',
              color: '#C8882A',
              marginBottom: '24px',
            }}>Damour Highway, Lebanese Coast</div>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '13px',
              lineHeight: '1.9',
              color: '#9A7A5A',
              fontWeight: '300',
            }}>The backyard is waiting.<br/>Come as you are.</p>
          </div>

          <div>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#C8882A',
              marginBottom: '20px',
            }}>Navigation</p>
            {[
              { label: 'Your room', href: '/rooms' },
              { label: 'About us', href: '/about' },
              { label: 'Contact & Socials', href: '/contact' },
              { label: 'Reserve your stay', href: '/rooms' },
            ].map(item => (
              <div key={item.href} style={{ marginBottom: '12px' }}>
                <Link href={item.href} style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '13px',
                  color: '#9A7A5A',
                  fontWeight: '300',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#E0CDB0'}
                onMouseLeave={e => e.target.style.color = '#9A7A5A'}
                >{item.label}</Link>
              </div>
            ))}
          </div>

          <div>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#C8882A',
              marginBottom: '20px',
            }}>Find us</p>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '13px',
              lineHeight: '2',
              color: '#9A7A5A',
              fontWeight: '300',
            }}>
              Damour Highway<br/>
              Damour, Lebanon<br/><br/>
              +961 76 417 651<br/>
              info@marimba.hotel
            </p>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '11px',
            color: '#5C3D1A',
            fontWeight: '300',
          }}>© 2025 Marimba Hotel. All rights reserved.</p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '13px',
            fontStyle: 'italic',
            color: '#5C3D1A',
          }}>The backyard is always open.</p>
        </div>
      </div>
    </footer>
  )
}

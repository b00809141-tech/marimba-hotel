import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact & Socials — Marimba Hotel</title>
        <meta name="description" content="Find us on the Damour Highway, Lebanese Coast. The backyard is waiting." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Nav transparent={false} />

      <section style={{
        minHeight: 'calc(100vh - 72px)',
        marginTop: '72px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}>
        {/* LEFT — Dark panel */}
        <div style={{
          background: '#1A0D00',
          padding: '100px 64px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#C8882A',
            marginBottom: '32px',
          }}>Find us</p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: '400',
            fontStyle: 'italic',
            color: '#FAF7F2',
            lineHeight: '1.15',
            marginBottom: '48px',
          }}>The backyard<br/>is waiting.</h1>

          <div style={{ marginBottom: '48px' }}>
            {[
              { label: 'Address', value: 'Damour Highway\nDamour, Lebanon' },
              { label: 'Phone', value: '+961 76 417 651' },
              { label: 'Email', value: 'info@marimba.hotel' },
              { label: 'From Beirut', value: '40 minutes south\nvia the coastal highway' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'grid',
                gridTemplateColumns: '100px 1fr',
                gap: '16px',
                paddingBottom: '24px',
                marginBottom: '24px',
                borderBottom: '1px solid rgba(200,136,42,0.2)',
              }}>
                <p style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C8882A',
                  paddingTop: '2px',
                }}>{item.label}</p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '17px',
                  fontStyle: 'italic',
                  color: '#E0CDB0',
                  lineHeight: '1.7',
                  whiteSpace: 'pre-line',
                }}>{item.value}</p>
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
              marginBottom: '16px',
            }}>Follow us</p>
            <div style={{ display: 'flex', gap: '20px' }}>
              {['Instagram', 'Facebook'].map(s => (
                <a key={s} href="#" style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  color: '#9A7A5A',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#C8882A'}
                onMouseLeave={e => e.target.style.color = '#9A7A5A'}
                >@marimba.hotel</a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div style={{
          background: '#F5ECD7',
          padding: '100px 64px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#C8882A',
            marginBottom: '16px',
          }}>Get in touch</p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontWeight: '400',
            fontStyle: 'italic',
            color: '#1A0D00',
            marginBottom: '48px',
            lineHeight: '1.3',
          }}>A question, a special request,<br/>or just a hello — we're here.</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { label: 'Your name', type: 'text', placeholder: 'How shall we welcome you?' },
              { label: 'Email', type: 'email', placeholder: 'We\'ll write back' },
              { label: 'Phone', type: 'tel', placeholder: 'Optional' },
            ].map(field => (
              <div key={field.label}>
                <label style={{
                  display: 'block',
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#5C3D1A',
                  marginBottom: '8px',
                }}>{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  style={{
                    width: '100%',
                    padding: '14px 0',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid #C8A870',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '17px',
                    fontStyle: 'italic',
                    color: '#1A0D00',
                    outline: 'none',
                  }}
                />
              </div>
            ))}

            <div>
              <label style={{
                display: 'block',
                fontFamily: "'Jost', sans-serif",
                fontSize: '10px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#5C3D1A',
                marginBottom: '8px',
              }}>Message</label>
              <textarea
                placeholder="Tell us what you're looking for..."
                rows={4}
                style={{
                  width: '100%',
                  padding: '14px 0',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #C8A870',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '17px',
                  fontStyle: 'italic',
                  color: '#1A0D00',
                  outline: 'none',
                  resize: 'none',
                }}
              />
            </div>

            <button style={{
              alignSelf: 'flex-start',
              marginTop: '16px',
              fontFamily: "'Jost', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: '500',
              color: '#FAF7F2',
              background: '#C8882A',
              padding: '14px 36px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => e.target.style.background = '#1A0D00'}
            onMouseLeave={e => e.target.style.background = '#C8882A'}
            >Send message</button>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          section[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="padding: 100px 64px"] {
            padding: 60px 32px !important;
          }
        }
        input::placeholder, textarea::placeholder { color: #9A7A5A; }
      `}</style>
    </>
  )
}

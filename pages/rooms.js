import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const rooms = [
  {
    id: 'standard',
    name: 'Standard Room',
    price: '$100',
    tagline: 'The sea through the window. White walls. A bed that knows what it\'s for.',
    description: 'Sea view. Double or twin beds. Air conditioning. Private bathroom. Balcony. WiFi. Daily housekeeping. Pool access. Access to Al Jisr resort. F&B available on site.',
    note: 'Rest here. Live out there.',
    image: '/images/standard-room.jpg',
    features: ['Sea view', 'Double or twin beds', 'Balcony', 'Air conditioning', 'Private bathroom', 'Pool access', 'Access to Al Jisr resort', 'F&B available on site'],
  },
  {
    id: 'terrace',
    name: 'Room with Terrace Access',
    price: '$120',
    tagline: 'Your own corner of the backyard. Private garden terrace, direct pool access.',
    description: 'Private garden terrace. Direct pool access. Double or twin beds. Air conditioning. Private bathroom. WiFi. Daily housekeeping. Access to Al Jisr resort. F&B available on site.',
    note: 'The pool is steps away. The garden is yours.',
    image: '/images/terrace-room.jpg',
    features: ['Private garden terrace', 'Direct pool access', 'Double or twin beds', 'Air conditioning', 'Private bathroom', 'Access to Al Jisr resort', 'F&B available on site'],
  },
  {
    id: 'suite',
    name: 'Suite',
    price: '$140',
    tagline: 'More space to breathe. Sea view, king bed, room to spread out.',
    description: 'Sea view. King bed. Private balcony. Air conditioning. Private bathroom. WiFi. Daily housekeeping. Pool access. Access to Al Jisr resort. F&B available on site.',
    note: 'A little more room. The same view.',
    image: '/images/suite.jpg',
    features: ['Sea view', 'King bed', 'Private balcony', 'Air conditioning', 'Private bathroom', 'Pool access', 'Access to Al Jisr resort', 'F&B available on site'],
  },
  {
    id: 'villa',
    name: 'Villa',
    price: '$200',
    tagline: 'Your own villa. Kitchenette, living area, and the pool just outside.',
    description: 'Kitchenette and living area. Sea view. Private balcony. King bed. Air conditioning. Private bathroom. WiFi. Daily housekeeping. Pool access. Access to Al Jisr resort. F&B available on site.',
    note: 'Space to live, not just stay.',
    image: '/images/villa.jpg',
    features: ['Kitchenette and living area', 'Sea view', 'Private balcony', 'King bed', 'Air conditioning', 'Private bathroom', 'Pool access', 'Access to Al Jisr resort', 'F&B available on site'],
  },
]

export default function Rooms() {
  return (
    <>
      <Head>
        <title>Your Room — Marimba Hotel</title>
        <meta name="description" content="Choose your room at Marimba Hotel, Damour. Standard rooms, terrace access, suites, and villas — all with sea views and resort access on the Lebanese coast." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Nav transparent={false} />

      {/* HERO */}
      <section style={{
        height: '70vh',
        minHeight: '500px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '64px',
        paddingLeft: '48px',
        marginTop: '72px',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/rooms-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}/>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(20,8,0,0.7) 0%, rgba(20,8,0,0.1) 60%)',
        }}/>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#C8882A',
            marginBottom: '12px',
          }}>Marimba Hotel</p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(48px, 7vw, 88px)',
            fontWeight: '400',
            color: '#FAF7F2',
            lineHeight: '1',
          }}>Your room</h1>
        </div>
      </section>

      {/* INTRO */}
      <section style={{
        padding: '80px 48px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        maxWidth: '1200px',
        margin: '0 auto',
        alignItems: 'center',
      }}>
        <div>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontStyle: 'italic',
            fontWeight: '400',
            lineHeight: '1.5',
            color: '#1A0D00',
          }}>The light comes in before you're ready for it. Warm, low, landing on the wall like it has nowhere else to be.</p>
        </div>
        <div>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '18px',
            fontStyle: 'italic',
            lineHeight: '1.9',
            color: '#5C3D1A',
            marginBottom: '16px',
          }}>Your room is where the day begins and where it quietly ends — everything in between happens outside.</p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '18px',
            fontStyle: 'italic',
            lineHeight: '1.9',
            color: '#5C3D1A',
            marginBottom: '16px',
          }}>Simple. Considered. Yours for as long as you stay.</p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '18px',
            fontStyle: 'italic',
            lineHeight: '1.9',
            color: '#C8882A',
          }}>The backyard will still be there when you're ready.</p>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: '1px', background: '#E0CDB0', margin: '0 48px' }}/>

      {/* ROOM CARDS */}
      <section style={{ padding: '80px 48px', maxWidth: '1300px', margin: '0 auto' }}>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '10px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#C8882A',
          marginBottom: '48px',
        }}>Choose your room</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {rooms.map((room, i) => (
            <div key={room.id} style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              borderTop: '1px solid #E0CDB0',
              paddingBottom: '0',
            }}>
              {/* Image */}
              <div style={{
                order: i % 2 === 0 ? 0 : 1,
                height: '520px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `url(${room.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.6s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                {room.featured && (
                  <div style={{
                    position: 'absolute', top: '24px', left: '24px',
                    background: '#C8882A',
                    padding: '6px 14px',
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '10px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#FAF7F2',
                    fontWeight: '500',
                  }}>Most loved</div>
                )}
              </div>

              {/* Content */}
              <div style={{
                order: i % 2 === 0 ? 1 : 0,
                padding: '64px 56px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: i % 2 === 0 ? '#FAF7F2' : '#F5ECD7',
              }}>
                <p style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#C8882A',
                  marginBottom: '16px',
                }}>From {room.price} / night</p>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(32px, 3vw, 48px)',
                  fontWeight: '400',
                  color: '#1A0D00',
                  marginBottom: '20px',
                  lineHeight: '1.1',
                }}>{room.name}</h2>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '18px',
                  fontStyle: 'italic',
                  lineHeight: '1.8',
                  color: '#5C3D1A',
                  marginBottom: '32px',
                }}>{room.tagline}</p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '32px',
                }}>
                  {room.features.map(f => (
                    <span key={f} style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: '11px',
                      letterSpacing: '0.06em',
                      color: '#5C3D1A',
                      background: 'rgba(200,136,42,0.1)',
                      border: '1px solid rgba(200,136,42,0.2)',
                      padding: '5px 12px',
                      fontWeight: '300',
                    }}>{f}</span>
                  ))}
                </div>

                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '16px',
                  fontStyle: 'italic',
                  color: '#C8882A',
                  marginBottom: '36px',
                }}>{room.note}</p>

                <Link href={`/booking?room=${room.id}`} style={{
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: '500',
                  color: '#FAF7F2',
                  background: '#1A0D00',
                  padding: '14px 32px',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.target.style.background = '#C8882A'; }}
                onMouseLeave={e => { e.target.style.background = '#1A0D00'; }}
                >Reserve your stay</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="order: 1"] { order: 0 !important; }
          div[style*="padding: 64px 56px"] { padding: 40px 24px !important; }
        }
      `}</style>
    </>
  )
}

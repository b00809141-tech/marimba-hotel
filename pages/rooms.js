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
    note: 'Rest here. Live out there.',
    image: '/images/standard-room.jpg',
    features: ['King bed', 'Sea view', 'Private balcony', 'Daily housekeeping', 'Pool access', 'Access to Al Jisr Resort', 'F&B on site'],
  },
  {
    id: 'terrace',
    name: 'Room with Terrace Access',
    price: '$120',
    tagline: 'Your own corner of the backyard. Private garden terrace, direct pool access.',
    note: 'The pool is steps away. The garden is yours.',
    image: '/images/terrace-room.jpg',
    features: ['King bed', 'Sea view', 'Private terrace', 'Poolside', 'Daily housekeeping', 'Pool access', 'Access to Al Jisr Resort', 'F&B on site', 'Max 3 guests'],
    mostLoved: true,
  },
  {
    id: 'suite',
    name: 'Suite',
    price: '$140',
    tagline: 'More space to breathe. Sea view, king bed, room to spread out.',
    note: 'A little more room. The same view.',
    image: '/images/suite.jpg',
    features: ['King bed', 'Sea view', 'Private balcony', 'Larger living area', 'Daily housekeeping', 'Pool access', 'Access to Al Jisr Resort', 'F&B on site'],
  },
  {
    id: 'villa',
    name: 'Villa',
    price: '$200',
    tagline: 'Top floor. Panoramic sea and mountain views. The whole coast is yours.',
    note: 'The highest point. The widest view.',
    image: '/images/villa.jpg',
    features: ['Panoramic sea & mountain views', 'Private terrace', 'Spacious living area', 'King bed', 'Air conditioning', 'Private bathroom'],
  },
]

export default function Rooms() {
  return (
    <>
      <Head>
        <title>Your Room — Marimba Hotel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Choose your room at Marimba Hotel, Damour. Standard rooms, terrace access, suites, and villas — all with sea views and resort access on the Lebanese coast." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <Nav transparent={false} />

      {/* HERO */}
      <section style={{
        position: 'relative',
        height: '460px',
        marginTop: '0',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '0 48px 56px',
        overflow: 'hidden',
      }}>
        <video autoPlay muted loop playsInline poster="/images/rooms-hero.jpg" style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          backgroundColor: '#8A8078',
        }}>
          <source src="/videos/rooms-hero.mp4" type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(20,8,0,0.65), rgba(20,8,0,0.15))',
        }}/>
        <div style={{ position: 'relative', maxWidth: '1300px', margin: '0 auto', width: '100%' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '12px' }}>Marimba Hotel</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: '400', color: '#FAF7F2' }}>Your room</h1>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: '80px 48px', background: '#FAF7F2', borderBottom: '1px solid rgba(200,136,42,0.2)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(24px, 3vw, 34px)', color: '#1A0D00', lineHeight: '1.4' }}>The light comes in before you're ready for it. Warm, low, landing on the wall like it has nowhere else to be.</p>
          <div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#5C3D1A', lineHeight: '1.8', marginBottom: '16px' }}>Your room is where the day begins and where it quietly ends — everything in between happens outside.</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#5C3D1A', lineHeight: '1.8', marginBottom: '16px' }}>Simple. Considered. Yours for as long as you stay.</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#C8882A' }}>The backyard will still be there when you're ready.</p>
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR ROOM */}
      <section style={{ padding: '80px 48px 120px', background: '#FAF7F2' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(200,136,42,0.3)' }}>Choose your room</p>

          {rooms.map((room, i) => (
            <div key={room.id} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0',
              alignItems: 'stretch',
              borderBottom: i < rooms.length - 1 ? '1px solid rgba(200,136,42,0.25)' : 'none',
              padding: '64px 0',
            }}>
              <div style={{
                order: i % 2 === 1 ? 2 : 1,
                height: '420px',
                backgroundImage: `url(${room.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#E4D3BE',
              }}/>
              <div style={{
                order: i % 2 === 1 ? 1 : 2,
                padding: '0 56px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                {room.mostLoved && (
                  <span style={{
                    alignSelf: 'flex-start',
                    fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: '600',
                    color: '#1A0D00', background: '#C8882A', padding: '8px 16px', marginBottom: '20px',
                  }}>Most loved</span>
                )}
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '8px' }}>From {room.price} / night</p>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: '400', color: '#1A0D00', marginBottom: '16px' }}>{room.name}</h2>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '17px', color: '#5C3D1A', lineHeight: '1.7', marginBottom: '24px' }}>{room.tagline}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
                  {room.features.map(f => (
                    <span key={f} style={{
                      fontFamily: "'Jost', sans-serif", fontSize: '12px', color: '#5C3D1A',
                      border: '1px solid rgba(200,136,42,0.4)', padding: '8px 14px',
                    }}>{f}</span>
                  ))}
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '16px', color: '#C8882A', marginBottom: '28px' }}>{room.note}</p>
                <Link href={`/booking?room=${room.id}`} style={{
                  alignSelf: 'flex-start',
                  fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: '600',
                  color: '#FAF7F2', background: '#1A0D00', padding: '18px 32px', textDecoration: 'none',
                }}>Reserve Your Stay</Link>
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
          div[style*="order: 1"], div[style*="order: 2"] { order: 0 !important; }
          div[style*="padding: 0 56px"] { padding: 40px 24px 0 !important; }
        }
      `}</style>
    </>
  )
}

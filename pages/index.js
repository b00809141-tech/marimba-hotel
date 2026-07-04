import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Marimba Hotel — Damour, Lebanon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="You don't check-in here. You come home. Marimba Hotel, Damour, Lebanese Coast." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <Nav transparent={true} />

      {/* HERO */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '160px 24px 80px',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/hero-home.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}/>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(rgba(20,8,0,0.55), rgba(20,8,0,0.45))',
        }}/>
        <div style={{ position: 'relative', maxWidth: '900px' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '24px' }}>Damour · Lebanese Coast · Summer 2026</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '400', color: '#FAF7F2', lineHeight: '1.15', marginBottom: '32px' }}>
            You don't check-in here.<br/><em>You come home.</em>
          </h1>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(16px, 2vw, 20px)', color: '#E8DDD0', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto 40px' }}>
            Somewhere on the drive down from Beirut, the city lets go of you. By the time you pull off the Damour highway and into the backyard, you'll already know this is the place.
          </p>
          <Link href="/booking" style={{
            display: 'inline-block',
            fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: '600',
            color: '#1A0D00', background: '#FAF7F2', padding: '18px 40px', textDecoration: 'none',
          }}>Reserve Your Stay</Link>
        </div>
        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
          <div style={{ width: '1px', height: '40px', background: 'rgba(250,247,242,0.5)', margin: '0 auto 8px' }}/>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(250,247,242,0.6)' }}>Scroll</p>
        </div>
      </section>

      {/* THE LIGHT HERE */}
      <section style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 6vw, 48px)', background: '#FAF3EA' }}>
        <div className="light-grid" style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div style={{ position: 'relative', height: '520px', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'url(/images/light-section.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#E4D3BE',
            }}/>
            <div style={{
              position: 'absolute', bottom: '24px', left: '24px',
              background: '#C8882A', padding: '14px 20px',
            }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '15px', color: '#FAF7F2' }}>Summer 2026, Damour, Lebanon</p>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '20px' }}>A place that remembers you</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: '400', color: '#1A0D00', lineHeight: '1.2', marginBottom: '32px' }}>Something is different<br/>about the light here.</h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#5C3D1A', lineHeight: '1.9', marginBottom: '20px' }}>It comes in low and warm and lands on the wall of your room in a way that makes you want to stay still and watch it move. You do, for a moment.</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#5C3D1A', lineHeight: '1.9', marginBottom: '20px' }}>Then you hear it — the sound of the backyard waking up. A chair being pulled across stone. The clink of a glass. Someone laughing at something before the day has properly begun.</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '19px', color: '#1A0D00', fontWeight: '500' }}>You get up.</p>
          </div>
        </div>
      </section>

      {/* POOLSIDE F&B */}
      <section style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 6vw, 48px)', background: '#FAF7F2' }}>
        <div className="poolside-grid" style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.3fr 1fr', gap: '32px', alignItems: 'center' }}>
          <div style={{ height: '440px', backgroundImage: 'url(/images/morning-left.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#EFE3D1' }}/>
          <div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '24px', textAlign: 'center' }}>Poolside</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '19px', color: '#5C3D1A', lineHeight: '1.9', marginBottom: '20px', textAlign: 'center' }}>The tray arrives before you've asked for it. Something cold, something bright, garnished like it's the only thing being made right now.</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '19px', color: '#5C3D1A', lineHeight: '1.9', marginBottom: '20px', textAlign: 'center' }}>A salad built for sharing. A sandwich that needs both hands. Fries that disappear before they're offered around twice.</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '19px', color: '#5C3D1A', lineHeight: '1.9', marginBottom: '20px', textAlign: 'center' }}>The pool is right there. So is the next round.</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '20px', color: '#1A0D00', fontWeight: '500', textAlign: 'center' }}>You didn't plan lunch. Lunch found you.</p>
          </div>
          <div style={{ height: '440px', backgroundImage: 'url(/images/morning-right.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#EFE3D1' }}/>
        </div>
      </section>

      {/* EVENING SECTION */}
      <section style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 6vw, 48px)', maxWidth: '1300px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(30px, 4vw, 50px)',
          fontWeight: '400',
          fontStyle: 'italic',
          lineHeight: '1.2',
          color: '#1A0D00',
          maxWidth: '700px',
          marginBottom: '48px',
        }}>This is what you were looking for<br/>when you left the city.<br/><em style={{ color: '#C8882A' }}>You just didn't have a name for it yet.</em></h2>

        <div className="evening-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '32px',
          alignItems: 'start',
        }}>
          <div style={{ height: '480px', overflow: 'hidden', position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'url(/images/cinema-night.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#3A2A18',
            }}/>
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(20,8,0,0.85), transparent)',
              padding: '32px 24px 24px',
            }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8882A' }}>Thursday evenings</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', fontStyle: 'italic', color: '#FAF7F2', marginTop: '4px' }}>Cinema by the pool</p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FAF7F2', marginTop: '8px', fontWeight: '600' }}>Coming soon</p>
            </div>
          </div>
          <div style={{ height: '480px', overflow: 'hidden', position: 'relative', marginTop: '60px' }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'url(/images/fire-pit.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#3A2A18',
            }}/>
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(20,8,0,0.85), transparent)',
              padding: '32px 24px 24px',
            }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8882A' }}>Every evening</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', fontStyle: 'italic', color: '#FAF7F2', marginTop: '4px' }}>The fire is always lit</p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FAF7F2', marginTop: '8px', fontWeight: '600' }}>Coming soon</p>
            </div>
          </div>
          <div style={{ padding: '40px 0' }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '19px',
              fontStyle: 'italic',
              lineHeight: '2',
              color: '#5C3D1A',
              marginBottom: '24px',
            }}>Later, when the light goes amber and everything becomes more beautiful without anyone doing anything, you will think: this is it.</p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '19px',
              fontStyle: 'italic',
              lineHeight: '2',
              color: '#5C3D1A',
              marginBottom: '24px',
            }}>The Saturday night when the long table appeared from nowhere and strangers were passing dishes to people they'd only just met. The Thursday the cinema screen went up and children fell asleep on the grass.</p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '20px',
              fontStyle: 'italic',
              fontWeight: '500',
              color: '#1A0D00',
              marginBottom: '32px',
            }}>Like home. The best version of it.</p>
            <Link href="/booking" style={{
              display: 'inline-block',
              fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: '600',
              color: '#1A0D00', background: '#C8882A', padding: '18px 36px', textDecoration: 'none',
            }}>Reserve Your Stay</Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .light-grid, .poolside-grid, .evening-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Marimba Hotel — Damour, Lebanese Coast</title>
        <meta name="description" content="You don't check in here. You come home. Marimba Hotel on the Lebanese coast in Damour." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

      <Nav transparent={true} />

      {/* HERO */}
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: '700px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(20,8,0,0.5) 0%, rgba(20,8,0,0.3) 50%, rgba(20,8,0,0.6) 100%)',
          zIndex: 1,
        }}/>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}/>
        <div style={{
          position: 'relative', zIndex: 2,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '900px',
        }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#C8882A',
            marginBottom: '28px',
            fontWeight: '400',
          }}>Damour · Lebanese Coast · Summer 2025</p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(44px, 7vw, 86px)',
            fontWeight: '400',
            lineHeight: '1.1',
            color: '#FAF7F2',
            marginBottom: '28px',
            letterSpacing: '-0.01em',
          }}>
            You don't check-in here.<br/>
            <em>You come home.</em>
          </h1>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(16px, 2vw, 20px)',
            fontStyle: 'italic',
            color: 'rgba(250,247,242,0.8)',
            lineHeight: '1.7',
            maxWidth: '620px',
            margin: '0 auto 48px',
          }}>
            Somewhere on the drive down from Beirut, the city lets go of you. By the time you pull off the Damour highway and into the backyard, you'll already know this is the place.
          </p>
          <Link href="/rooms" style={{
            display: 'inline-block',
            fontFamily: "'Jost', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontWeight: '500',
            color: '#1A0D00',
            background: '#FAF7F2',
            padding: '16px 40px',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.target.style.background = '#C8882A'; e.target.style.color = '#FAF7F2'; }}
          onMouseLeave={e => { e.target.style.background = '#FAF7F2'; e.target.style.color = '#1A0D00'; }}
          >Reserve your stay</Link>
        </div>
        <div style={{
          position: 'absolute', bottom: '40px', left: '50%',
          transform: 'translateX(-50%)', zIndex: 2,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        }}>
          <div style={{ width: '1px', height: '48px', background: 'rgba(250,247,242,0.4)' }}/>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(250,247,242,0.5)', fontWeight: '300' }}>Scroll</p>
        </div>
      </section>

      {/* WELCOME HOME */}
      <section style={{
        padding: '120px 48px',
        maxWidth: '1300px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}>
        <div style={{
          position: 'relative',
          height: '580px',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(/images/room-morning.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}/>
          <div style={{
            position: 'absolute', bottom: '32px', left: '32px',
            background: '#C8882A',
            padding: '12px 20px',
          }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '14px', fontStyle: 'italic', color: '#FAF7F2', fontWeight: '300' }}>Summer 2025, Damour, Lebanon</p>
          </div>
        </div>
        <div>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#C8882A',
            marginBottom: '20px',
          }}>A place that remembers you</p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 4vw, 52px)',
            fontWeight: '400',
            lineHeight: '1.15',
            color: '#1A0D00',
            marginBottom: '32px',
          }}>Something is different<br/>about the light here.</h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '18px',
            fontStyle: 'italic',
            lineHeight: '1.9',
            color: '#5C3D1A',
            marginBottom: '20px',
          }}>It comes in low and warm and lands on the wall of your room in a way that makes you want to stay still and watch it move. You do, for a moment.</p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '18px',
            fontStyle: 'italic',
            lineHeight: '1.9',
            color: '#5C3D1A',
            marginBottom: '20px',
          }}>Then you hear it — the sound of the backyard waking up. A chair being pulled across stone. The clink of a glass. Someone laughing at something before the day has properly begun.</p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '20px',
            fontStyle: 'italic',
            lineHeight: '1.7',
            color: '#1A0D00',
            fontWeight: '500',
          }}>You get up.</p>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section style={{
        padding: '100px 48px',
        background: '#1A0D00',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontStyle: 'italic',
          fontWeight: '300',
          lineHeight: '1.4',
          color: '#FAF7F2',
          maxWidth: '800px',
          margin: '0 auto 24px',
        }}>
          "There are mornings that ask nothing of you<br/>except that you show up. This is one of them."
        </p>
        <div style={{ width: '40px', height: '1px', background: '#C8882A', margin: '0 auto' }}/>
      </section>

      {/* MORNING SECTION */}
      <section style={{ padding: '120px 48px', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '40px',
          alignItems: 'start',
        }}>
          <div style={{ height: '520px', overflow: 'hidden', position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'url(/images/chef-saj.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}/>
          </div>
          <div style={{ padding: '40px 0' }}>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#C8882A',
              marginBottom: '20px',
            }}>Every morning</p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '19px',
              fontStyle: 'italic',
              lineHeight: '2',
              color: '#5C3D1A',
              marginBottom: '24px',
            }}>The table is already laid. Nobody announced it — it's just there, the way things appear at a house where someone was thinking about you before you arrived.</p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '19px',
              fontStyle: 'italic',
              lineHeight: '2',
              color: '#5C3D1A',
              marginBottom: '24px',
            }}>Labneh. Za'atar. Bread pulled apart with hands. Someone pours you coffee without being asked and carries on talking.</p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif',",
              fontSize: '19px',
              fontStyle: 'italic',
              lineHeight: '2',
              color: '#5C3D1A',
              marginBottom: '24px',
            }}>A child runs past barefoot on the warm terracotta, chasing something or no one.</p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '21px',
              fontStyle: 'italic',
              fontWeight: '500',
              color: '#1A0D00',
            }}>You have no plans. That is the plan.</p>
          </div>
          <div style={{ height: '520px', overflow: 'hidden', position: 'relative', marginTop: '80px' }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'url(/images/long-table.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}/>
          </div>
        </div>
      </section>

      {/* AMBER DIVIDER */}
      <div style={{ height: '2px', background: 'linear-gradient(to right, transparent, #C8882A, transparent)', margin: '0 48px' }}/>

      {/* EVENING SECTION */}
      <section style={{ padding: '120px 48px', maxWidth: '1300px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(30px, 4vw, 50px)',
          fontWeight: '400',
          fontStyle: 'italic',
          lineHeight: '1.2',
          color: '#1A0D00',
          maxWidth: '700px',
          marginBottom: '64px',
        }}>This is what you were looking for<br/>when you left the city.<br/><em style={{ color: '#C8882A' }}>You just didn't have a name for it yet.</em></h2>

        <div style={{
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
            }}/>
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(20,8,0,0.8), transparent)',
              padding: '32px 24px 24px',
            }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8882A' }}>Thursday evenings</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', fontStyle: 'italic', color: '#FAF7F2', marginTop: '4px' }}>Cinema by the pool</p>
            </div>
          </div>
          <div style={{ height: '480px', overflow: 'hidden', position: 'relative', marginTop: '60px' }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'url(/images/fire-pit.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}/>
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(20,8,0,0.8), transparent)',
              padding: '32px 24px 24px',
            }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8882A' }}>Every evening</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', fontStyle: 'italic', color: '#FAF7F2', marginTop: '4px' }}>The fire is always lit</p>
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
              fontSize: '21px',
              fontStyle: 'italic',
              fontWeight: '500',
              color: '#1A0D00',
              marginBottom: '40px',
            }}>Like home. The best version of it.</p>
            <Link href="/rooms" style={{
              display: 'inline-block',
              fontFamily: "'Jost', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: '500',
              color: '#FAF7F2',
              background: '#C8882A',
              padding: '14px 32px',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.target.style.background = '#1A0D00'; }}
            onMouseLeave={e => { e.target.style.background = '#C8882A'; }}
            >Reserve your stay</Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          section[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          section[style*="grid-template-columns: 1fr 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}

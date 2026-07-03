import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us — Marimba Hotel</title>
        <meta name="description" content="We are not here because Lebanon needs another hotel. We are here because it needs this." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Nav transparent={false} />

      {/* HERO */}
      <section style={{
        height: '80vh',
        minHeight: '560px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '72px',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/about-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}/>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(20,8,0,0.45)',
        }}/>
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#C8882A',
            marginBottom: '20px',
          }}>Damour · Lebanese Coast</p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(52px, 8vw, 96px)',
            fontWeight: '400',
            fontStyle: 'italic',
            color: '#FAF7F2',
            lineHeight: '1',
          }}>About us</h1>
        </div>
      </section>

      {/* OPENING */}
      <section style={{
        padding: '120px 48px',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(32px, 4vw, 52px)',
          fontWeight: '400',
          fontStyle: 'italic',
          lineHeight: '1.25',
          color: '#1A0D00',
          marginBottom: '48px',
        }}>
          We are not here because<br/>Lebanon needs another hotel.<br/>
          <span style={{ color: '#C8882A' }}>We are here because it needs this.</span>
        </h2>
        <div style={{ width: '40px', height: '2px', background: '#C8882A', margin: '0 auto' }}/>
      </section>

      {/* WHY + HOW */}
      <section style={{
        padding: '0 48px 120px',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
      }}>
        {/* WHY */}
        <div>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#C8882A',
            marginBottom: '24px',
            paddingBottom: '24px',
            borderBottom: '1px solid #E0CDB0',
          }}>Why we exist</p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '19px',
            fontStyle: 'italic',
            lineHeight: '2',
            color: '#5C3D1A',
            marginBottom: '24px',
          }}>We believe something is disappearing from Lebanese summer. Not the heat, not the food, not the coast. Something quieter than that.</p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '19px',
            fontStyle: 'italic',
            lineHeight: '2',
            color: '#5C3D1A',
            marginBottom: '24px',
          }}>The unhurried morning. The table that keeps growing. The particular Lebanese instinct — the one that says there is always room for one more, always enough, always a reason to stay a little longer.</p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '19px',
            fontStyle: 'italic',
            lineHeight: '2',
            color: '#5C3D1A',
            marginBottom: '24px',
          }}>We believe that instinct deserves a home. A real one. Not a resort. Not a package. A backyard — shared, generous, belonging to whoever is in it.</p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '21px',
            fontStyle: 'italic',
            fontWeight: '500',
            color: '#1A0D00',
          }}>That is why we are here.</p>
        </div>

        {/* HOW */}
        <div>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#C8882A',
            marginBottom: '24px',
            paddingBottom: '24px',
            borderBottom: '1px solid #E0CDB0',
          }}>How we do it</p>
          {[
            'We light the fire pit at sundown and don\'t announce it — trusting that the people who belong here find their way to it.',
            'We put out the long table on Saturday evenings and watch strangers become the kind of people who pass dishes across without being asked.',
            'We set up the cinema screen by the pool and let families arrange themselves on the grass like they have been coming here for years.',
            'We think about mornings. About what it feels like when the breakfast is already laid and the coffee is poured before you sit down.',
            'We don\'t train our team to be receptionists. We ask them to be the kind of people who know the neighbourhood, remember your name, and mean it when they say: see you next summer.',
          ].map((text, i) => (
            <p key={i} style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '19px',
              fontStyle: 'italic',
              lineHeight: '2',
              color: i === 4 ? '#1A0D00' : '#5C3D1A',
              fontWeight: i === 4 ? '500' : '400',
              marginBottom: '20px',
            }}>{text}</p>
          ))}
        </div>
      </section>

      {/* DARK PULL */}
      <section style={{
        background: '#1A0D00',
        padding: '100px 48px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(24px, 3.5vw, 42px)',
          fontStyle: 'italic',
          fontWeight: '300',
          color: '#FAF7F2',
          lineHeight: '1.5',
          maxWidth: '800px',
          margin: '0 auto 32px',
        }}>
          "We are not trying to be a better hotel.<br/>We are trying to be something older<br/>and more important than that."
        </p>
        <div style={{ width: '40px', height: '1px', background: '#C8882A', margin: '0 auto 40px' }}/>
        <Link href="/rooms" style={{
          display: 'inline-block',
          fontFamily: "'Jost', sans-serif",
          fontSize: '11px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          fontWeight: '500',
          color: '#1A0D00',
          background: '#FAF7F2',
          padding: '14px 36px',
          transition: 'all 0.3s',
        }}
        onMouseEnter={e => { e.target.style.background = '#C8882A'; e.target.style.color = '#FAF7F2'; }}
        onMouseLeave={e => { e.target.style.background = '#FAF7F2'; e.target.style.color = '#1A0D00'; }}
        >Reserve your stay</Link>
      </section>

      {/* WHAT YOU'LL FIND */}
      <section style={{
        padding: '120px 48px',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '10px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#C8882A',
          marginBottom: '40px',
        }}>What you'll find</p>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '19px',
          fontStyle: 'italic',
          lineHeight: '2',
          color: '#5C3D1A',
          marginBottom: '20px',
        }}>Sixty rooms on the Damour highway, on a stretch of the Lebanese coast that still moves at its own pace. A curved pool surrounded by rattan parasols and linen loungers. Balconies draped in jasmine. Terracotta warm underfoot. The Mediterranean visible from the backyard every morning.</p>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '19px',
          fontStyle: 'italic',
          lineHeight: '2',
          color: '#5C3D1A',
          marginBottom: '20px',
        }}>A fire pit. A long table. A cinema screen on Thursday evenings. A Lebanese breakfast on Sunday mornings that nobody announces and everyone finds.</p>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '22px',
          fontStyle: 'italic',
          fontWeight: '500',
          color: '#1A0D00',
        }}>A backyard that, by the second morning, already feels like yours.</p>

        <div style={{
          marginTop: '64px',
          padding: '40px',
          borderLeft: '3px solid #C8882A',
          background: '#F5ECD7',
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '24px',
            fontStyle: 'italic',
            color: '#1A0D00',
            lineHeight: '1.5',
          }}>"The backyard was always here.<br/>We just finally opened the gate."</p>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          section[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </>
  )
}

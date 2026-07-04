import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us — Marimba Hotel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="We are not here because Lebanon needs another hotel. We are here because it needs this. About Marimba Hotel, Damour." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <Nav transparent={false} />

      {/* HERO */}
      <section style={{
        position: 'relative',
        height: '360px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/about-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#8A8078',
        }}/>
        <div style={{ position: 'relative' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '12px' }}>Damour · Lebanese Coast</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: '400', color: '#FAF7F2' }}>About us</h1>
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section style={{ padding: '100px 48px 80px', background: '#FAF7F2', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(28px, 4vw, 44px)', color: '#1A0D00', lineHeight: '1.3', maxWidth: '900px', margin: '0 auto' }}>
          We are not here because<br/>Lebanon needs another hotel.<br/><em style={{ color: '#C8882A' }}>We are here because it needs this.</em>
        </h2>
        <div style={{ width: '48px', height: '2px', background: '#C8882A', margin: '48px auto 0' }}/>
      </section>

      {/* WHY WE EXIST / HOW WE DO IT */}
      <section style={{ padding: '0 48px 100px', background: '#FAF7F2' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          <div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(200,136,42,0.3)' }}>Why we exist</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#5C3D1A', lineHeight: '1.9', marginBottom: '20px' }}>We believe something is disappearing from Lebanese summer. Not the heat, not the food, not the coast. Something quieter than that.</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#5C3D1A', lineHeight: '1.9', marginBottom: '20px' }}>The unhurried morning. The table that keeps growing. The particular Lebanese instinct — the one that says there is always room for one more, always enough, always a reason to stay a little longer.</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#5C3D1A', lineHeight: '1.9', marginBottom: '20px' }}>We believe that instinct deserves a home. A real one. Not a resort. Not a package. A backyard — shared, generous, belonging to whoever is in it.</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '19px', color: '#1A0D00', fontWeight: '500' }}>That is why we are here.</p>
          </div>
          <div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(200,136,42,0.3)' }}>How we do it</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#5C3D1A', lineHeight: '1.9', marginBottom: '20px' }}>We light the fire pit at sundown and don't announce it — trusting that the people who belong here find their way to it.</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#5C3D1A', lineHeight: '1.9', marginBottom: '20px' }}>We put out the long table on Saturday evenings and watch strangers become the kind of people who pass dishes across without being asked.</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#5C3D1A', lineHeight: '1.9', marginBottom: '20px' }}>We set up the cinema screen by the pool and let families arrange themselves on the grass like they have been coming here for years.</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#5C3D1A', lineHeight: '1.9', marginBottom: '20px' }}>We think about mornings. About what it feels like when the breakfast is already laid and the coffee is poured before you sit down.</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '19px', color: '#1A0D00', fontWeight: '500' }}>We don't train our team to be receptionists. We ask them to be the kind of people who know the neighbourhood, remember your name, and mean it when they say: see you next summer.</p>
          </div>
        </div>
      </section>

      {/* DARK QUOTE */}
      <section style={{ background: '#1A0D00', padding: '100px 48px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(24px, 3.5vw, 38px)', color: '#FAF7F2', lineHeight: '1.5', maxWidth: '900px', margin: '0 auto' }}>
          "We are not trying to be a better hotel.<br/>We are trying to be something older<br/>and more important than that."
        </p>
        <div style={{ width: '48px', height: '2px', background: '#C8882A', margin: '40px auto' }}/>
        <Link href="/booking" style={{
          display: 'inline-block',
          fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: '600',
          color: '#1A0D00', background: '#FAF7F2', padding: '18px 40px', textDecoration: 'none',
        }}>Reserve Your Stay</Link>
      </section>

      {/* WHAT YOU'LL FIND */}
      <section style={{ padding: '100px 48px', background: '#FAF7F2' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '24px' }}>What you'll find</p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '19px', color: '#5C3D1A', lineHeight: '1.9', marginBottom: '24px' }}>Sixty rooms on the Damour highway, on a stretch of the Lebanese coast that still moves at its own pace. A curved pool surrounded by rattan parasols and linen loungers. Balconies draped in jasmine. Terracotta warm underfoot. The Mediterranean visible from the backyard every morning.</p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '19px', color: '#5C3D1A', lineHeight: '1.9', marginBottom: '24px' }}>A fire pit. A long table. A cinema screen on Thursday evenings. A Lebanese breakfast on Sunday mornings that nobody announces and everyone finds.</p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '20px', color: '#1A0D00', fontWeight: '500', marginBottom: '48px' }}>A backyard that, by the second morning, already feels like yours.</p>
          <div style={{ borderLeft: '3px solid #C8882A', background: '#F3E9D8', padding: '40px 48px' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '20px', color: '#1A0D00', lineHeight: '1.6' }}>"The backyard was always here.<br/>We just finally opened the gate."</p>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </>
  )
}

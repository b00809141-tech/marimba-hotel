import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const photos = [
  { src: '/images/gallery-1.jpg', tall: true },
  { src: '/images/gallery-2.jpg' },
  { src: '/images/gallery-3.jpg' },
  { src: '/images/gallery-4.jpg' },
  { src: '/images/gallery-5.jpg', tall: true },
  { src: '/images/gallery-6.jpg' },
  { src: '/images/gallery-7.jpg' },
  { src: '/images/gallery-8.jpg', tall: true },
  { src: '/images/gallery-9.jpg' },
  { src: '/images/gallery-10.jpg' },
  { src: '/images/gallery-11.jpg' },
  { src: '/images/gallery-12.jpg', tall: true },
]

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery — Marimba Hotel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A look at the backyard, the rooms, and the light. Marimba Hotel, Damour, Lebanon." />
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
          backgroundImage: 'url(/images/gallery-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#8A8078',
        }}/>
        <div style={{ position: 'relative' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '12px' }}>Damour · Lebanese Coast</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: '400', color: '#FAF7F2' }}>Gallery</h1>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: '80px 48px 40px', background: '#FAF7F2', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(20px, 2.5vw, 26px)', color: '#5C3D1A', maxWidth: '700px', margin: '0 auto' }}>
          A look at the backyard, the rooms, and the light — before you've even arrived.
        </p>
      </section>

      {/* GRID */}
      <section style={{ padding: 'clamp(24px, 5vw, 40px) clamp(20px, 6vw, 48px) clamp(60px, 10vw, 120px)', background: '#FAF7F2' }}>
        <div className="gallery-grid" style={{
          maxWidth: '1300px',
          margin: '0 auto',
          columnCount: 3,
          columnGap: '24px',
        }}>
          {photos.map((photo, i) => (
            <div key={i} style={{
              breakInside: 'avoid',
              marginBottom: '24px',
              height: photo.tall ? '440px' : '300px',
              backgroundImage: `url(${photo.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#E4D3BE',
            }}/>
          ))}
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .gallery-grid {
            column-count: 2 !important;
          }
        }
        @media (max-width: 560px) {
          .gallery-grid {
            column-count: 1 !important;
          }
        }
      `}</style>
    </>
  )
}

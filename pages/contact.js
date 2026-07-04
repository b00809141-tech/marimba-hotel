import Head from 'next/head'
import { useState } from 'react'
import Nav from '../components/Nav'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSend = () => {
    const lines = [
      "Hello! I have a question for Marimba Hotel.",
      '',
      `Name: ${form.name || '-'}`,
      `Email: ${form.email || '-'}`,
    ]
    if (form.phone) lines.push(`Phone: ${form.phone}`)
    if (form.message) lines.push(`Message: ${form.message}`)
    const message = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/96176417651?text=${message}`, '_blank')
  }

  const inp = { width: '100%', padding: '0 0 12px', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(200,136,42,0.4)', fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', fontStyle: 'italic', color: '#1A0D00', outline: 'none' }
  const lbl = { fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5C3D1A', display: 'block', marginBottom: '10px' }

  return (
    <>
      <Head>
        <title>Contact & Socials — Marimba Hotel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A question, a special request, or just a hello — we're here. Contact Marimba Hotel, Damour, Lebanon." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <Nav transparent={false} />

      <div className="contact-grid" style={{ marginTop: '64px', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 'calc(100vh - 64px)' }}>
        {/* FIND US */}
        <div style={{ background: '#1A0D00', padding: 'clamp(48px, 6vw, 96px) clamp(32px, 5vw, 88px)' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '24px' }}>Find us</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: '400', color: '#FAF7F2', lineHeight: '1.15', marginBottom: '56px' }}>The backyard<br/>is waiting.</h1>

          <div style={{ borderTop: '1px solid rgba(200,136,42,0.25)' }}>
            <div style={{ padding: '24px 0', borderBottom: '1px solid rgba(200,136,42,0.25)' }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '10px' }}>Address</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#FAF7F2', lineHeight: '1.6' }}>Damour Highway<br/>Damour, Lebanon</p>
            </div>
            <div style={{ padding: '24px 0', borderBottom: '1px solid rgba(200,136,42,0.25)' }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '10px' }}>Phone</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#FAF7F2' }}>+961 76 417 651</p>
            </div>
            <div style={{ padding: '24px 0', borderBottom: '1px solid rgba(200,136,42,0.25)' }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '10px' }}>Email</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#FAF7F2' }}>marimbasdamour@outlook.com</p>
            </div>
            <div style={{ padding: '24px 0', borderBottom: '1px solid rgba(200,136,42,0.25)' }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '10px' }}>From Beirut</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#FAF7F2', lineHeight: '1.6' }}>20 minutes south<br/>via the coastal highway</p>
            </div>
          </div>

          <div style={{ marginTop: '56px' }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '16px' }}>Follow us</p>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a href="#" style={{ fontFamily: "'Jost', sans-serif", fontSize: '13px', letterSpacing: '0.05em', color: '#FAF7F2', textDecoration: 'none' }}>@MARIMBA.HOTEL</a>
              <a href="#" style={{ fontFamily: "'Jost', sans-serif", fontSize: '13px', letterSpacing: '0.05em', color: '#FAF7F2', textDecoration: 'none' }}>@MARIMBA.HOTEL</a>
            </div>
          </div>
        </div>

        {/* GET IN TOUCH */}
        <div style={{ background: '#FAF3EA', padding: 'clamp(48px, 6vw, 96px) clamp(32px, 5vw, 88px)' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '24px' }}>Get in touch</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: '400', color: '#1A0D00', lineHeight: '1.3', marginBottom: '56px' }}>A question, a special request,<br/>or just a hello — we're here.</h2>

          <div style={{ marginBottom: '36px' }}>
            <label style={lbl}>Your name</label>
            <input type="text" placeholder="How shall we welcome you?" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inp} />
          </div>
          <div style={{ marginBottom: '36px' }}>
            <label style={lbl}>Email</label>
            <input type="email" placeholder="We'll write back" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inp} />
          </div>
          <div style={{ marginBottom: '36px' }}>
            <label style={lbl}>Phone</label>
            <input type="tel" placeholder="Optional" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={inp} />
          </div>
          <div style={{ marginBottom: '48px' }}>
            <label style={lbl}>Message</label>
            <input type="text" placeholder="Tell us what you're looking for..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={inp} />
          </div>

          <button onClick={handleSend} style={{
            fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: '600',
            color: '#1A0D00', background: '#C8882A', padding: '18px 40px', border: 'none', cursor: 'pointer',
          }}>Send Message</button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </>
  )
}

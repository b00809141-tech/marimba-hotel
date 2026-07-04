import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const rooms = [
  {
    id: 'standard',
    name: 'Standard Room',
    price: 100,
    maxGuests: 3,
    image: '/images/standard-room.jpg',
    description: 'King bed · Sea view · Private balcony · Daily housekeeping · Pool access · Access to Al Jisr Resort · F&B on site',
    allowConnecting: true,
  },
  {
    id: 'terrace',
    name: 'Room with Terrace Access',
    price: 120,
    maxGuests: 3,
    image: '/images/terrace-room.jpg',
    description: 'Poolside · King bed · Sea view · Private terrace · Daily housekeeping · Pool access · Access to Al Jisr Resort · F&B on site',
    allowConnecting: false,
  },
  {
    id: 'suite',
    name: 'Suite',
    price: 140,
    maxGuests: 5,
    image: '/images/suite.jpg',
    description: 'King bed · Sea view · Private balcony · Larger living area · Daily housekeeping · Pool access · Access to Al Jisr Resort · F&B on site',
    allowConnecting: false,
  },
  {
    id: 'villa',
    name: 'Villa',
    price: 200,
    maxGuests: 6,
    image: '/images/villa.jpg',
    description: 'Top floor · Panoramic sea & mountain views · Private terrace · Spacious living area · King bed · Air conditioning · Private bathroom',
    allowConnecting: false,
  },
]

export default function Booking() {
  const router = useRouter()
  const preselected = router.query.room || 'standard'
  const [selectedRoom, setSelectedRoom] = useState(preselected)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)
  const [connectedRoom, setConnectedRoom] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', requests: '' })
  const room = rooms.find(r => r.id === selectedRoom) || rooms[0]
  const nights = checkIn && checkOut ? Math.max(0, Math.round((new Date(checkOut) - new Date(checkIn)) / 86400000)) : 0
  const total = nights * (room.price + (connectedRoom && room.allowConnecting ? room.price : 0))
  const handleReserve = () => {
    const lines = [
      "Hello! I'd like to reserve a room at Marimba Hotel.",
      '',
      `Room: ${room.name}${connectedRoom && room.allowConnecting ? ' + connected room' : ''}`,
      `Check-in: ${checkIn ? new Date(checkIn).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : '-'}`,
      `Check-out: ${checkOut ? new Date(checkOut).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : '-'}`,
      `Guests: ${guests}`,
      `Total: $${total}`,
      `Name: ${form.name || '-'}`,
    ]
    if (form.phone) lines.push(`Phone: ${form.phone}`)
    if (form.requests) lines.push(`Special requests: ${form.requests}`)
    const message = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/96176417651?text=${message}`, '_blank')
  }
  const inp = { width: '100%', padding: '13px 14px', background: '#F4F7FC', border: '1px solid #C5D4E8', fontFamily: 'Georgia, serif', fontSize: '16px', fontStyle: 'italic', color: '#0A1F3D', outline: 'none', marginTop: '8px' }
  const lbl = { fontFamily: 'sans-serif', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1A1A1A', display: 'block' }
  return (
    <>
      <Head>
        <title>Reserve Your Stay, Marimba Hotel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav transparent={false} />
      <div style={{ marginTop: '64px', background: '#F4F7FC', padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 48px)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'sans-serif', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '12px' }}>Marimba Hotel · Damour</p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '400', fontStyle: 'italic', color: '#0A1F3D', lineHeight: '1.1', marginBottom: '48px' }}>Reserve your stay</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>
            <div>
              <p style={{ fontFamily: 'sans-serif', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #C5D4E8' }}>Choose your room</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
                {rooms.map(r => (
                  <div key={r.id} onClick={() => { setSelectedRoom(r.id); if (guests > (rooms.find(x => x.id === r.id) || {}).maxGuests) setGuests(r.maxGuests) }} style={{ padding: '18px 20px', border: selectedRoom === r.id ? '2px solid #C8882A' : '1px solid #C5D4E8', background: selectedRoom === r.id ? '#EEF3FA' : '#F4F7FC', cursor: 'pointer', display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ width: '84px', height: '64px', flexShrink: 0, backgroundImage: `url(${r.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#E4D3BE' }}/>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                      <div>
                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: '500', color: '#0A1F3D', marginBottom: '3px' }}>{r.name}</p>
                        <p style={{ fontFamily: 'sans-serif', fontSize: '11px', color: '#9A7A5A', fontWeight: '300' }}>{r.description}</p>
                        <p style={{ fontFamily: 'sans-serif', fontSize: '10px', color: '#9A7A5A', fontWeight: '300', marginTop: '4px' }}>Max {r.maxGuests} guest{r.maxGuests > 1 ? 's' : ''}</p>
                      </div>
                      <p style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: '500', color: '#C8882A', whiteSpace: 'nowrap' }}>${r.price}<span style={{ fontSize: '12px', color: '#9A7A5A', fontWeight: '300' }}>/night</span></p>
                    </div>
                  </div>
                ))}
              </div>

              {room.allowConnecting && (
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '36px', cursor: 'pointer' }}>
                  <input type="checkbox" checked={connectedRoom} onChange={e => setConnectedRoom(e.target.checked)} style={{ width: '18px', height: '18px' }} />
                  <span style={{ fontFamily: 'Georgia, serif', fontSize: '15px', fontStyle: 'italic', color: '#0A1F3D' }}>Add a connected room (for families or larger groups)</span>
                </label>
              )}

              <p style={{ fontFamily: 'sans-serif', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #C5D4E8' }}>Your dates</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                <div><label style={lbl}>Check-in</label><input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} min={new Date().toISOString().split('T')[0]} style={inp}/></div>
                <div><label style={lbl}>Check-out</label><input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} min={checkIn || new Date().toISOString().split('T')[0]} style={inp}/></div>
              </div>
              <div style={{ marginBottom: '36px' }}><label style={lbl}>Guests</label><select value={guests} onChange={e => setGuests(Number(e.target.value))} style={{ ...inp, cursor: 'pointer' }}>{Array.from({ length: room.maxGuests }, (_, i) => i + 1).map(n => <option key={n} value={n}>{n} {n===1?'guest':'guests'}</option>)}</select></div>
              <p style={{ fontFamily: 'sans-serif', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #C5D4E8' }}>Your details</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                <div><label style={lbl}>Full name</label><input type="text" placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={inp}/></div>
                <div><label style={lbl}>Email</label><input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={inp}/></div>
              </div>
              <div style={{ marginBottom: '12px' }}><label style={lbl}>Phone</label><input type="tel" placeholder="+961 ..." value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} style={inp}/></div>
              <div style={{ marginBottom: '32px' }}><label style={lbl}>Special requests</label><textarea placeholder="Anything we should know..." value={form.requests} onChange={e => setForm({...form, requests: e.target.value})} rows={3} style={{ ...inp, resize: 'none' }}/></div>
              <button onClick={nights > 0 ? handleReserve : undefined} style={{ width: '100%', fontFamily: 'sans-serif', fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: '500', color: '#F4F7FC', background: nights > 0 ? '#C8882A' : '#C8A870', padding: '16px', border: 'none', cursor: nights > 0 ? 'pointer' : 'not-allowed' }}>
                {nights > 0 ? `Confirm reservation, $${total}` : 'Select your dates to continue'}
              </button>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', fontStyle: 'italic', color: '#9A7A5A', textAlign: 'center', marginTop: '12px' }}>Free cancellation up to 48 hours before arrival.</p>
            </div>
            <div style={{ background: '#0A1F3D', padding: '36px' }}>
              <div style={{ height: '160px', marginBottom: '24px', backgroundImage: `url(${room.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#E4D3BE' }}/>
              <p style={{ fontFamily: 'sans-serif', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8882A', marginBottom: '20px' }}>Your reservation</p>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: '500', color: '#F4F7FC', marginBottom: '4px' }}>{room.name}{connectedRoom && room.allowConnecting ? ' + connected room' : ''}</p>
              <p style={{ fontFamily: 'sans-serif', fontSize: '12px', color: '#9A7A5A', fontWeight: '300', marginBottom: '28px' }}>Marimba Hotel · Damour, Lebanon</p>
              <div style={{ borderTop: '1px solid rgba(200,136,42,0.2)', paddingTop: '20px' }}>
                {[
                  { label: 'Check-in', value: checkIn ? new Date(checkIn).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : '—' },
                  { label: 'Check-out', value: checkOut ? new Date(checkOut).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : '—' },
                  { label: 'Nights', value: nights > 0 ? `${nights} night${nights > 1 ? 's' : ''}` : '—' },
                  { label: 'Guests', value: `${guests} guest${guests > 1 ? 's' : ''}` },
                  { label: 'Rate', value: `$${room.price}${connectedRoom && room.allowConnecting ? ` + $${room.price} (connected room)` : ''} / night` },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <p style={{ fontFamily: 'sans-serif', fontSize: '11px', color: '#9A7A5A', fontWeight: '300' }}>{item.label}</p>
                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '15px', fontStyle: 'italic', color: '#C5D4E8' }}>{item.value}</p>
                  </div>
                ))}
              </div>
              {nights > 0 && (
                <div style={{ borderTop: '1px solid rgba(200,136,42,0.3)', paddingTop: '16px', marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <p style={{ fontFamily: 'sans-serif', fontSize: '11px', color: '#C8882A', fontWeight: '500', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Total</p>
                  <p style={{ fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: '500', color: '#F4F7FC' }}>${total}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

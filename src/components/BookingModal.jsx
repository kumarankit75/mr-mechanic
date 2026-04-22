// import { useState } from 'react'
// import { useAuth } from '../context/AuthContext'
// import { createBooking } from '../api/bookings'

// function BookingModal({ service, onClose, onSuccess }) {
//   const { user } = useAuth()
//   const [form, setForm] = useState({
//     scheduledDate: '',
//     scheduledTime: '',
//     address: '',
//     notes: '',
//   })
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)

//   const TIME_SLOTS = [
//     '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
//     '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
//     '04:00 PM', '05:00 PM', '06:00 PM',
//   ]

//   const handleChange = (e) => {
//     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
//     setError('')
//   }

//   const handleSubmit = async () => {
//     if (!form.scheduledDate || !form.scheduledTime || !form.address) {
//       setError('Please fill date, time and address')
//       return
//     }
//     setLoading(true)
//     try {
//       await createBooking({
//         serviceId: service._backendId || service.id,
//         scheduledDate: form.scheduledDate,
//         scheduledTime: form.scheduledTime,
//         address: form.address,
//         totalAmount: service.numericPrice,
//         notes: form.notes,
//       })
//       onSuccess()
//     } catch (err) {
//       setError(err.response?.data?.message || 'Booking failed. Please try again.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Get today's date as min date
//   const today = new Date().toISOString().split('T')[0]

//   return (
//     <div
//       style={{
//         position: 'fixed', inset: 0,
//         background: 'rgba(0,0,0,0.45)',
//         zIndex: 1000,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 24,
//       }}
//       onClick={onClose}
//     >
//       <div
//         style={{
//           background: '#FFFFFF',
//           borderRadius: 24,
//           width: '100%',
//           maxWidth: 480,
//           fontFamily: "'Outfit', sans-serif",
//           position: 'relative',
//           overflow: 'hidden',
//           maxHeight: '90vh',
//           overflowY: 'auto',
//         }}
//         onClick={e => e.stopPropagation()}
//       >
//         <style>{`
//           @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&family=Outfit:wght@300;400;500;600&display=swap');
//           .booking-input {
//             width: 100%;
//             padding: 12px 16px;
//             border: 1px solid #E8E0D5;
//             border-radius: 12px;
//             font-family: 'Outfit', sans-serif;
//             font-size: 14px;
//             font-weight: 300;
//             color: #1A1A18;
//             outline: none;
//             transition: border-color 0.15s;
//             box-sizing: border-box;
//             background: #FDFCFB;
//           }
//           .booking-input:focus { border-color: #5C7A6A; }
//           .time-slot {
//             padding: 9px 14px;
//             border: 1px solid #E8E0D5;
//             border-radius: 10px;
//             font-family: 'Outfit', sans-serif;
//             font-size: 12px;
//             font-weight: 500;
//             color: #8A8A85;
//             cursor: pointer;
//             transition: all 0.15s;
//             background: #FDFCFB;
//             white-space: nowrap;
//           }
//           .time-slot:hover {
//             border-color: #5C7A6A;
//             color: #3D5549;
//             background: #F0F7F3;
//           }
//           .time-slot.selected {
//             border-color: #5C7A6A;
//             background: #5C7A6A;
//             color: #FFFFFF;
//           }
//           .btn-confirm {
//             width: 100%;
//             padding: 14px;
//             background: #1A1A18;
//             color: white;
//             border: none;
//             border-radius: 12px;
//             font-family: 'Outfit', sans-serif;
//             font-size: 14px;
//             font-weight: 600;
//             cursor: pointer;
//             transition: background 0.15s;
//           }
//           .btn-confirm:hover { background: #3D5549; }
//           .btn-confirm:disabled {
//             background: #AEAEA8;
//             cursor: not-allowed;
//           }
//         `}</style>

//         {/* Service Banner */}
//         <div style={{ position: 'relative', height: 140, overflow: 'hidden' }}>
//           <img
//             src={service.image}
//             alt={service.name}
//             style={{
//               width: '100%', height: '100%',
//               objectFit: 'cover', display: 'block',
//             }}
//           />
//           <div style={{
//             position: 'absolute', inset: 0,
//             background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))',
//           }} />
//           <div style={{
//             position: 'absolute', bottom: 16, left: 20, right: 20,
//             display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
//           }}>
//             <div>
//               <div style={{
//                 fontSize: 16, fontWeight: 600, color: '#FFFFFF', marginBottom: 2,
//               }}>
//                 {service.name}
//               </div>
//               <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>
//                 {service.desc}
//               </div>
//             </div>
//             <div style={{
//               fontFamily: "'Cormorant Garamond', Georgia, serif",
//               fontSize: 24, fontWeight: 500, color: '#FFFFFF',
//             }}>
//               {service.price}
//             </div>
//           </div>
//           {/* Close button */}
//           <button
//             onClick={onClose}
//             style={{
//               position: 'absolute', top: 12, right: 12,
//               width: 32, height: 32, borderRadius: '50%',
//               border: 'none', background: 'rgba(255,255,255,0.2)',
//               color: '#FFFFFF', cursor: 'pointer', fontSize: 14,
//               display: 'flex', alignItems: 'center', justifyContent: 'center',
//               backdropFilter: 'blur(4px)',
//             }}
//           >
//             ✕
//           </button>
//         </div>

//         {/* Form */}
//         <div style={{ padding: '24px 24px 28px' }}>

//           {/* Section label */}
//           <div style={{
//             fontSize: 10, fontWeight: 600, letterSpacing: '3px',
//             textTransform: 'uppercase', color: '#5C7A6A', marginBottom: 20,
//           }}>
//             Schedule your booking
//           </div>

//           <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

//             {/* Date */}
//             <div>
//               <label style={{
//                 fontSize: 12, fontWeight: 500, color: '#1A1A18',
//                 display: 'block', marginBottom: 6,
//               }}>
//                 Select date
//               </label>
//               <input
//                 className="booking-input"
//                 type="date"
//                 name="scheduledDate"
//                 min={today}
//                 value={form.scheduledDate}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Time slots */}
//             <div>
//               <label style={{
//                 fontSize: 12, fontWeight: 500, color: '#1A1A18',
//                 display: 'block', marginBottom: 10,
//               }}>
//                 Select time
//               </label>
//               <div style={{
//                 display: 'flex', flexWrap: 'wrap', gap: 8,
//               }}>
//                 {TIME_SLOTS.map(slot => (
//                   <button
//                     key={slot}
//                     className={`time-slot ${form.scheduledTime === slot ? 'selected' : ''}`}
//                     onClick={() => {
//                       setForm(prev => ({ ...prev, scheduledTime: slot }))
//                       setError('')
//                     }}
//                   >
//                     {slot}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Address */}
//             <div>
//               <label style={{
//                 fontSize: 12, fontWeight: 500, color: '#1A1A18',
//                 display: 'block', marginBottom: 6,
//               }}>
//                 Service address
//               </label>
//               <input
//                 className="booking-input"
//                 type="text"
//                 name="address"
//                 placeholder="Enter your full address"
//                 value={form.address}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Notes */}
//             <div>
//               <label style={{
//                 fontSize: 12, fontWeight: 500, color: '#1A1A18',
//                 display: 'block', marginBottom: 6,
//               }}>
//                 Notes <span style={{ color: '#AEAEA8', fontWeight: 300 }}>(optional)</span>
//               </label>
//               <textarea
//                 className="booking-input"
//                 name="notes"
//                 placeholder="Any special instructions for the expert..."
//                 value={form.notes}
//                 onChange={handleChange}
//                 rows={3}
//                 style={{ resize: 'none' }}
//               />
//             </div>

//             {/* Error */}
//             {error && (
//               <div style={{
//                 fontSize: 13, color: '#C0392B',
//                 background: '#FDF0EE',
//                 border: '1px solid #F5C6C0',
//                 borderRadius: 8, padding: '10px 14px',
//               }}>
//                 {error}
//               </div>
//             )}

//             {/* Price summary */}
//             <div style={{
//               background: '#F8F5F0',
//               border: '1px solid #E8E0D5',
//               borderRadius: 12,
//               padding: '14px 16px',
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//             }}>
//               <div>
//                 <div style={{ fontSize: 12, color: '#8A8A85' }}>Total amount</div>
//                 <div style={{
//                   fontFamily: "'Cormorant Garamond', Georgia, serif",
//                   fontSize: 24, fontWeight: 500, color: '#1A1A18',
//                 }}>
//                   {service.price}
//                 </div>
//               </div>
//               <div style={{
//                 fontSize: 11, color: '#5C7A6A',
//                 background: '#EAF5EE',
//                 border: '1px solid #C8DDD2',
//                 borderRadius: 100,
//                 padding: '4px 12px',
//                 fontWeight: 500,
//               }}>
//                 Pay after service
//               </div>
//             </div>

//             {/* Submit */}
//             <button
//               className="btn-confirm"
//               onClick={handleSubmit}
//               disabled={loading}
//             >
//               {loading ? 'Confirming booking...' : 'Confirm booking →'}
//             </button>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BookingModal











import { useState } from 'react'
import { createBooking } from '../api/bookings'

function BookingModal({ service, onClose, onSuccess }) {
  const [form, setForm] = useState({
    scheduledDate: '',
    scheduledTime: '',
    address: '',
    notes: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const TIME_SLOTS = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM', '06:00 PM',
  ]

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async () => {
    if (!form.scheduledDate || !form.scheduledTime || !form.address) {
      setError('Please fill date, time and address')
      return
    }
    setLoading(true)
    try {
      await createBooking({
        scheduledDate: form.scheduledDate,
        scheduledTime: form.scheduledTime,
        address: form.address,
        totalAmount: service.numericPrice,
        notes: form.notes,
        serviceName: service.name,
      })
      onSuccess()
    } catch (err) {
      setError(err.response?.data?.message || 'Booking failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.45)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: 24,
          width: '100%',
          maxWidth: 480,
          fontFamily: "'Outfit', sans-serif",
          position: 'relative',
          overflow: 'hidden',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
        onClick={e => e.stopPropagation()}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&family=Outfit:wght@300;400;500;600&display=swap');
          .booking-input {
            width: 100%;
            padding: 12px 16px;
            border: 1px solid #E8E0D5;
            border-radius: 12px;
            font-family: 'Outfit', sans-serif;
            font-size: 14px;
            font-weight: 300;
            color: #1A1A18;
            outline: none;
            transition: border-color 0.15s;
            box-sizing: border-box;
            background: #FDFCFB;
          }
          .booking-input:focus { border-color: #5C7A6A; }
          .booking-input::placeholder { color: #AEAEA8; }
          .time-slot {
            padding: 9px 14px;
            border: 1px solid #E8E0D5;
            border-radius: 10px;
            font-family: 'Outfit', sans-serif;
            font-size: 12px;
            font-weight: 500;
            color: #8A8A85;
            cursor: pointer;
            transition: all 0.15s;
            background: #FDFCFB;
            white-space: nowrap;
          }
          .time-slot:hover {
            border-color: #5C7A6A;
            color: #3D5549;
            background: #F0F7F3;
          }
          .time-slot.selected {
            border-color: #5C7A6A;
            background: #5C7A6A;
            color: #FFFFFF;
          }
          .btn-confirm {
            width: 100%;
            padding: 14px;
            background: #1A1A18;
            color: white;
            border: none;
            border-radius: 12px;
            font-family: 'Outfit', sans-serif;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.15s;
          }
          .btn-confirm:hover { background: #3D5549; }
          .btn-confirm:disabled {
            background: #AEAEA8;
            cursor: not-allowed;
          }
        `}</style>

        {/* Service Banner */}
        <div style={{ position: 'relative', height: 140, overflow: 'hidden' }}>
          <img
            src={service.image}
            alt={service.name}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', display: 'block',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))',
          }} />
          <div style={{
            position: 'absolute', bottom: 16, left: 20, right: 20,
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          }}>
            <div>
              <div style={{
                fontSize: 16, fontWeight: 600,
                color: '#FFFFFF', marginBottom: 2,
              }}>
                {service.name}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>
                {service.desc}
              </div>
            </div>
            <div style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 24, fontWeight: 500, color: '#FFFFFF',
            }}>
              {service.price}
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 12, right: 12,
              width: 32, height: 32, borderRadius: '50%',
              border: 'none',
              background: 'rgba(255,255,255,0.2)',
              color: '#FFFFFF', cursor: 'pointer', fontSize: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div style={{ padding: '24px 24px 28px' }}>

          <div style={{
            fontSize: 10, fontWeight: 600, letterSpacing: '3px',
            textTransform: 'uppercase', color: '#5C7A6A', marginBottom: 20,
          }}>
            Schedule your booking
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Date */}
            <div>
              <label style={{
                fontSize: 12, fontWeight: 500, color: '#1A1A18',
                display: 'block', marginBottom: 6,
              }}>
                Select date
              </label>
              <input
                className="booking-input"
                type="date"
                name="scheduledDate"
                min={today}
                value={form.scheduledDate}
                onChange={handleChange}
              />
            </div>

            {/* Time slots */}
            <div>
              <label style={{
                fontSize: 12, fontWeight: 500, color: '#1A1A18',
                display: 'block', marginBottom: 10,
              }}>
                Select time
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {TIME_SLOTS.map(slot => (
                  <button
                    key={slot}
                    className={`time-slot ${form.scheduledTime === slot ? 'selected' : ''}`}
                    onClick={() => {
                      setForm(prev => ({ ...prev, scheduledTime: slot }))
                      setError('')
                    }}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Address */}
            <div>
              <label style={{
                fontSize: 12, fontWeight: 500, color: '#1A1A18',
                display: 'block', marginBottom: 6,
              }}>
                Service address
              </label>
              <input
                className="booking-input"
                type="text"
                name="address"
                placeholder="Enter your full address"
                value={form.address}
                onChange={handleChange}
              />
            </div>

            {/* Notes */}
            <div>
              <label style={{
                fontSize: 12, fontWeight: 500, color: '#1A1A18',
                display: 'block', marginBottom: 6,
              }}>
                Notes{" "}
                <span style={{ color: '#AEAEA8', fontWeight: 300 }}>(optional)</span>
              </label>
              <textarea
                className="booking-input"
                name="notes"
                placeholder="Any special instructions for the expert..."
                value={form.notes}
                onChange={handleChange}
                rows={3}
                style={{ resize: 'none' }}
              />
            </div>

            {/* Error */}
            {error && (
              <div style={{
                fontSize: 13, color: '#C0392B',
                background: '#FDF0EE',
                border: '1px solid #F5C6C0',
                borderRadius: 8, padding: '10px 14px',
              }}>
                {error}
              </div>
            )}

            {/* Price summary */}
            <div style={{
              background: '#F8F5F0',
              border: '1px solid #E8E0D5',
              borderRadius: 12,
              padding: '14px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <div style={{ fontSize: 12, color: '#8A8A85' }}>Total amount</div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 24, fontWeight: 500, color: '#1A1A18',
                }}>
                  {service.price}
                </div>
              </div>
              <div style={{
                fontSize: 11, color: '#5C7A6A',
                background: '#EAF5EE',
                border: '1px solid #C8DDD2',
                borderRadius: 100,
                padding: '4px 12px',
                fontWeight: 500,
              }}>
                Pay after service
              </div>
            </div>

            {/* Submit */}
            <button
              className="btn-confirm"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Confirming booking...' : 'Confirm booking →'}
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
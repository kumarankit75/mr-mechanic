import { useState, useEffect } from 'react'
import { getMyBookings, cancelBooking } from '../api/bookings'

function MyBookings({ onClose }) {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [cancelling, setCancelling] = useState(null)

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    try {
      const data = await getMyBookings()
      setBookings(data.bookings)
    } catch (err) {
      console.error('Failed to fetch bookings:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = async (id) => {
    setCancelling(id)
    try {
      await cancelBooking(id)
      setBookings(prev =>
        prev.map(b => b._id === id ? { ...b, status: 'cancelled' } : b)
      )
    } catch (err) {
      console.error('Failed to cancel:', err)
    } finally {
      setCancelling(null)
    }
  }

  const statusColors = {
    pending: { bg: '#FBF5E6', color: '#8A6A1A', label: 'Pending' },
    confirmed: { bg: '#EAF5EE', color: '#3D5549', label: 'Confirmed' },
    'in-progress': { bg: '#E6F1FB', color: '#0C447C', label: 'In Progress' },
    completed: { bg: '#EAF5EE', color: '#3D5549', label: 'Completed' },
    cancelled: { bg: '#FDF0EE', color: '#C0392B', label: 'Cancelled' },
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric'
    })
  }

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
          background: '#F8F5F0',
          borderRadius: 24,
          width: '100%',
          maxWidth: 600,
          maxHeight: '85vh',
          overflowY: 'auto',
          fontFamily: "'Outfit', sans-serif",
          position: 'relative',
        }}
        onClick={e => e.stopPropagation()}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&family=Outfit:wght@300;400;500;600&display=swap');
          .booking-card {
            background: #FFFFFF;
            border: 1px solid #E8E0D5;
            border-radius: 16px;
            padding: 18px 20px;
            transition: box-shadow 0.2s;
          }
          .booking-card:hover {
            box-shadow: 0 4px 16px rgba(92,122,106,0.1);
          }
          .btn-cancel {
            font-family: 'Outfit', sans-serif;
            font-size: 12px;
            font-weight: 500;
            background: transparent;
            border: 1px solid #E8E0D5;
            color: #8A8A85;
            border-radius: 8px;
            padding: 6px 14px;
            cursor: pointer;
            transition: all 0.15s;
          }
          .btn-cancel:hover {
            border-color: #C0392B;
            color: #C0392B;
            background: #FDF0EE;
          }
          .btn-cancel:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        `}</style>

        {/* Header */}
        <div style={{
          padding: '24px 24px 20px',
          borderBottom: '1px solid #E8E0D5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#FFFFFF',
          borderRadius: '24px 24px 0 0',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}>
          <div>
            <p style={{
              fontSize: 10, fontWeight: 600,
              letterSpacing: '3px', textTransform: 'uppercase',
              color: '#5C7A6A', margin: '0 0 4px 0',
            }}>
              Your history
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 26, fontWeight: 500,
              color: '#1A1A18', margin: 0,
            }}>
              My <em style={{ fontStyle: 'italic', color: '#5C7A6A' }}>bookings</em>
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 36, height: 36, borderRadius: '50%',
              border: '1px solid #E8E0D5',
              background: '#F8F5F0',
              cursor: 'pointer', fontSize: 14, color: '#8A8A85',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '20px 24px 28px' }}>

          {loading ? (
            <div style={{
              textAlign: 'center', padding: '48px 0',
            }}>
              <div style={{
                fontSize: 13, color: '#8A8A85',
              }}>
                Loading your bookings...
              </div>
            </div>

          ) : bookings.length === 0 ? (
            <div style={{
              textAlign: 'center', padding: '48px 0',
            }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>📋</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 22, color: '#1A1A18', marginBottom: 6,
              }}>
                No bookings yet
              </div>
              <div style={{ fontSize: 13, color: '#8A8A85' }}>
                Your booked services will appear here
              </div>
            </div>

          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {bookings.map(booking => {
                const status = statusColors[booking.status] || statusColors.pending
                return (
                  <div key={booking._id} className="booking-card">

                    {/* Top row */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 14,
                    }}>
                      <div>
                        <div style={{
                          fontSize: 15, fontWeight: 600,
                          color: '#1A1A18', marginBottom: 3,
                        }}>
                          {booking.serviceName || 'Service'}
                        </div>
                        <div style={{
                          fontSize: 12, color: '#8A8A85', fontWeight: 300,
                        }}>
                          Booked on {formatDate(booking.createdAt)}
                        </div>
                      </div>

                      {/* Status badge */}
                      <div style={{
                        fontSize: 11, fontWeight: 600,
                        background: status.bg,
                        color: status.color,
                        borderRadius: 100,
                        padding: '4px 12px',
                        whiteSpace: 'nowrap',
                      }}>
                        {status.label}
                      </div>
                    </div>

                    {/* Details grid */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 10,
                      marginBottom: 14,
                      background: '#F8F5F0',
                      borderRadius: 10,
                      padding: '12px 14px',
                    }}>
                      <div>
                        <div style={{
                          fontSize: 10, fontWeight: 600,
                          letterSpacing: '1px', textTransform: 'uppercase',
                          color: '#AEAEA8', marginBottom: 3,
                        }}>
                          Date
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: '#1A1A18' }}>
                          {formatDate(booking.scheduledDate)}
                        </div>
                      </div>
                      <div>
                        <div style={{
                          fontSize: 10, fontWeight: 600,
                          letterSpacing: '1px', textTransform: 'uppercase',
                          color: '#AEAEA8', marginBottom: 3,
                        }}>
                          Time
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: '#1A1A18' }}>
                          {booking.scheduledTime}
                        </div>
                      </div>
                      <div style={{ gridColumn: '1 / -1' }}>
                        <div style={{
                          fontSize: 10, fontWeight: 600,
                          letterSpacing: '1px', textTransform: 'uppercase',
                          color: '#AEAEA8', marginBottom: 3,
                        }}>
                          Address
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 400, color: '#1A1A18' }}>
                          {booking.address}
                        </div>
                      </div>
                      {booking.notes && (
                        <div style={{ gridColumn: '1 / -1' }}>
                          <div style={{
                            fontSize: 10, fontWeight: 600,
                            letterSpacing: '1px', textTransform: 'uppercase',
                            color: '#AEAEA8', marginBottom: 3,
                          }}>
                            Notes
                          </div>
                          <div style={{
                            fontSize: 13, fontWeight: 300,
                            color: '#8A8A85', fontStyle: 'italic',
                          }}>
                            {booking.notes}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom row */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                      <div>
                        <div style={{ fontSize: 10, color: '#AEAEA8', marginBottom: 2 }}>
                          Total amount
                        </div>
                        <div style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: 22, fontWeight: 500, color: '#1A1A18',
                        }}>
                          ₹{booking.totalAmount}
                        </div>
                      </div>

                      {booking.status === 'pending' && (
                        <button
                          className="btn-cancel"
                          onClick={() => handleCancel(booking._id)}
                          disabled={cancelling === booking._id}
                        >
                          {cancelling === booking._id ? 'Cancelling...' : 'Cancel booking'}
                        </button>
                      )}

                      {booking.status === 'completed' && (
                        <div style={{
                          fontSize: 11, fontWeight: 500,
                          color: '#3D5549',
                          background: '#EAF5EE',
                          border: '1px solid #C8DDD2',
                          borderRadius: 100,
                          padding: '5px 12px',
                        }}>
                          ✓ Completed
                        </div>
                      )}

                      {booking.status === 'cancelled' && (
                        <div style={{
                          fontSize: 11, fontWeight: 500,
                          color: '#C0392B',
                          background: '#FDF0EE',
                          border: '1px solid #F5C6C0',
                          borderRadius: 100,
                          padding: '5px 12px',
                        }}>
                          Cancelled
                        </div>
                      )}
                    </div>

                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyBookings
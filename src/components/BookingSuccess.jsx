function BookingSuccess({ service, onClose }) {
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
          padding: '40px 32px',
          width: '100%',
          maxWidth: 400,
          fontFamily: "'Outfit', sans-serif",
          textAlign: 'center',
        }}
        onClick={e => e.stopPropagation()}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&family=Outfit:wght@300;400;500;600&display=swap');
          @keyframes popIn {
            0% { transform: scale(0.5); opacity: 0; }
            70% { transform: scale(1.1); }
            100% { transform: scale(1); opacity: 1; }
          }
          .success-icon { animation: popIn 0.4s ease both; }
        `}</style>

        {/* Success icon */}
        <div
          className="success-icon"
          style={{
            width: 72, height: 72,
            background: '#EAF5EE',
            border: '2px solid #C8DDD2',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: 32,
          }}
        >
          ✓
        </div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 28, fontWeight: 500,
          color: '#1A1A18', margin: '0 0 8px',
        }}>
          Booking confirmed!
        </h2>

        <p style={{
          fontSize: 14, fontWeight: 300,
          color: '#8A8A85', lineHeight: 1.6,
          margin: '0 0 24px',
        }}>
          Your {service.name} has been booked successfully.
          Our expert will reach out to confirm the appointment.
        </p>

        {/* Service chip */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: '#F8F5F0',
          border: '1px solid #E8E0D5',
          borderRadius: 12,
          padding: '12px 16px',
          marginBottom: 28,
        }}>
          <img
            src={service.image}
            alt={service.name}
            style={{
              width: 40, height: 40,
              borderRadius: 8, objectFit: 'cover',
            }}
          />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#1A1A18' }}>
              {service.name}
            </div>
            <div style={{ fontSize: 12, color: '#8A8A85' }}>
              {service.price} · Pay after service
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            width: '100%',
            padding: '13px',
            background: '#5C7A6A',
            color: 'white',
            border: 'none',
            borderRadius: 12,
            fontFamily: "'Outfit', sans-serif",
            fontSize: 14, fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.target.style.background = '#3D5549'}
          onMouseLeave={e => e.target.style.background = '#5C7A6A'}
        >
          Done
        </button>

      </div>
    </div>
  )
}

export default BookingSuccess
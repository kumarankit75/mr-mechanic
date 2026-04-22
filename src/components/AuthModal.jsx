import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

function AuthModal({ onClose }) {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login, register } = useAuth()

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async () => {
    setError('')
    setLoading(true)
    try {
      if (mode === 'login') {
        await login(form.email, form.password)
      } else {
        if (!form.name || !form.email || !form.password) {
          setError('Please fill all required fields')
          setLoading(false)
          return
        }
        await register(form.name, form.email, form.password, form.phone)
      }
      onClose()
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
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
          background: '#FFFFFF',
          borderRadius: 24,
          padding: '36px 32px',
          width: '100%',
          maxWidth: 420,
          fontFamily: "'Outfit', sans-serif",
          position: 'relative',
        }}
        onClick={e => e.stopPropagation()}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&family=Outfit:wght@300;400;500;600&display=swap');
          .auth-input {
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
          .auth-input:focus { border-color: #5C7A6A; }
          .auth-input::placeholder { color: #AEAEA8; }
          .btn-auth-submit {
            width: 100%;
            padding: 13px;
            background: #1A1A18;
            color: white;
            border: none;
            border-radius: 12px;
            font-family: 'Outfit', sans-serif;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.15s;
            margin-top: 8px;
          }
          .btn-auth-submit:hover { background: #3D5549; }
          .btn-auth-submit:disabled {
            background: #AEAEA8;
            cursor: not-allowed;
          }
          .mode-tab {
            flex: 1;
            padding: 10px;
            border: none;
            background: transparent;
            font-family: 'Outfit', sans-serif;
            font-size: 14px;
            font-weight: 500;
            color: #AEAEA8;
            cursor: pointer;
            border-bottom: 2px solid transparent;
            transition: all 0.15s;
          }
          .mode-tab.active {
            color: #1A1A18;
            border-bottom-color: #5C7A6A;
          }
        `}</style>

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 16, right: 16,
            width: 32, height: 32, borderRadius: '50%',
            border: '1px solid #E8E0D5',
            background: '#F8F5F0',
            cursor: 'pointer', fontSize: 14, color: '#8A8A85',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          ✕
        </button>

        {/* Logo */}
        <div style={{
          display: 'flex', alignItems: 'center',
          gap: 10, marginBottom: 24,
        }}>
          <div style={{
            width: 32, height: 32, background: '#1A1A18',
            borderRadius: 8, display: 'flex',
            alignItems: 'center', justifyContent: 'center', fontSize: 15,
          }}>🔧</div>
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 18, fontWeight: 500, color: '#1A1A18',
          }}>Mechanic</span>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #E8E0D5',
          marginBottom: 28,
        }}>
          <button
            className={`mode-tab ${mode === 'login' ? 'active' : ''}`}
            onClick={() => { setMode('login'); setError('') }}
          >
            Sign in
          </button>
          <button
            className={`mode-tab ${mode === 'register' ? 'active' : ''}`}
            onClick={() => { setMode('register'); setError('') }}
          >
            Create account
          </button>
        </div>

        {/* Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

          {mode === 'register' && (
            <input
              className="auth-input"
              type="text"
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
            />
          )}

          <input
            className="auth-input"
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
          />

          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          {mode === 'register' && (
            <input
              className="auth-input"
              type="tel"
              name="phone"
              placeholder="Phone number (optional)"
              value={form.phone}
              onChange={handleChange}
            />
          )}

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

          <button
            className="btn-auth-submit"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading
              ? 'Please wait...'
              : mode === 'login' ? 'Sign in' : 'Create account'
            }
          </button>

        </div>

        {/* Footer note */}
        <p style={{
          fontSize: 12, color: '#AEAEA8',
          textAlign: 'center', marginTop: 20,
          lineHeight: 1.6,
        }}>
          {mode === 'login'
            ? "Don't have an account? "
            : "Already have an account? "}
          <span
            style={{ color: '#5C7A6A', cursor: 'pointer', fontWeight: 500 }}
            onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError('') }}
          >
            {mode === 'login' ? 'Create one' : 'Sign in'}
          </span>
        </p>

      </div>
    </div>
  )
}

export default AuthModal
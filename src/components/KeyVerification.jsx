import { useState } from 'react'
import './KeyVerification.css'

function KeyVerification({ onVerified }) {
  const [key, setKey] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('http://localhost:3001/api/verify-key', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key }),
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('wulfskol_key', key)
        onVerified()
      } else {
        setError(data.message || 'Invalid key. Please try again.')
      }
    } catch (err) {
      setError('Connection error. Please try again.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="key-verification-container">
      <div className="key-verification-modal">
        <h2>Access Key Required</h2>
        <p>Enter your access key to view the projects</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter key (######-###-#####)"
            value={key}
            onChange={(e) => setKey(e.target.value.toUpperCase())}
            disabled={loading}
            maxLength="16"
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" disabled={loading || !key.trim()}>
            {loading ? 'Verifying...' : 'Unlock Portfolio'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default KeyVerification

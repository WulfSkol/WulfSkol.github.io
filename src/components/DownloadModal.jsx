import { useState } from 'react'
import './DownloadModal.css'

function DownloadModal({ isOpen, onClose, projectTitle, onDownload }) {
  const [key, setKey] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

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
        setSuccess(true)
        setTimeout(() => {
          onDownload?.()
          handleClose()
        }, 1500)
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

  const handleClose = () => {
    setKey('')
    setError('')
    setSuccess(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {success ? (
          <div className="modal-success">
            <div className="success-icon"></div>
            <h2>Access Granted!</h2>
            <p>Starting download...</p>
          </div>
        ) : (
          <>
            <button className="modal-close" onClick={handleClose}></button>
            <h2>Download: {projectTitle}</h2>
            <p className="modal-description">Enter your access key to download</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter key (######-###-#####)"
                value={key}
                onChange={(e) => setKey(e.target.value.toUpperCase())}
                disabled={loading}
                maxLength="16"
                autoFocus
              />
              {error && <p className="error-message">{error}</p>}
              <button type="submit" disabled={loading || !key.trim()} className="submit-btn">
                {loading ? 'Verifying...' : 'Download'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default DownloadModal

import { useRef } from 'react'
import './VideoModal.css'

function VideoModal({ isOpen, onClose, videoUrl, projectTitle }) {
  const videoRef = useRef(null)

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="video-modal-overlay" onClick={handleClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}></button>
        <h2>{projectTitle}</h2>
        <div className="video-player-container">
          <video
            ref={videoRef}
            src={videoUrl}
            controls
            autoPlay
            muted
          />
        </div>
      </div>
    </div>
  )
}

export default VideoModal

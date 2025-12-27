import { useState } from 'react'
import DownloadModal from './DownloadModal'
import VideoModal from './VideoModal'
import './ProjectCard.css'

function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)

  const handleDownloadClick = () => {
    setShowModal(true)
  }

  const handleDownload = () => {
    window.open(project.downloadUrl, '_blank')
  }

  const handleVideoClick = () => {
    setShowVideoModal(true)
  }

  const isVideo = project.videoUrl && /\.(mp4|webm|ogg|mov|avi|mkv|flv|wmv|m4v)$/i.test(project.videoUrl)

  return (
    <>
      <div className="project-card">
        <div className="project-video-container">
          <div className="project-video" onClick={isVideo ? handleVideoClick : undefined} style={isVideo ? { cursor: 'pointer' } : {}}>
            {isVideo ? (
              <>
                <video src={project.videoUrl} preload="metadata" muted />
                <div className="video-overlay">
                  <div className="play-icon"></div>
                </div>
              </>
            ) : (
              <img src={project.videoUrl} alt={project.title} />
            )}
          </div>
        </div>
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <button
            className="download-btn"
            onClick={handleDownloadClick}
          >
            Download
          </button>
        </div>
      </div>
      <DownloadModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        projectTitle={project.title}
        onDownload={handleDownload}
      />
      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoUrl={project.videoUrl}
        projectTitle={project.title}
      />
    </>
  )
}

export default ProjectCard

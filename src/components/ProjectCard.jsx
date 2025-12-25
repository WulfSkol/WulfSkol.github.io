import { useState } from 'react'
import DownloadModal from './DownloadModal'
import './ProjectCard.css'

function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false)

  const handleDownloadClick = () => {
    setShowModal(true)
  }

  const handleDownload = () => {
    window.open(project.downloadUrl, '_blank')
  }

  const isVideo = project.videoUrl && /\.(mp4|webm|ogg)$/i.test(project.videoUrl)

  return (
    <>
      <div className="project-card">
        <div className="project-video-container">
          <div className="project-video">
            {isVideo ? (
              <>
                <video src={project.videoUrl} alt={project.title} />
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
    </>
  )
}

export default ProjectCard

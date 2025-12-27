import { useState } from 'react'
import ProjectCard from './ProjectCard'
import './Archives.css'

function Archives() {
  const [archives] = useState([
    {
      id: 1,
      title: 'Windows Depot',
      description: 'Contains various books and resources from windows and more for coding, kernel internals, Sys internals and debugging, ect. 78 Files, 6 Folders.',
      videoUrl: '/images/Windows Interenal.jpg',
      downloadUrl: '#',
    },
  ])

  return (
    <div className="archives-container">
      <div className="archives-grid">
        {archives.map((archive) => (
          <ProjectCard key={archive.id} project={archive} />
        ))}
      </div>
    </div>
  )
}

export default Archives

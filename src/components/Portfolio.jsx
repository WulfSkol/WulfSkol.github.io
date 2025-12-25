import { useState } from 'react'
import ProjectCard from './ProjectCard'
import './Portfolio.css'

function Portfolio() {
  const [projects] = useState([
    {
      id: 1,
      title: 'Disembodied WebsScrape',
      description: 'Originally build for butcher to scrape data from various websites to find assets, shaders, models, ect. Also can look into a archive file locally to easily find assets.',
      videoUrl: '/videos/project1.mp4',
      downloadUrl: '#',
    },
    {
      id: 2,
      title: 'XPress',
      description: 'A Compression tool to compress and decompress files quickly and easily with multiple algorithms to choose from. Meant to use windows defuilt compression (Xpress) as it can compress files better than other preformers in certain scenarios.',
      videoUrl: '/images/Xpress.png',
      downloadUrl: '#',
    },
    {
      id: 3,
      title: 'WSign',
      description: 'A Program to sign files and binaries with a custom signature. This is a remake of Csign/DSign from Trusted Asia but meant for english Users with a simple but modern UI.',
      videoUrl: '/videos/project3.mp4',
      downloadUrl: '#',
    },
    {
      id: 4,
      title: 'WSign',
      description: 'A Program to sign files and binaries with a custom signature. This is a remake of Csign/DSign from Trusted Asia but meant for english Users with a simple but modern UI.',
      videoUrl: '/videos/project3.mp4',
      downloadUrl: '#',
    },
  ])

  return (
    <div className="portfolio-container">
      <div className="portfolio-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio

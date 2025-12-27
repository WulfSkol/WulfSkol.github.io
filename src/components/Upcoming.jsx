import { useState } from 'react'
import './Upcoming.css'

function Upcoming() {
  const [upcoming] = useState([
    {
      id: 1,
      title: 'Disembodied WebsScrape v.0.2',
      description: 'New version of the webscrape bot in BSA, but in a applacation version for people. Uses a LLM, html, and json files to scrape webstites',
      status: 'In Development',
    },
    {
      id: 2,
      title: 'New FBT(full body tracking)',
      description: 'Building a new full body trackers that are fully open source and affordable for everyone. Cheaper than any other full body tracker on the market like SlimeVR, HTC Vive, or Haritora.(Might Include an custom app to control it)',
      status: 'Research',
    },
    {
      id: 3,
      title: 'VRCA imager',
      description: 'Using VRCAs to see a images of them via an assetviewer. Might include an option to see their api images from the website as well.',
      status: 'Research',
    },
    {
      id: 4,
      title: 'AI Game Hacker',
      description: 'Using a AI powered model with 8B parameters to learn everything about hacking games. All the way form Reverse Engineering, Memory protection bypassing buffer overflow, and more.',
      status: 'Planning',
    },
  ])

  return (
    <div className="upcoming-container">
      <div className="upcoming-list">
        {upcoming.map((project, index) => (
          <div key={project.id} className="upcoming-item" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="item-left">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <span className={`status-badge status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
              {project.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Upcoming

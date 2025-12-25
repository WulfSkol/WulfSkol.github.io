import './Navigation.css'

function Navigation({ activeTab, onTabChange }) {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <button 
          className={`nav-tab ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => onTabChange('projects')}
        >
          Projects
        </button>
        <button 
          className={`nav-tab ${activeTab === 'archives' ? 'active' : ''}`}
          onClick={() => onTabChange('archives')}
        >
          Archives
        </button>
      </div>
    </nav>
  )
}

export default Navigation

import { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Portfolio from './components/Portfolio'
import Archives from './components/Archives'
import Upcoming from './components/Upcoming'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('projects')

  return (
    <div className="app">
      <Header />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === 'projects' ? <Portfolio /> : activeTab === 'archives' ? <Archives /> : <Upcoming />}
    </div>
  )
}

export default App

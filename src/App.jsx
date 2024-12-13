import React from 'react'

import HeaderSection from './components/HeaderSection'
import ServicesSection from './components/ServicesSection'
// import Contact from './components/Contact'
import ProjectsSection from './components/ProjectsSection'

const App = () => {
  return (
    <div >
      <HeaderSection/>
      <ProjectsSection/>
      <ServicesSection/>
      {/* <Contact/> */}
    </div>
  )
}

export default App
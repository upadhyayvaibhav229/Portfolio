
import reactLogo from './assets/react.svg'
import Header from './Components/Header'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Service from './Components/Service'
import Project from './Components/Project'
import Contact from './Components/Contact'

import viteLogo from '/vite.svg'
import Footer from './Components/Footer'
import Skills from './Components/Skills'
import ThemeContextProvider from './Context/ThemeContextProvider'


function App() {

  return (
    <ThemeContextProvider>
      <Header />
      <Home />

      <AboutMe />
      <Service />
      <Skills/>
      <Project />
      <Contact />
      <Footer/>
    </ThemeContextProvider>
  );
}

export default App

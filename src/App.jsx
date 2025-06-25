
import reactLogo from './assets/react.svg'
import Header from './Components/Header'


import viteLogo from '/vite.svg'
import Footer from './Components/Footer'
import ThemeContextProvider from './Context/ThemeContextProvider'
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import Service from './Pages/Service'
import Projects from './Pages/Project'
import Contact from './Pages/Contact'
import { ToastContainer } from 'react-toastify'

 
function App() {

  return (
    <ThemeContextProvider>
      <Header />
      <Home />

      <AboutMe />
      <Service />
      <Projects />
      <Contact />
      <ToastContainer />
      <Footer/>
    </ThemeContextProvider>
  );
}

export default App

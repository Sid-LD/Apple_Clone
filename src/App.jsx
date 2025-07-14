import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Navbar from "./components/Navbar"
import Features from "./components/Features"
import Footer from "./components/Footer"
import HowItWorks from "./components/HowItWorks"
import * as Sentry from '@sentry/react'

const App=()=> {
 
  return (
    <main className="bg-zinc-800">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
      
    </main>
  )
}

export default Sentry.withProfiler(App)

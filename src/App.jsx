import { Footer,Blog,Possibilities,Features,WhatGPT3,Header } from "./containers"
import { Cta,Brands,Navbar } from "./components"
import "./App.css"
function App() {

  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar/>
      <Header/>
    </div>
    <Brands/>
    <WhatGPT3/>
    <Features/>
    <Possibilities/>
    <Cta/>
    <Blog/>
    <Footer/>
    </div>
  )
}

export default App

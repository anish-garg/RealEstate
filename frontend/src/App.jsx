import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Residencies from "./components/Residencies"
import Companies from "./components/Companies"
import Value from "./components/Value"
import Contact from "./components/Contact"
import GetStarted from "./components/GetStarted"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Residencies from "./components/Residencies"
import Companies from "./components/Companies"

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
      </div>
      <Companies />
      <Residencies />
    </>
  )
}

export default App

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Residencies from "./components/Residencies"
import Companies from "./components/Companies"
import Value from "./components/Value"

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
    </>
  )
}

export default App

import Footer from "./components/shared/navigation/Footer"
import Navbar from "./components/shared/navigation/Navbar"
import HomePage from "./pages/home"

function App() {
  return (
    <div >
      <div className="px-[50px] pt-[25px]">
      <Navbar />
      <HomePage />
      </div>
      <Footer />
    </div>
  )
}

export default App

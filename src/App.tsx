import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/shared/navigation/Footer";
import Navbar from "./components/shared/navigation/Navbar";
// import HomePage from "./pages/home";
import PrivacyPage from "./pages/privacy-page";
import TermsPage from "./pages/terms-page";
import ScrollToTop from "./hook/ScrollToTop";
import HomeAreaPage from "./pages/home-area";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <div className="bg-[#3BA0FF]">
          <div className=" px-[56px] py-[32px]">      
            <Navbar />
          </div>
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/" element={<HomeAreaPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/termcondition" element={<TermsPage />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

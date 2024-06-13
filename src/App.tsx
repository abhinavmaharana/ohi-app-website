import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/shared/navigation/Footer";
import Navbar from "./components/shared/navigation/Navbar";
import HomePage from "./pages/home";
import PrivacyPage from "./pages/privacy-page";
import TermsPage from "./pages/terms-page";
import ScrollToTop from "./hook/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <div className="px-[20px] pt-[10px] md:px-[50px] md:pt-[25px]">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
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

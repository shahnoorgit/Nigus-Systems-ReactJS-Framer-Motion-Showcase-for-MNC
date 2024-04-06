import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeFooter from "./components/HomeFooter";
import WebDev from "./pages/WebDev";
import AIML from "./pages/AIML";
import AppDev from "./pages/AppDev";
import Software from "./pages/Software";
import AboutPage from "./pages/Aboutus";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/web_dev" element={<WebDev />} />
        <Route path="/services/aiml" element={<AIML />} />
        <Route path="/services/app_dev" element={<AppDev />} />
        <Route path="/services/software" element={<Software />} />
        <Route path="/about_us" element={<AboutPage />} />
        <Route path="/contact_us" element={<ContactPage />} />
      </Routes>
      <HomeFooter />
    </>
  );
}

export default App;

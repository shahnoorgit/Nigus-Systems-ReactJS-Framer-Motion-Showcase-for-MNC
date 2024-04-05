import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeFooter from "./components/HomeFooter";
import WebDev from "./pages/WebDev";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/web_dev" element={<WebDev />} />
      </Routes>
      <HomeFooter />
    </>
  );
}

export default App;

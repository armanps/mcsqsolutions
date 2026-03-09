import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from "./pages/about/About";
import CyberSecurityPage from "./pages/what-we-do/CyberSecurity";
import ConsultingPage from "./pages/what-we-do/Consulting";
// Import your new pages here
// import Consulting from "./pages/services/Consulting";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* New Service Routes */}
      <Route path="/what-we-do/consulting" element={<ConsultingPage />} />
      <Route path="/what-we-do/cyber-security" element={<CyberSecurityPage />} />
      <Route path="/what-we-do/software-apps" element={<div>Software Page</div>} />
      <Route path="/what-we-do/support-maintenance" element={<div>Support Page</div>} />

      <Route path="/about" element={<About />} />
    </Routes>
  );
}
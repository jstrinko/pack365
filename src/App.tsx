import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Signup from "./pages/Signup";
import Info from "./pages/Info";
import Dens from "./pages/Dens";
import Leaders from "./pages/Leaders";
import Resources from "./pages/Resources";
import Fundraising from "./pages/Fundraising";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/info" element={<Info />} />
        <Route path="/dens" element={<Dens />} />
        <Route path="/leaders" element={<Leaders />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/fundraising" element={<Fundraising />} />
      </Routes>
    </Router>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Scholarships from "./pages/Scholarships";
import Programs from "./pages/Programs";
import Resources from "./pages/Resources";
import Navbar from "./components/Navbar"; // Ensure you have a Navbar component

function App() {
  return (
    <Router>
      <Navbar /> {/* This ensures the Navbar is always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;

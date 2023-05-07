import Navbar from "./components/Navbar";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Projects" element={<Projects />} />
        <Route exact path="/ContactMe" element={<ContactMe />} />
      </Routes>
    </div>
  );
};

export default App;

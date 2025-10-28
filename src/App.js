import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./Header/Navigation";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation always visible */}
      <Navigation />

      {/* Routes section */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

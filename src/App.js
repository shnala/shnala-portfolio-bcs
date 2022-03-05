import React from "react";
// import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link, renderMatches } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import './styles/All.css'


function App() {
  return (
    <main>
      <Navbar />
      <Banner />

      <Router>
        <Routes>
          <Route index element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Portfolio />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />

    </main>
  );
}

export default App;

// render(
//   <Router>
//     <Routes>
//       <Route index element={<About />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/work" element={<Portfolio />} />
//     </Routes>
//   </Router>
// )
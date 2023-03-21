import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter >
      <Sidebar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="portfolio" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

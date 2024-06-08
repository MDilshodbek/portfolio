import "./App.css";
import Navbar from "./navbar/navbar";
import About from "./pages/about/about";
import Blog from "./pages/blog/blog";
import Dashboard from "./pages/dashboard/dashboard";
import Resume from "./resume/resume";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="max-w-[700px] m-auto">
      <Navbar />
      <Routes>
        <Route index element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;

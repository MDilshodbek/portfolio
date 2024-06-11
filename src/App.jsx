import "./App.css";
import Navbar from "./navbar/navbar";
import About from "./pages/about/about";
import Blog from "./pages/blog/blog";
import Contact from "./pages/contact/contact";
import ContactDetails from "./pages/contact/contact-details/contact-details";
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
        
        <Route path="/contact" element={<Contact />}>
          <Route path=":blogId" element={<ContactDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

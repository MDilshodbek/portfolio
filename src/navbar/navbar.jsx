import { BulbOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-[700px] h-[40px] flex items-center m-auto justify-between">
      <div className="flex gap-10 font-bold">
        <Link to="/">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/resume">Resume</Link>
      </div>
      <div className="w-[40px] h-[40px] border rounded-lg border-black-500/50 flex items-center justify-center">
        <BulbOutlined />
      </div>
    </div> 
  );
};

export default Navbar;

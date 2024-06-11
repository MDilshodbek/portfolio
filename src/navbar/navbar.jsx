import { BulbOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [light, setLight] = useState(false);

  const onDark = () => {
    return {}
  }
  return (
    <div className="max-w-[700px] flex items-center m-auto justify-between py-5">
      <div className="flex gap-10 font-bold">
        <NavLink to="/">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="w-[40px] h-[40px] border rounded-lg border-black-500/50 flex items-center justify-center">
        <Modal
          title="Light Mode"
          okText="Change"
          onOk={() => setLight(false)}
          open={light}
          onCancel={() => setLight(false)}
          className="flex"
        >
          <Button onClick={onDark}>Dark</Button>
          <Button onClick={onLight}>Light</Button>
          <Button onClick={onLight}>Sysytem</Button>
        </Modal>
        <BulbOutlined onClick={() => setLight(true)} />
      </div>
    </div>
  );
};

export default Navbar;

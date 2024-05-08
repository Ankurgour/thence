import React from "react";
import "./Navbar.css";
import logoimg from '../../assets/logoimg.png'

const getProjects=()=>{
    console.log("sdfgv");
}
const onBoardtalent=()=>{
    console.log("dgfbh");
}
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logoname"><img src={logoimg} alt="" /></div>
      <div className="elemnts">
        <button onClick={getProjects} >Get Projects</button>
        <button onClick={onBoardtalent}>Onboard Talent</button>
      </div>
    </div>
  );
};

export default Navbar;

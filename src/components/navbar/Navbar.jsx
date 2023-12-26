import React, { useState } from 'react'
import "./navbar.css"
import {RiCloseLine,RiMenu3Line } from "react-icons/ri"

const Links=()=>{
   return (
     <>
       <a href="#home">Home</a>
       <a href="#wgpt3">What is GPT</a>
       <a href="#possibilites">Open AI</a>
       <a href="#features">Case Studies</a>
       <a href="#blog">Library</a>
     </>
   );
}



const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="navbar-left-items">
          <div className="gpt3__navbar-links-logo">
            <img src="./src/assets/logo.svg" alt="" />
          </div>
          <div className="gpt3__navbar-links_container">
            <Links />
          </div>
        </div>

        <div className="gpt3__sigin_signup">
          <a href="">Sign in</a>
          <button href="">Sign up</button>
        </div>
        <div className="menu">
          {!toggleMenu ? (
            <RiMenu3Line
              onClick={() => setToggleMenu(!toggleMenu)}
              color="#fff"
              size={30}
            />
          ) : (
            <RiCloseLine
              color="#fff"
              size={35}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          )}
        </div>
        {toggleMenu && (
          <div className="sidebar-container">
            <Links />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar

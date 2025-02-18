import React from "react";
import "./Navbar.css";
const Navbar = () => {
    return (
      <nav className="navbar">
        <h1 className="logo">SystemLOGO</h1>
        <div className="logoset">
            <img src="https://cdn-icons-png.freepik.com/256/2111/2111463.png?ga=GA1.1.1334398516.1706888950&semt=ais_hybrid" alt="instagram" ></img>
            <img src="https://cdn-icons-png.freepik.com/256/2504/2504903.png?ga=GA1.1.1334398516.1706888950&semt=ais_hybrid" alt="instagram" ></img>
            <img src="https://cdn-icons-png.freepik.com/256/2504/2504957.png?ga=GA1.1.1334398516.1706888950&semt=ais_hybrid" alt="instagram" ></img>
        </div>
      </nav>
    );
  };

  export default Navbar;

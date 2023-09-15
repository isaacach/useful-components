/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";

export default function Navbar({ colorChange, colorMode }) {
  const [key, setKey] = useState(0);
  const inputRef = useRef(null)
  
  useEffect(() => {
    if (inputRef.current.checked == true) {
      colorChange("light");
    }
    if (inputRef.current.checked == false) {
      colorChange("dark");
    }
  }, [key])
  


  return (
    <nav className={colorMode}>
      <header className="header-wrapper">
        <div className="img-wrapper">
          <img src="abstract.png" alt="brand icon" />
        </div>
        <div className="brand-wrapper">
          <p className={colorMode}>Useful</p>
          <p>Components</p>
        </div>
      </header>
      <div className="light-dark-wrapper">
        <input ref={inputRef} onChange={() => setKey(k => k + 1)} type="checkbox" />
        <p className="dark">Dark</p>
        <p className="light">Light</p>
        <div className="slider"></div>
      </div>
    </nav>
  );
}

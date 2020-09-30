import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setShow(true);
      else setShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav_black"} `}>
      <img
        src={process.env.PUBLIC_URL + "/netflix_logo.png"}
        className={`nav_logo`}
      />
      <img
        src={process.env.PUBLIC_URL + "/thumbnaill.jpg"}
        className="thumbnail_logo"
        alt="thumbnail"
      />
    </nav>
  );
}

export default Nav;

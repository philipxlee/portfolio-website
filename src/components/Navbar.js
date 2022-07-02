import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';


function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false)
  }, [location]);
  // if location changes, then make sure 
  // when you click a button the navbar disappears

  return (
    // if expand bar is true, open, else, close
    <div className="navbar" id={expandNavbar ? "open" : "close"}> 
        <div className="toggleButton">
            <button 
              onClick={() => {
                setExpandNavbar((prev) => !prev);
                }}
                > 
                <ReorderIcon /> 
            </button>
        </div>
        <div className="links"> 
            <Link to="/portfolio-website"> About </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience </Link>
        </div>
    </div>
    



  );
};

export default Navbar
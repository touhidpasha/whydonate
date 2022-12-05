import React from "react";
import { Link } from "react-router-dom";

import "../css/HomePage.css";

function HomePage() {
  return (
    <div>
      <div id="header">
        <button>Home</button>
        <button>
          <Link to="/loginpage">login</Link>
        </button>
      </div>
    </div>
  );
}

export default HomePage;

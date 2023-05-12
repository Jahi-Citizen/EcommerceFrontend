import React from "react";
import { Link, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./Homepage.css";



    // function handleClick(e){

    // }

    function Homepage() {
        return (
          <>
            <header>
              <h1>Ecommerce Hub</h1>
              <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </nav>
            </header>
            <main>
              <h2>Welcome to Ecommerce Hub</h2>
              <p>Please sign in or register to continue.</p>
              <div>
                <Link to="/Login">
                <button>Sign In</button>
                </Link>
                <Link to="/Register">
                <button>Register</button>
                </Link>
              </div>
            </main>
            <footer>
              <p>Copyright © 2023 Ecommerce Hub.
                <a href="#">Terms of Use</a>
                <a href="#">Privacy Policy</a>
              </p>
            </footer>
          </>
        );
      }
    
      export default Homepage;
      
      
      
      
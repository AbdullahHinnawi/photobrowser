import React from "react";
import {
  Navbar,
} from "react-bootstrap";


const NavigationBar = () => {

  return (
      <Navbar  className="navBar navbar-dark" collapseOnSelect expand="md"
               fixed="top" style={{fontWeight: "550", height:"4rem", backgroundColor:"#343B3F", marginBottom:"80px"}}>
        <Navbar.Brand href="/">
          PhotoBrowser
        </Navbar.Brand>
      </Navbar>

  );


};
export default NavigationBar;
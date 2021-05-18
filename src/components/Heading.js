import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

const Heading = () => {
  return (
    <Navbar color="dark" dark> 
      <Container>
        <NavbarBrand href="/">My Team</NavbarBrand>
        <NavItem>
          <Link className="btn btn-primary" to="/add">
            Add User
          </Link>
        </NavItem>
      </Container>
    </Navbar>
  );
};

export default Heading;

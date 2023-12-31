import { ListGroup, NavItem, NavbarBrand, Dropdown } from "react-bootstrap";

import Navbar from "react-bootstrap/Navbar";

import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "./Netflix-assets/assets/netflix_logo.png";

const MyTopBar = () => {
  return (
    <Navbar className="d-flex navbar align-content-center" expand="lg" bg="dark">
      <NavbarBrand className="ms-2">
        <img src={logo} alt="logo-netflix" height={"40px"} />
      </NavbarBrand>
      <NavbarCollapse className="order-1 order-lg-0" id="navbarNavAltMarkup">
        <ListGroup className="navbar-nav d-flex me-auto navbar-collapse">
          <NavItem className=" mx-1">Home</NavItem>
          <NavItem className="mx-1 text-light">TV Shows</NavItem>
          <NavItem className="mx-1">Movies</NavItem>
          <NavItem className="mx-1">Recently Added</NavItem>
          <NavItem className="mx-1">My List</NavItem>
        </ListGroup>
      </NavbarCollapse>
      <div className="d-flex me-5 align-items-center">
        <NavbarToggle
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-secondary"></span>
        </NavbarToggle>
        <div className="d-flex align-content-center">
          <i className="bi bi-search mx-2 text-light"></i>
          <a href="#" className="mx-2 text-light text-decoration-none">
            kids
          </a>
          <i className="bi bi-bell-fill mx-2 text-light"></i>
          <Dropdown>
            <Dropdown.Toggle
              variant="dark"
              id="dropdown-basic"
              className="ms-3 text-light  bg-dark pt-0 px-2 border border-0"
            >
              <img
                src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className="img-fluid"
                width={"30px"}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu className="bg-dark text-light" style={{ left: "-38px" }}>
              <Dropdown.Item href="./components/profile Page/ProfileBody" className="text-light">
                profile
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" className="text-light">
                settings
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </Navbar>
  );
};

export default MyTopBar;

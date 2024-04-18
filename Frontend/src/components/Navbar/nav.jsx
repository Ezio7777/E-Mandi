import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import "./navbar.css";

function OffcanvasExample() {
  let expand = "md";
  const role = localStorage.getItem("role");
  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        className="bg-body-tertiary mb-3 navbar_body"
      >
        <Container fluid>
          <Link class="navbar-brand" to="/">
            E-Mandi
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="off-canvas-body">
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Link
                  class="nav-link  text-decoration-none px-3 py-1 rounded-4 nav_txt_hov"
                  aria-current="page"
                  to="/"
                >
                  <i class="fa-solid fa-house"></i>
                  Home
                </Link>
                <Link
                  class="nav-link  text-decoration-none px-3 py-1 rounded-4 nav_txt_hov"
                  to="/about"
                >
                  <i class="fa-solid fa-circle-info"></i>
                  About
                </Link>
                <Link
                  class="nav-link  text-decoration-none px-3 py-1 rounded-4 nav_txt_hov"
                  to="/contact"
                >
                  <i class="fa-solid fa-circle-info"></i>
                  Contact
                </Link>
              </Nav>
              <Form className="d-flex search-body container">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button type="button" class="btn search-btn ">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </Form>
              {localStorage.getItem("token") ? (
                <>
                  <div className=" d-flex flex-column flex-lg-row  justify-content-center align-items-center gap-3 ">
                    {/* Cart */}
                    {role == "buyer" ? (
                      <Link
                        class=" text-decoration-none px-3 py-1 rounded-4 nav_txt nav_txt_hov "
                        to="/cart"
                      >
                        <i class="fa-solid fa-cart-shopping"></i>
                      </Link>
                    ) : (
                      <></>
                    )}
                    {/* Profile */}
                    {role == "farmer" ? (
                      <Link
                        class=" text-decoration-none px-3 py-1 rounded-4 nav_txt nav_txt_hov profile_nav"
                        to="/farmerProfile"
                      >
                        <FaUserCircle />
                      </Link>
                    ) : (
                      <Link
                        class=" text-decoration-none px-3 py-1 rounded-4 nav_txt nav_txt_hov profile_nav"
                        to="/buyerProfile"
                      >
                        <FaUserCircle />
                      </Link>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className=" d-flex flex-column flex-lg-row  justify-content-center align-items-center gap-3 ">
                    <Link
                      class=" text-decoration-none px-3 py-1 rounded-4 nav_txt_hov"
                      to="/Login"
                    >
                      <i class="fa-solid fa-right-to-bracket"></i>Login
                    </Link>
                    <Link
                      class="text-decoration-none px-3 py-1 rounded-4 nav_txt_hov"
                      id="signup"
                      to="/signup"
                    >
                      <i class="fa-solid fa-user-plus"></i>Sign Up
                    </Link>
                  </div>
                </>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;

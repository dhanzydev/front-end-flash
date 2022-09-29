import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../../assets/images/logo.png";
import styled from "styled-components";
import "./index.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Typeahead } from "react-bootstrap-typeahead";
import { options } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Button, InputGroup } from "react-bootstrap";

const ImageLogo = styled.img`
  width: 100px;
`;

const WrappedLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoundaryLine = styled.div`
  width: 1.2px;
  min-width: 1.2px;
  height: 24px;
  background-color: #bfbfbf;
  margin: 0 0 0 16px;
`;

const Menu = () => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 navbar-bg py-2">
          <Container>
            <Navbar.Brand href="#">
              <ImageLogo src={Logo} className="img-fluid logo" />
            </Navbar.Brand>
            <div className="row w-100">
              <div className="col-8 col-lg-10">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1 border-0">
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Typeahead
                    id="basic-example"
                    onChange={setSelected}
                    options={options}
                    placeholder="Cari Diamonds, Skins, Akun..."
                    selected={selected}
                    className="w-25"
                  />
                </InputGroup>
              </div>
              <div className="col-2 col-lg-2">
                <WrappedLogo className="wrapLogo">
                  <div className="cartLogo">
                    <button className="btn-logo position-relative">
                      <FontAwesomeIcon icon={faCartShopping} className="icon" />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
                    </button>
                  </div>
                  <div className="cartLogo">
                    <button className="btn-logo position-relative">
                      <FontAwesomeIcon icon={faBell} className="icon" />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
                    </button>
                  </div>
                  <BoundaryLine className="boundary" />
                </WrappedLogo>
              </div>
              <div className="col-2 col-lg-0">
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                  className="p-1 ms-1 border-0"
                />
              </div>
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header
                closeButton
                className="justify-content-end"
              ></Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 p-2 gap-3">
                  <Nav.Link href="#action2">
                    <Button variant="primary">Login</Button>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Menu;

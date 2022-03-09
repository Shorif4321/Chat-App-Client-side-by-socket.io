import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, NavLink, Offcanvas } from 'react-bootstrap';
import './Header.css'
import logo from '../../Pages/Images/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand to="home"> <Link to ='/'><img className="website-logo " src={logo} alt="" /></Link> </Navbar.Brand>
          <Navbar.Toggle className="upper" aria-controls="navbarScroll" />
          <Navbar.Collapse className="upper2" id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              /*  style={{ maxHeight: '150px' }} */
              navbarScroll
            >
              <Link className='text-white  m-2 text-decoration-none' to="/">Join</Link>
              <Link className='text-white  m-2 text-decoration-none' to="/chat">Chat</Link>
              {/*  <NavDropdown className='text-white dropdown' title="Dropdown" id="navbarScrollingDropdown">
           <NavDropdown.Item className='text-black' href="#action3">Action</NavDropdown.Item>
           <NavDropdown.Item className='text-black' href="#action4">Another action</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item className='text-black' href="#action5">
             Something else here
           </NavDropdown.Item>
         </NavDropdown> */}

              <div className="nav-item dropdown">
                <div className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Nav.Link className="dropdown-item text-black" href="#">Action</Nav.Link>
                  <Nav.Link className="dropdown-item text-black" href="#">Another action</Nav.Link>
                  <div className="dropdown-divider text-black"></div>
                  <Nav.Link className="dropdown-item text-black" href="#">Something else here</Nav.Link>
                </div>
              </div>

              <div className="nav-item dropdown megamenu">
                <div className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Mega Menu
                </div>

                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="container">
                    <div className="row">
                      <div className="col-10 col-md-4">
                        <ul className="list-unstyled justify-content-center">
                          <li><h3>Men's collection</h3></li>
                          <li><a href="#">Jens pant</a></li>
                          <li><a href="#">Perfume and Hair cream</a></li>
                          <li><a href="#">Jens pant</a></li>
                          <li><a href="#">Perfume and Hair cream</a></li>
                          <li><a href="#">Jens pant</a></li>
                          <li><a href="#">Perfume and Hair cream</a></li>
                        </ul>
                      </div>
                      <div className="col-10 col-md-4">
                        <ul className="list-unstyled">
                          <li><h3>Men's collection</h3></li>
                          <li><a href="#">Jens pant</a></li>
                          <li><a href="#">Perfume and Hair cream</a></li>
                          <li><a href="#">Jens pant</a></li>
                          <li><a href="#">Perfume and Hair cream</a></li>
                          <li><a href="#">Jens pant</a></li>
                          <li><a href="#">Perfume and Hair cream</a></li>
                        </ul>
                      </div>
                      <div className="col-10 col-md-4">
                        <ul className="list-unstyled">
                          <li><h3>Men's collection</h3></li>
                          <li><a href="#">Jens pant</a></li>
                          <li><a href="#">Perfume and Hair cream</a></li>
                          <li><a href="#">Jens pant</a></li>
                          <li><a href="#">Perfume and Hair cream</a></li>
                          <li><a href="#">Jens pant</a></li>
                          <li><a href="#">Perfume and Hair cream</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
};

export default Header;
import React from 'react';
import './App.css';

import { Navbar, Nav } from 'react-bootstrap';
import {
  Container,
  Form,
  Button,
  FormControl
} from 'react-bootstrap';



function Nvb() {

  return (

    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">The name</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >


            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
              <Button variant="outline-success">ADD</Button>







            </Form>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>

  )


}
export default Nvb;
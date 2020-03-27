
import React from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

function PageNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home"><img src="https://cdn.pixabay.com/photo/2012/04/01/16/37/hexagon-23431_960_720.png" width="30"
        className="d-inline-block align-top" alt="" />
        MovieBee</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to='/movie'><Nav.Link href='/movie'>Movies</Nav.Link></Link>
          <Link to='/show'><Nav.Link href='/show'>TV Shows</Nav.Link></Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-warning" className="mx-auto">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar >
  )
}

// const take = (state) => {
//   return state
// }

// const change = (dispatch) => {
//   return bindActionCreators({ movie }, dispatch)
// }

export default connect()(PageNav);

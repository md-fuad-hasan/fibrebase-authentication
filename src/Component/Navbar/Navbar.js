import React, {Component} from "react";
import { Link } from "react-router-dom";
import { Collapse, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";


class Navigation extends Component{

    state = {
        isOpen : false
    }

    render(){


        const toggle = ()=>{
            this.setState({
                isOpen: !this.state.isOpen
            })
        }

        return(
            <div>

                <Navbar dark color="dark" expand="sm" >
                  
                  <NavbarBrand href="/">BrandName</NavbarBrand>
                  <NavbarToggler onClick={toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="me-auto" navbar >
                      <NavItem>
                      <Link to="/home" className="nav-link">Home</Link>
                      </NavItem>
                      <NavItem>
                      <Link to="/contact" className="nav-link">Contact</Link>
                      </NavItem>
                      <NavItem>
                      <Link to="/about" className="nav-link">About</Link>
                      </NavItem>
                  </Nav>

                  </Collapse>
             
              
          </Navbar>


            </div>
        );
    }
}

export default Navigation;
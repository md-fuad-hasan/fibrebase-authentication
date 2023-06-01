import React, { useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Collapse, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";


const Navigation= ()=>{

    const [isOpen,setIsOpen] = useState(false);
    const token = useSelector(state=>state.token);

        const toggle = ()=>{
            setIsOpen(!isOpen)
        }

        let links = null;
        if(token===null){
            links = <Nav className="me-auto" navbar >
                <NavItem >
                <Link to="/login" className="nav-link">Login</Link>
                </NavItem>
                <NavItem >
                <Link to="/signup" className="nav-link">SignUp</Link>
                </NavItem>
                
            </Nav>
        }else{
            links = <Nav className="me-auto" navbar >
                <NavItem>
                <Link to="/home" className="nav-link">Home</Link>
                </NavItem>
                <NavItem>
                <Link to="/contact" className="nav-link">Contact</Link>
                </NavItem>
                <NavItem>
                <Link to="/about" className="nav-link">About</Link>
                </NavItem>
                <NavItem >
                <Link to="/logout" className="nav-link">Logout</Link>
                </NavItem>
            </Nav>
        }
        

        return(
            <div>

                <Navbar dark color="dark" expand="sm" >
                  
                  <NavbarBrand href="/">BrandName</NavbarBrand>
                  <NavbarToggler onClick={toggle} />
                  <Collapse isOpen={isOpen} navbar>
                  
                    {links}
                  </Collapse>
             
              
          </Navbar>


            </div>
        );
    
}

export default Navigation;
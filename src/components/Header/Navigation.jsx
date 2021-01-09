import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Navbar , NavbarBrand , Nav, NavbarToggler,NavItem,  Collapse } from 'reactstrap'
class Navigation extends Component{

    constructor(props){
        super(props)
        this.state={
            isNavOpen:false
        }
    }
 
    toggle =()=>{
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render(){
        return (
        <div>
            <Navbar dark color="dark" expand="md" >
                <div className="container">
                    
                    <NavbarBrand href="/">Restaurent Project</NavbarBrand>
                    <NavbarToggler  onClick={this.toggle} /> 
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/"className="nav-link active ">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/menu"className="nav-link active ">Menu</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact"className="nav-link ">Contact</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about"className="nav-link ">About</Link>
                        </NavItem>
                    </Nav>
                    </Collapse>
            </div>
            </Navbar>
        </div>
    );
    }
};

export default Navigation;
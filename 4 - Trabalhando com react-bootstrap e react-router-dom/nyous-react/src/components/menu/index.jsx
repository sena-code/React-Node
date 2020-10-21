import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';


const Menu = () => {

    const history = useHistory();
    const sair = (event) => {
        event.preventDefault();

        localStorage.removeItem('token-nyous');

        history.push('/');
    }
    const renderMenu = () => {
        const token = localStorage.getItem('token-nyous')

        console.log(token);

        if (token == null){
            return (
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
                    
        <NavDropdown title={jwt_decode(token).family_name} id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.3">Perfil</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={event => sair(event)} href="#action/3.4">Sair</NavDropdown.Item>
      </NavDropdown>
                </Nav>
            ) 
            }else if(jwt_decode(token).role === 'admin'){
                return(
                    <Nav>
                    <Nav.Link href="/admin/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/admin/categorias">Categorias</Nav.Link>
                    <Nav.Link href="/admin/eventos">Eventos</Nav.Link>
                </Nav>
                )
        }
    }
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;
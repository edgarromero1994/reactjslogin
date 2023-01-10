import React from "react";
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = () => {

    return(
       <div>
        <Navbar collapseOnSelect expand="lg" bg="danger " variant="danger">
      <Container>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link  eventKey={2}>
            <Link className="text-light " variant="outline-danger" to="/login">Iniciar sesion</Link>
            </Nav.Link>
            <Nav.Link  eventKey={2}>
            <Link className="text-light " variant="outline-danger" to="/registro">Registrarse</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        <div>
            <h1 className="text-center my-5 text-primary">VARGAS INC</h1>
        <p className="mx-5 my-5 py-3 px-3 h4">
Estimados empleados de Vargas Inc,

Esperamos que estén teniendo un buen día. Nos ponemos en contacto con ustedes para recordarles la importancia de registrarse en nuestras plataformas de trabajo. Esto les permitirá acceder a un listado de tareas y realizar seguimiento a su progreso.

Por favor, tomen un momento para registrarse en la plataforma de su elección. Si tienen algún problema o pregunta durante este proceso, no duden en comunicarse con nosotros para obtener ayuda.

Agradecemos su atención y esperamos contar con su participación en esta herramienta valiosa para nuestra empresa.

Saludos. 
</p>
        </div>
        <footer className="page-footer font-small blue pt-4 p-3 mb-2 bg-success bg-gradient text-white">

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
    </div>

</footer>
       </div>     
     
    )
}


export default Menu;
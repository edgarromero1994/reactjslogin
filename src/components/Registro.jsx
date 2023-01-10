import React, { useState, useEffect } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import {  Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Registro =() =>   {
  const [error, setError] = useState ("")
  const navigate= useNavigate();

  // para ingresar los datos en el formulario 
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
      //para confirmar la contraseña 

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.name || !input.email || !input.password || !input.confirmPassword) {
          setError('Por favor, completa todos los campos');
        } else if (input.password !== input.confirmPassword) {
          setError('Las contraseñas no coinciden');
        } else {
          setError('');
          // Enviar formulario aquí
          localStorage.setItem("user", JSON.stringify(input));
          navigate("/login");
        }
      };

    return (
      <div className="">
      <Navbar collapseOnSelect expand="lg" bg="danger " variant="danger">
      <Container>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link  eventKey={2}>
            <Link className="text-light " variant="outline-danger" to="/menu">Ir al Menu</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">VARGAS INC</h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                    {error && <p className="text-danger">{error}</p>}
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          Nombre
                        </Form.Label>
                        <Form.Control 
                        name="name"
                        value={input.name}
                        onChange={(e) => setInput({
                          ...input,
                          [e.target.name]:
                          e.target.value,
                        }) }
                        type="text" placeholder="Ingresa tu nombre" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Correo Electronico
                        </Form.Label>
                        <Form.Control 
                         name="email"
                        value={input.email}
                        onChange={(e) => setInput({
                         ...input,
                         [e.target.name]:
                         e.target.value,
                         }) }
                        type="email" placeholder="Ingresa tu correo" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                        name="password"
                        value={input.password}
                        onChange={(e) => setInput({
                       ...input,
                        [e.target.name]:
                        e.target.value,
                        }) }
                        type="password" placeholder="Ingresa tu contraseña" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirmar contraseña</Form.Label>
                        <Form.Control 
                        name="confirmPassword"
                        value={input.confirmPassword}
                        onChange={(e) => setInput({
                          ...input,
                          [e.target.name]: e.target.value
                        })}
                        type="password" placeholder="contraseña" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>

                      <div className="d-grid">
                      {error && <p className="text-danger">{error}</p>}
                        <Button variant="primary" type="submit" >
                          Registrar
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                         Ya tienes una cuenta?{" "}
                        <a href="{'/login'}" className="text-primary fw-bold">
                        <Link variant="outline-primary" to="/login">Iniciar Sesion</Link>
                        </a>
                      </p>
                
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <footer className="page-footer font-small blue pt-4 p-3 mb-2 bg-success bg-gradient text-white ">

<div className="footer-copyright text-center py-3">© 2023 Copyright:
</div>

</footer>

    </div>
    )
}

export default Registro;
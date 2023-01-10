import React, {useState} from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Login = () =>  {
  const navigate = useNavigate();
  const [error, setError] = useState ("")
  const [input, setInput]= useState({
    email : "",
    password: "",
})

// funcion para iniciar sesion
const handleLogin = (e) => {
  e.preventDefault();
  const loggeduser = JSON.parse(localStorage.getItem("user"));
  
  if (!loggeduser.email || !loggeduser.password ){
    setError('Por favor, completa todos los campos');
  } else if (
    input.email !== loggeduser.email && 
    input.password !== loggeduser.password

  ) {
    // Guardar en el almacenamiento local que el usuario ha iniciado sesión
    localStorage.setItem("user", true );
    // Redirigir al usuario a la lista de tareas
  } else {
    navigate("/todolist");
    // Inicializar la lista de tareas en el almacenamiento local
    localStorage.setItem('todolist', JSON.stringify([]));
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
                    
                    <Form onSubmit={handleLogin}>
                    {error && <p className="text-danger">{error}</p>}
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Correo Electronico
                        </Form.Label>
                        <Form.Control 
                        name="email"
                        value={input.email}
                        onChange={(e) => setInput({
                            ...input,
                            [e.target.name] : 
                            e.target.value,})}
                        type="email" placeholder="Ingresa tu correo" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                        name="password"
                        value={input.password}
                        onChange={(e) => setInput({
                            ...input,
                            [e.target.name] : 
                            e.target.value,})}
                        type="password" placeholder="Ingresa tu contraseña" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Iniciar sesion
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                      No tienes cuenta?{" "}
                        <a href="{''}" className="text-danger fw-bold">
                        <Link variant="outline-danger" to="/registro">Registrate</Link>
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
<footer className="page-footer font-small blue pt-4 p-3 mb-2 bg-success bg-gradient text-white">
<div className="footer-copyright text-center py-3">© 2023 Copyright:
</div>

</footer>

        </div>
    )
}

export default Login;
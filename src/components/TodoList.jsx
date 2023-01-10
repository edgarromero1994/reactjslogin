import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TodoList = () => {
  const [todoArray, setTodoArray] = useState([])
  const completeCount = todoArray.filter(todo => todo.isComplete === true).length
  const pendingCount = todoArray.length-completeCount
  const [formData, setFormData] = useState({ titulo: "", descripcion: "" })
  const [todoEditId, setTodoEditId] = useState(null)
  const username = JSON.parse(localStorage.getItem("user")).email;
  
  useEffect(() => {
      const data = window.localStorage.getItem(`todoArray_${username}`);
  
      if (data != null) {
        // Filtra las tareas para mostrar solo aquellas que tienen el nombre del usuario actual como propiedad
        const filteredTodos = JSON.parse(data).filter((todo) => todo.username === username);
        setTodoArray(filteredTodos);
        setTodoArray(JSON.parse(data))
      }
    }, []);
  
    useEffect(() => {
      // Almacena el todolist del usuario actual en LocalStorage
      const data = JSON.stringify(todoArray);
      window.localStorage.setItem(`todoArray_${username}`, data);
    }, [todoArray]);

      const handleChange = ({target}) => {
          setFormData({...formData, [target.name]: target.value})
      }

      const addTodo = (e) => {
          e.preventDefault();
          if (todoEditId != null) {
              const newTodo = [...todoArray]
              let todo = newTodo.find((todo) => todo.id === todoEditId )
              todo.tiulo = formData.titulo
              todo.descripcion = formData.descripcion
              setTodoArray(newTodo)
              setTodoEdit(null)
              setFormData({ titulo: "", descripcion: ""})
          } else {
              if (formData.titulo != "" && formData.descripcion != "") {
                  const todo = formData
                  todo.isCompleto = false 
                  todo.id = Date.now()
  
                  setTodoArray([...todoArray, todo])
                  setFormData({ titulo: "", descripcion: ""})
              }
          }
      }

      const deleteTodo = (id) => {
          const newTodos = todoArray.filter(todo => todo.id != id)
          setTodoArray(newTodos)
      }

      const toggleTodo = (id) =>  {
          const newTodo = [...todoArray]
          let todo = newTodo.find((todo) => todo.id === id)
          todo.isCompleto = !todo.isCompleto
          setTodoArray(newTodo)

      }

      const deleteAllComplete = () => {
          const newTodo = todoArray.filter(todo => todo.isCompleto === false)
          setTodoArray(newTodo)
      }

      const setTodoEdit = (id) => {
          const todo = todoArray.find((todo) => todo.id === id)
          setFormData({ titulo: todo.titulo, descripcion: todo.descripcion})
          setTodoEditId(id)
      }
   
  const navigate = useNavigate();
      const userName = JSON.parse(localStorage.getItem("user"));
      const hanleLogout = ()  => {
          localStorage.removeItem("loggedin")
          navigate ("/login")
      }


    return (
        <div>
              <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Usuario: {userName.email} </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link onClick={hanleLogout}  eventKey={2} href="#memes">
              Cerrar Sesion
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        <div className="">
                    <div className="todolist">
                    <form className="input-group shadow rounded p-3 mt-5 mb-4" onSubmit={addTodo}>
                        <input className="form-control" type="text" name="titulo" placeholder="Titulo" value={formData.titulo} onChange={handleChange}/>
                        <input className="form-control" type="text" name="descripcion" placeholder="Descripcion" value={formData.descripcion} onChange={handleChange}/>
                        <input className="btn btn-primary" type="submit" value="Agregar Tarea" />
                     </form >
  
            <div className="shadow rounded p-3 mt-5 mb-5 w-100">
                <div className="d-flex align-items-center justify-content-between list-group-item">
                    <h5>Todo List</h5>
                    <button className="btn btn-danger" onClick={deleteAllComplete}>Eliminar tareas completadas</button>
                </div>
                {
                      todoArray.map((todo) => 
                      <div key={todo.id} className="d-flex align-items-center list-group-item">
                  <input type="checkbox" className="form-check-input mx-2" checked={todo.isCompleto} onChange={() =>
                      toggleTodo(todo.id)}/>
  
                      <p className={`p-0 m-0 flex-grow-1 ${todo.isCompleto ? "text-decoration-line-through" : ""}`}>
                      {todo.titulo}<br/>
                          <span className="text-muted">{todo.descripcion}</span> 
                              </p>
                              {todo.isCompleto && <span className=" badge bg-success">Completada</span>}
                              <button className="btn btn-warning mx-1" onClick={ () => setTodoEdit(todo.id)}>✏</button>
                              <button className="btn btn-danger mx-1" onClick={ () => deleteTodo(todo.id)}>🗑</button>
          </div>
  )}
        <div className="list-group-item pt-4">
            <span className="fw-light font-monospace">Total de tareas: {todoArray.length}, completadas: {completeCount} , pendientes: {pendingCount} </span>
  
        </div>
  
            </div>
                    </div>
        </div>
        <footer className="page-footer font-small blue pt-4 p-3  bg-success bg-gradient text-white mt-5">
<div className="footer-copyright text-center py-3">© 2023 Copyright:
</div>

</footer>
        </div>


    )
}

export default TodoList;

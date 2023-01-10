import React from "react"
import  'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import TodoList from "./components/TodoList";
import Registro from "./components/Registro";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () =>  {
        return (
                <> 
                <BrowserRouter>
                  <Routes>
                  <Route index element={<Menu/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/registro" element={<Registro/>}/>
                    <Route path="/todolist" element={<TodoList/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                  </Routes>
            
                </BrowserRouter>
                </>

        )
}


export default App;
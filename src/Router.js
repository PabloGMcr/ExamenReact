import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'

// Componentes

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Formulario from './Components/Formulario';
import Home from './Components/Home';
import History from './Components/History';
import About from './Components/About';
import Contac from './Components/Contac';
import Listado from './Components/Listado';


class Router extends Component {
    state = {  } 
    render() { 
        return (

            <BrowserRouter>
            
            <Navbar></Navbar>
            <Route exact path="/Formulario"component={Formulario}></Route>
            <Route exact path="/History"component={History}></Route>
            <Route exact path="/About"component={About}></Route>
            <Route exact path="/"component={Home}></Route>
            <Route exact path="/Contac"component={Contac}></Route>
            <Route exact path="/Listado"component={Listado}></Route>
            <Footer></Footer>
            
            </BrowserRouter>
        );
    }
}
 
export default Router
;
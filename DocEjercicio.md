
# Reporte: Ejercicio React 3

# Instalicones

~~~
npm install --save react-router-dom
~~~
~~~
Npm  install - - save axios
~~~


# Creacion de componentes.

1. Con  `imrc`  &  `cc`crear y nombrar componentes

~~~js
import React, { Component } from 'react'

class Contac extends Component {
    state = {  } 
    render() { 
        return ();
    }
}
 
export default Contac;
~~~

# Rueto

1. Crear Router.js

2. Cofigurar Router.js

~~~js

// Librerias

import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
.
.
.

// Componentes


import Formulario from './Components/Formulario';
.
.
.

class Router extends Component {
    state = {  } 
    render() { 
        return (

            <BrowserRouter>
            
            <Navbar></Navbar>
            <Route exact path="/Formulario"component={Formulario}></Route>
            .
            .
            .
                      
            </BrowserRouter>
        );
    }
} 
export default Router
;
~~~


3. Cofigurar App.js

~~~js
import logo from './logo.svg';
import './App.css';
import './Router'
import Router from './Router';

function App() {
  return (
    <div className="App">

      <Router></Router>

          
    </div>
  );
}

export default App;

~~~


# Soluciones Listado Api

0. Construir bien el componente  


* Quitar `export default` y `React` dejarlo solo en : `class Listado extends Component` 
~~~js
export default class Listado extends React.Component {
  state = {
    persons: []
  }
}
~~~

* No habia exportacion. Estaba arriba en la clase del componente.
~~~js
export default Listado;
~~~

1. Sustituir `a` por `person` 

~~~js
export default class Listado extends React.Component {
  state = {
    a: []
  }
}
~~~
2. Sustituir `http` por `axios`

~~~js
 http.get(`https://jsonplaceholder.typicode.com/users`)
~~~

3. Quitar las comas luego del `state` hacer metodo `map` y pintar `data.name`

~~~js
{ this.state(person => <li>{person.name}</li>)}

// Con tabla 
 
 {this.state.persons.map((data) => (
        <tr>
          <td>{data.name}</td>
        </tr>
        ))}
~~~

# Soluciones Formulario

0. Construir bien el componente  

* Quitar `export default` y `React` : `class Listado extends Component` 
~~~js
export default class Formulario extends React.Component {
  state = {
    name: []
  }
}
~~~

* No habia exportacion. Estaba arriba en la clase del componente.
~~~js
export default Formualrio;
~~~

1. Usar `event.preventDefault` para ver si llegan datos en consola

~~~js
 handleSubmit = event => {

    if (event) {

      event.preventDefault();

    }
 }
~~~

# Logica del formulario.

El formulario tiene un solo `label` donde se resiben todos los inputs  se muestran con un texto y un `placeholder` que va cambiando al dar click al boton siguiente estos eventos ultilizan el metodo `switch`

~~~js
getNextStepPlaceholder = () => {
    const { step } = this.state;

    switch (step) {
      case 1:
        return 'Ingresa tu nombre';
      case 2:
        return 'Ingresa tu correo electrónico';
        case 3:
          return 'Ingresa Genero';
          case 4:
            return'Estado civil';
            case 5:
              return'Ciudad';
              .
              .
              .
      default:
        return '';
    }
  }

~~~

Al llenar todos los input se hace el envio de datos que se puede ver en consola y se dispara una `alert`

~~~js

        this.setState({
          name: '',
          email: '',
          genero:'',
          ciudad:'',
          estadoCivil: '',
          infoEnviada: true,
          step: 1
        });

        window.alert('Se ha enviado la información!');
~~~
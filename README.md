# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

----

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

# Ruteo

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


3. Configurar App.js

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

# Logica de formulario.

El formulario tiene un solo `label` donde se resiben los inputs requeridos en el proyecto, se muestran con un texto y un `placeholder` que se va cambiando en el formulario al dar click al boton "siguiente", estos eventos ultilizan el metodo `switch`

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

* Al llenar todos los input se hace el envio de datos que se puede ver en consola y se dispara una `alert`

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

# CSS y HTML

* Se ultilza bootstrap y unos codigos de emogis para dar estilo a los Componentes que 
estan en un `div` con  los sigientes estilos :

~~~html

div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Contac  &#9993;</h1>
          
              <h2 class="lead">React : Ejercicio de Rutas</h2>
              <img className="w-25 h-25" src="/logo192.png" alt=""></img>
            </div>
         </div>
~~~

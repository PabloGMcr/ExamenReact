import React, { Component } from "react";

import axios from "axios";

class Listado extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      console.log(persons);
      this.setState({ persons });
    });
  }

  render() {
    return (
      <frameElement>
       
       <h1 class="display-4 mt-5">Clientes   &#128203;</h1>
          
          <h2 class="lead">React : Ejercicio de Rutas</h2>

       <div class="containerTabla">
  <table class="table-striped">
    <thead class="thead">
      <tr>
        <th>Nombre</th>
      </tr>
    </thead>
    <tbody>
      {this.state.persons.map((data) => (
        <tr>
          <td>{data.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>





      </frameElement>
    );
  }
}

export default Listado;

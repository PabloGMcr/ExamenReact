
import React, { Component } from 'react';
import axios from 'axios';

class Formulario extends Component {
  state = {
    name: '',
    email: '',
    genero:'',
    ciudad:'',
    estadoCivil:'',
    step: 1
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {

    if (event) {

      event.preventDefault();

    }
  
    // Se registra nuevo input
    
    const { name, email,genero, ciudad, estadoCivil } = this.state;
    const user = {
      name,
      email,
      genero,
      ciudad,
      estadoCivil
    };

    console.log("Nombre de Persona:", name);
    console.log("Correo electrónico de Persona:", email);
    console.log("Genero:", genero);
    console.log("ciudad:", ciudad);
    console.log(" Estado Civil", estadoCivil);


    // Se registra nuevo input
    
    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res)
        console.log(res.data)

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
      
      });
  }

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
      default:
        return '';
    }
  }

  handleNextStep = () => {
    const { step } = this.state;

    // Cambiar numero
    
if (step < 5) {
      this.setState({ step: step + 1 });
    } else {
      
      this.handleSubmit();
    }
  }

  render() {
    const { name, email, genero, ciudad, step, estadoCivil } = this.state;

    return (

<frameElement> 

<div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Formulario &#128217;</h1>
          
              <h2 class=" mt-5">Ingrese los datos requeridos</h2>
             
            </div>
            <div className='mt-5 p-5'>
        <form onSubmit={this.handleSubmit}>
    <label>
      {step === 1 ? 'Nombre:' : (step === 2 ? 'Correo electrónico:' : (step === 3 ? 'Género:' : (step === 4 ? 'Estado Civil:' : 'Ciudad:')))}
      <input className='m-3'
        type="text"
        placeholder={this.getNextStepPlaceholder()}
        name={step === 1 ? 'name' : (step === 2 ? 'email' : (step === 3 ? 'genero' : (step === 4 ? 'estadoCivil' : 'ciudad')))}
        value={step === 1 ? name : (step === 2 ? email : (step === 3 ? genero : (step === 4 ? estadoCivil : ciudad)))}
        onChange={this.handleChange}
      />
    </label>
    <button type='button' onClick={this.handleNextStep}>
      {step < 5 ? 'Siguiente' : 'Enviar'}
    </button>
  </form>
      </div>
         </div>

</frameElement>

    )
  }
}

export default Formulario;

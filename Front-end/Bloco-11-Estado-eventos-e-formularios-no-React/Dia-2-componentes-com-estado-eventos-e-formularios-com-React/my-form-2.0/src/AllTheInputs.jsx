import React from 'react';
import './Style.css'
import CreateInput from './CreateInput';

class AllTheInputs extends React.Component {

  state = {
    name: '',
    email: '',
    CPF: '',
    address: '',
    city: '',
    state: '',
    house: '',
  }



  handleUpperCase = ({ target }) => {
    this.setState({
      name: target.value.toUpperCase(),
    });
  };

  render() {

    const { name, email, CPF, address } = this.state;
    const { handleChange, handleUpperCase } = this;

    const states = 'Acre (AC) - Alagoas (AL) - Amapá (AP) - Amazonas (AM) - Bahia (BA) - Ceará (CE) - Distrito Federal (DF) - Espírito Santo (ES) - Goiás (GO) - Maranhão (MA) - Mato Grosso (MT) - Mato Grosso do Sul (MS) - Minas Gerais (MG) - Pará (PA) - Paraíba (PB) - Paraná (PR) - Pernambuco (PE) - Piauí (PI) - Rio de Janeiro (RJ) - Rio Grande do Norte (RN) - Rio Grande do Sul (RS) - Rondônia (RO) - Roraima (RR) - Santa Catarina (SC) - São Paulo (SP) - Sergipe (SE) - Tocantins (TO)';

    const splitedStates = states.split(' - ');

    return (

      <fieldset>

        <CreateInput
          id='name'
          type='text'
          onInputChange={handleUpperCase}
          value={name}
          name='Nome:'
          maxLength={40}
        />

        <CreateInput
          id='email'
          type='email'
          onInputChange={handleChange}
          value={email}
          name='Email:'
          maxLength={50}
        />


        <CreateInput
          id='CPF'
          type='number'
          onInputChange={handleChange}
          value={(CPF)}
          name='CPF:'
          maxLength={11}
        />

        <CreateInput
          id='address'
          type='text'
          onInputChange={handleChange}
          value={address}
          name='Endereço:'
          maxLength={200}
        />

        <label htmlFor="state">
          Selecione seu estado:
          <select
            name="state"
            id="state">
            {splitedStates.map((x) => <option key={`Option: ${x}`}value={x}>{x}</option>)}
          </select>
        </label>

      <br />
        
      <button type='submit'>Enviar formulário</button>
        
      </fieldset>

    )
  }
}

export default AllTheInputs;
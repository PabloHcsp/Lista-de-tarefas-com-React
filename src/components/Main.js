import React, { Component } from 'react';

import './Main.css';

export default class Main extends Component {
  //uso de construtor
  /*constructor(props) {
    super(props);
    this.state = {
      novaTarefa: '',
    };

    this.imputMudou = this.imputMudou.bind(this);
  }
*/
  //classfield
  state = {
    novaTarefa: '',
  };
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };
  render() {
    return (
      <div className='main'>
        <h1>Lista de tarefas</h1>

        <form action='#'>
          <input onChange={this.handleChange} type='text' />
          <button type='submit'>Enviar</button>
        </form>
      </div>
    );
  }
}

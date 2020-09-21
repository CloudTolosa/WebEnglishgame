import React, { Component } from 'react';
import "../assets/styles/components/PalabraAdivinadaHastaElMomento.scss";

class PalabraAdivinadaHastaElMomento extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <p id="palabra-adivinada-hasta-el-momento">{this.props.PalabraAdivinadaHastaElMomento}</p>
    );
  }
}

export default PalabraAdivinadaHastaElMomento;

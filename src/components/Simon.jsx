import React from 'react';
import '../assets/styles/components/Simon.scss';
import Simonn from '../components/Simonn';


const Simon = () =>(
    <div class="gameboard">
      <div id="celeste" class="color celeste left" data-color="celeste"></div>
      <div id="violeta" class="color violeta right" data-color="violeta"></div>
      <div id="naranja" class="color naranja left" data-color="naranja"></div>
      <div id="verde" class="color verde right" data-color="verde"></div>
      <button id="btnEmpezar" class="btn-start" onclick="empezarJuego()">Empezar a jugar!</button>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>
      <script src="Simonn.js"></script>
    </div>    
);


export default Simon;
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);
  const clicado = document.getElementById('click-lim')

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  if(numClics>10){
    clicado.innerText = 'Paso el numero de clicks'
  }
  if(numClics>14){
    clicado.innerText = 'Estas llegando al Limite'
  }
  if(numClics>17){
    clicado.innerText = 'Llego al punto'
  }
  if(numClics>17){
    clicado.innerText = 'BOOOOM!!'
  }

  const reiniciarContador = () => {
    setNumClics(0);
    clicado.innerText = ''
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
      </div>
      <div className='contenedor-principal'>
        <p id='click-lim'></p>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;

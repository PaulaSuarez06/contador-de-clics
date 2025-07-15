
import './App.css';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import Titulo from './componentes/Titulo';
import './hojas-de-estilo/Botones.css'
import './hojas-de-estilo/Contador.css'
import './hojas-de-estilo/Titulo.css'
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }
  return (
    <div className="App">

      <div className='contenedor-principal'>
        <Titulo />

        <Contador numClics={numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;

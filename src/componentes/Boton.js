import React from 'react';

// desestructuración

function Boton({texto, esBotonDeClic, manejarClic}){
return(
    <button
    className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'} // esto es el condicional 
    onClick={manejarClic}>
        {texto}
    </button>

)
}

export default Boton;
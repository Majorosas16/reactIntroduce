import { useState } from "react"; // Funciones construidas para hacer una serie de obejtivos
import Form from "../Form/Form";

const Card = ({title, description}) => { // definidas las variables que voy a escuchar, ahí ya están creadas


    //Lógica del componente

    //Manera para manejar variables
    const [count, setCount] = useState(0); //se pone el cero para que le valor no empiece en undefined.
    //izq variable que voy a escuchar (let = count) y la derecha es utilizada para modificar el valor de la variable (setCount), es la que guarda algo. modificar el contenido de ese estado o de count

    const [message, setMessage] = useState(true);
    const [messageText, setMessageText] = useState('');
    console.log(message);
    
    const [email, setEmail] = useState('');
    console.log(email);
    
    const handleClick = () => {
        console.log("Hola, soy un botón");
        setCount(count + 1) 
        // setCount(1) // let count = 1;
        // setMessage('Hola, soy un mensaje modificado');
        setMessage((prevContent) => !prevContent); // sacar el valor anterior
        setMessageText(message ? 'Hola' : 'Adios')
    }

    const handleClickParams = (param) => {
        console.log(`Hola,${param}`);
    }

    return ( // render del componente 
    <>
            {/* <h1>Titulo</h1>
            <p>Descripción</p> */}

            <h1>{title}</h1>
            <p>{description}</p>
            <p>{count}</p>
            {/* <p>{message ? 'Hola' : 'Adios'}</p> */}
            <p>{messageText}</p>

            <button onClick={handleClick}>Tocame</button>            
            <button onClick={ ()=>handleClickParams('Maria')}>Tocame</button> 
            {/* cuando es con pa´ramentros si no lo tiene entonces se activa solo */}
            <Form setEmail={setEmail}/>
    </>
    )
}

export default Card;
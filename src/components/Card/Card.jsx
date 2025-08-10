const Card = ({title, description}) => { // definidas las variables que voy a escuchar, ahí ya están creadas

    //Lógica del componente

    return ( // render del componente 
    <>
            {/* <h1>Titulo</h1>
            <p>Descripción</p> */}

            <h1>{title}</h1>
            <p>{description}</p>
    </>
    )
}

export default Card;
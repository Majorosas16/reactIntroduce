import { useState } from 'react';

const Form = ({setEmail}) => {

    // const [email, setEmail] = useState('');
    // console.log(email);
    

    const handleSignIn = () => {
        firebase.signIn(email) // ejemplo enviar el value a firebase haciendo uso de los estados
}
    return (
        <form>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" onChange={(e) => setEmail(e.target.value)}/>
            <p>{email}</p>
            <button onClick = {handleSignIn} type="submit">Enviar</button>
        </form>
    );
}

export default Form;
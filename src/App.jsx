import './App.css'
import Card from './components/Card/Card';
import Form from './components/Form/Form'; // Importar el componente Form si es necesario

// Aquí se importa los componentes que se vayan creando

//JS
function App() {

  // Esto es JS. Lógica del componente
  const counter = 2;
  return (
    //Esto es JS + html. La parte visual
    <>
      <div>
        {counter}
      </div>
      <section>
        <Card title='Holaaaa' description='quemasssssss' />

        <Card title='Holaaaa2' description='ya' />

{/* <Form /> */}

        
      </section>
    </>
  )
}

export default App

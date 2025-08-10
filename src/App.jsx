import './App.css'
import Card from './components/Card/Card';

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
        <Card title='Holaaaa3' description='porfa' />
        <Card title='Holaaaa4' description='basta' />
        
      </section>
    </>
  )
}

export default App

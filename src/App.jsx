
import './App.css'
import { MyComponent } from './components/MyComponent'
import { SecondComponent } from './components/SecondComponent';

function App() {

  const name   = 'Lady Viviana F.';

  return (
    <>
      <div>
        <h3> Práctica de Componentes</h3>
        {/* Cargar el primer componente */}
        <MyComponent 
          name={name} 
          lastName  = "Angel"
        />
       <hr />
       <h4> Segundo Componente</h4>
       <SecondComponent />  
      </div>     
    </>
  )
}

export default App

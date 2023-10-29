import { React ,useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import TablaEmpleados from './components/TablaEmpleados';



function App() {
  const [empleados, setEmpleados]= useState([]);
  const [empleado, setEmpleado]= useState({}); 

  //Local Storage
  useEffect(()=>{
    const obtenerLS = () => {
      const empleadosLS = JSON.parse(localStorage.getItem('empleados')) ?? []
      setEmpleados(empleadosLS)
    }
    obtenerLS()
  }, [])

  useEffect(()=>{
    localStorage.setItem('empleados', JSON.stringify(empleados))
  },[empleados])


  const eliminarEmpleado = (id) =>{
    const empleadosActualizados = empleados.filter(empleado=> empleado.id !== id)
    setEmpleados(empleadosActualizados)
  } 


  return (
    <>
    <div className='container mx-auto mt-20'>
      <Header/>

      <div className='mt-12 md:flex'>  
        <Formulario
          empleados={empleados}
          setEmpleados={setEmpleados}
          empleado={empleado}
          setEmpleado={setEmpleado}
        />

        <TablaEmpleados
          empleados={empleados}
          setEmpleado={setEmpleado}
          eliminarEmpleado={eliminarEmpleado}
        />
      </div>
    </div>
    </>
  )
}

export default App

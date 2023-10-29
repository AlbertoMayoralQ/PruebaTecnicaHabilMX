import { React, useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({empleados, setEmpleados}) => {

    const [nombre, setNombre] = useState('');
    const [apellidoP, setApellidoP] = useState('');
    const [apellidoM, setApellidoM] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [area, setArea] = useState('');

    const [error, setError] = useState(false);

    //ID
    const generarId= () =>{
        const random = Math.random().toString(33).substr(2);
        const fecha = Date.now().toString(33);

        return random + fecha;
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        // Validacion del form
        if([nombre, apellidoP, apellidoM, fechaNacimiento, area].includes('')){
            setError(true)
            return
        }
        setError(false)

        // Objeto empleado
        const objetoEmpleado = {
            nombre, 
            apellidoP, 
            apellidoM, 
            fechaNacimiento, 
            area,
            id: generarId()
        }

        setEmpleados([...empleados, objetoEmpleado])

        // Reiniciar form
        setNombre('')
        setApellidoP('')
        setApellidoM('')
        setFechaNacimiento('')
        setArea('')
    }



    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5 my-10 text-slate-100'>
            <h2 className='text-4xl text-center mt-5 mb-10'>Registro de empleados</h2>
            <form 
            onSubmit={handleSubmit}
            className='bg-gradient-to-tr from-cyan-700 to-cyan-500 rounded-lg py-5 px-5'
            >
                {error && <Error>Hay al menos un campo vacio</Error>}
                <div className='mb-5 mt-2'>
                    <label htmlFor="empleado" className='block text-white uppercase font-bold '>Nombre </label>
                    <input 
                    id='nombre'
                    type='text'
                    placeholder='Nombre Empleado' 
                    className='border-2 w-full p-2 rounded-md mt-2 text-gray-800 hover:border-cyan-900 placeholder-gray-400'
                    value={nombre}
                    onChange={(e)=> setNombre(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="apellidoP" className='block text-white uppercase font-bold '>Apellido Paterno </label>
                    <input 
                    id='apellidoP'
                    type='text'
                    placeholder='Apellido Paterno' 
                    className='border-2 w-full p-2 rounded-md mt-2 text-gray-800 hover:border-cyan-900 placeholder-gray-400'
                    value={apellidoP}
                    onChange={(e)=> setApellidoP(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="apellidoM" className='block text-white uppercase font-bold '>Apellido Materno </label>
                    <input 
                    id='apellidoM'
                    type='text'
                    placeholder='Apellido Materno' 
                    className='border-2 w-full p-2 rounded-md mt-2 text-gray-800 hover:border-cyan-900 placeholder-gray-400'
                    value={apellidoM}
                    onChange={(e)=> setApellidoM(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="fechaNacimiento" className='block text-white uppercase font-bold '>Fecha de Nacimiento </label>
                    <input 
                    id='fechaNacimiento'
                    type='date'
                    placeholder='Fecha de Nacimiento' 
                    className='border-2 w-full p-2 rounded-md mt-2 text-gray-800 hover:border-cyan-900 placeholder-gray-400'
                    value={fechaNacimiento}
                    onChange={(e)=> setFechaNacimiento(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="area" className='block text-white uppercase font-bold '>Area </label>
                    <input 
                    id='area'
                    type='text'
                    placeholder='Informatica' 
                    className='border-2 w-full p-2 rounded-md mt-2 text-gray-800 hover:border-cyan-900 placeholder-gray-400'
                    value={area}
                    onChange={(e)=> setArea(e.target.value)}
                    />
                </div>

                <input 
                    type="submit" 
                    className='p-3 text-white bg-cyan-800 hover:bg-cyan-950 w-full cursor-pointer uppercase font-bold rounded-md transition-colors'
                    value='Registrar Empleado'
                />
            </form>
        </div>
    )
}

export default Formulario

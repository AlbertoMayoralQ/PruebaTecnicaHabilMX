const Empleado = ({empleado, eliminarEmpleado}) => {
    
    const {nombre, apellidoP, apellidoM, fechaNacimiento, area, id} = empleado
    
    return (
            <tbody className=" bg-opacity-20 bg-cyan-900 hover:bg-opacity-25 transition-colors">
                <tr className="">
                    <td className="p-2">{nombre}</td>
                    <td className="p-2">{apellidoP}</td>
                    <td className="p-2">{apellidoM}</td>
                    <td className="p-2">{fechaNacimiento}</td>
                    <td className="p-2">{area}</td>
                    <td className="p-2">
                        <button
                        className="ml-3 py-2 px-5 rounded-md font-semibold uppercase bg-red-800 hover:bg-red-950 transition-colors"
                        type="button"
                        onClick={() => eliminarEmpleado(id)}
                        >Eliminar</button>
                    </td>
                </tr>
            </tbody>
    )
}

export default Empleado

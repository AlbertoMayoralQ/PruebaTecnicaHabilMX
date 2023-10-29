import Empleado from './Empleado';

const TablaEmpleados = ({ empleados, eliminarEmpleado }) => {
    return (
        <div className="my-10 text-slate-100 mx-10 md:w-1/2 lg:w-3/5">
        {empleados.length>0 ? (
            <>
            <h2 className="text-4xl text-center mt-5 mb-10">
                Tabla de Empleados
            </h2>
            <div className="bg-gradient-to-tl from-cyan-700 to-cyan-500 rounded-lg py-5 px-5 overflow-x-auto">
                <table className="table  shadow-sm text-center overflow-x-auto">
                <thead className="bg-opacity-30 bg-cyan-900 rounded-md">
                    <tr className="">
                    <th className="p-3">Nombre</th>
                    <th className="p-3">Apellido Paterno</th>
                    <th className="p-3">Apellido Materno</th>
                    <th className="p-3">Fecha de Nacimiento</th>
                    <th className="p-3">Area</th>
                    <th className="">Acción</th>
                    </tr>
                </thead>
                {empleados.map((empleado) => (
                    <Empleado
                    key={empleado.id}
                    empleado={empleado}
                    eliminarEmpleado={eliminarEmpleado}
                    />
                ))}
                </table>
            </div>  
            </>
        ) : (
            <p className='text-4xl text-center font-bold mt-5'>No hay empleados</p>
        )}
        </div>
    );
};

export default TablaEmpleados;
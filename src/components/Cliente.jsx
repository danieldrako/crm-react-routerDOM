import { useNavigate } from "react-router-dom"

function Cliente({cliente}) {

    const navigate = useNavigate()
    const {nombre, empresa, email, telefono, id} = cliente

    return (
        <tr className="border-b">
            <td className='text-white p-6 space-y-2'>
                <p className="text-2xl">{nombre}</p>
                <p>{empresa}</p>
            </td>

            <td className='text-white p-6'>
                <p className=""> <span className=" uppercase font-bold">Email: </span>{email}</p>
                <p className=""> <span className=" uppercase font-bold">Tel: </span>{telefono}</p>
            </td>

            <td className='text-white p-6 flex gap-3'>
                <button
                    type="button"
                    className=" text-yellow-300 hover:text-amber-400 font-bold text-xs"
                    onClick={ () => navigate(`/clientes/${id}/editar`) }
                >
                    Editar
                </button>

                <button
                    type="button"
                    className=" text-red-300 hover:text-red-500 font-bold text-xs"
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Cliente
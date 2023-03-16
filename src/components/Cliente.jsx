import { useNavigate, Form, redirect } from "react-router-dom"
import { eliminarCliente } from "../data/clientes"


export async function action({params}){

    await eliminarCliente(params.clienteId)
    return redirect('/')
}

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

                <Form
                    method="post"
                    action={`/clientes/${id}/eliminar`}
                    onSubmit={(e) => { 
                        if(!confirm('¿Deseas eleminar este registro?')){
                            e.preventDefault()
                        }
                     }}
                >
                    <button
                        type="submit"
                        className=" text-red-300 hover:text-red-500 font-bold text-xs"
                    >
                        Eliminar
                    </button>
                </Form>

            </td>
        </tr>
    )
}

export default Cliente
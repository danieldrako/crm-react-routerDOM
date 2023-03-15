import { Form, useNavigate, useLoaderData } from "react-router-dom"
import Formulario from "../components/Formulario"
import { obtenerCliente } from "../data/clientes"

export async function loader({params}){
  const cliente = await obtenerCliente(params.clienteId)
  if(Object.values(cliente).length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'Cliente No Encontrado'
    })
  }
  return cliente
}

const EditarCliente = () => {
  const navigate = useNavigate();
  const cliente = useLoaderData();

  return (
    <>
      <h1 className='font-black text-4xl text-sky-700'>Editar Cliente</h1>
      <p className='mt-3 text-sky-600'>Puedes modificar los datos de un cliente</p>

      <div className="flex justify-end">
        <button
          className="bg-sky-800 text-white px-4 py-2 font-bold uppercase rounded-md"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>


      <div className="bg-lime-400 bg-opacity-60 rounded-schm md:w-3/4 mx-auto px-5 py-10 mt-20">

        {/* {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)} */}

        <Form
          method='post'
          noValidate
        >
          <Formulario
            cliente={cliente}
          />

          <input 
            type="submit"
            className="mt-5 w-full p-3 uppercase font-bold text-lg bg-yellow-500"
            value="Registrar Cliente"
           />
        </Form>
      </div>
    </>
  )
}

export default EditarCliente
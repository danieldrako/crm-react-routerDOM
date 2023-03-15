import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom"
import Error from "../components/Error"
import Formulario from "../components/Formulario"
import { obtenerCliente, actualizarCliente } from "../data/clientes"

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

export async function action({request,params}){
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  const email = formData.get('email')

  //*Validacion
  const errores = []
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if(!regex.test(email)) {
    errores.push('El Email no es válido')
  }

  //*Retornar errores
  if(Object.keys(errores).length){
    return errores
}

//*Actualizar cliente
await actualizarCliente(params.clienteId, datos)
return redirect('/')
}

const EditarCliente = () => {
  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData()
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

        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

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
            value="Guardar Cambios"
           />
        </Form>
      </div>
    </>
  )
}

export default EditarCliente
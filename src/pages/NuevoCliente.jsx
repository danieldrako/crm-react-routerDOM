import { Form, useActionData, useNavigate } from "react-router-dom"
import Error from "../components/Error"
import Formulario from "../components/Formulario"

export async function action({request}){
  const formData = await request.formData()
  
  const datos = Object.fromEntries(formData)

  
  //*Validacion
  const errores = []
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
  }


  //*Retornar errores
  if(Object.keys(errores).length){
    return errores
  }

}

const NuevoCliente = () => {

  const errores = useActionData()  
  const navigate = useNavigate()

  return (
    <>
      <h1 className='font-black text-4xl text-sky-700'>Nuevo Cliente</h1>
      <p className='mt-3 text-sky-600'>Llena todos los campos para registrar un nuevo cliente</p>

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
        >
          <Formulario/>

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

export default NuevoCliente
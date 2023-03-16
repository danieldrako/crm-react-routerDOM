import {useLoaderData} from 'react-router-dom'
import {obtenerClientes} from '../data/clientes'
import Cliente from '../components/Cliente';


export function loader () {
    const clientes = obtenerClientes()
    return clientes
}

function Index() {

  const clientes = useLoaderData();


  return (

    
    <>
      <h1 className='font-black text-4xl text-sky-700'>Clientes</h1>
      <p className='mt-3 text-sky-600'>Administra tus Clientes</p>


      
      {clientes.length ? (
        <table className='w-full bg-lime-400 bg-opacity-40  shadow mt-5 table-auto'>
          <thead className='bg-sky-900 text-white'>
            <tr>
              <th className='p-2 text-white'>Cliente</th>
              <th className='p-2 text-white'>Contacto</th>
              <th className='p-2 text-white'>Acciones</th>
            </tr>
            </thead>


            <tbody >
              {clientes.map(cliente => (
                <Cliente
                  cliente ={cliente}
                  key ={cliente.id}
                />
              ))}
            </tbody>


        </table>
      ) : (
        <p className='font-black text-4xl text-sky-700 mt-20 block text-center ' > No hay clientes</p>
      )}
    </>
  )
}

export default Index
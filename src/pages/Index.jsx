import {useLoaderData} from 'react-router-dom'
import Cliente from '../components/Cliente';

export function loader () {
  const clientes = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@juan.com",
        empresa: 'Codigo Con Juan'
    },
];

  return clientes;
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
        <p className> No hay clientes</p>
      )}
    </>
  )
}

export default Index
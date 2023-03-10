import { Outlet, useLocation, Link } from "react-router-dom"

const Layout = () => {
    const location = useLocation()
  return (
    <div className="md:flex md:min-h-scren">
        <aside className="md:w-1/4 bg-sky-900 px-5 py-10">
          <h2 className= "text-4xl font-black text-center text-yellow-500">CRM - Clientes</h2>

          <nav className="mt-10">
              <Link 
                className={`${location.pathname === '/'? 'text-white' : 'text-yellow-500'} text-2xl block mt-2 hover:text-blue-300 `} 
                to="/">Clientes</Link>
              <Link 
                className={`${location.pathname === '/clientes/nuevo'? 'text-white' : 'text-yellow-500'} text-2xl block mt-2 hover:text-blue-300 `} 
                to="/clientes/nuevo">Nuevo Cliente</Link>
          </nav>
        </aside>

        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
          <Outlet/>
        </main>
    </div>
  )
}

export default Layout
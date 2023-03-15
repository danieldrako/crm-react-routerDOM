import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError()
    console.log(error)

    return(
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-extrabold mt-20 text-sky-600">CRM Clientes</h1>
            <h1 className="text-center text-4xl font-extrabold mt-20 text-sky-600">Algo ha salido mal</h1>
            <p className="text-center text-sky-700">{error.statusText || error.message}</p>

        </div>
    )
}
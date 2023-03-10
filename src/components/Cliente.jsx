
function Cliente({cliente}) {

    const {nombre, empresa, email, telefono, id} = cliente
    return (
        <tr>
            <td className='text-white p-6'>
                {nombre}
            </td>
            <td className='text-white p-6'>
                {empresa}
            </td>
        </tr>
    )
}

export default Cliente
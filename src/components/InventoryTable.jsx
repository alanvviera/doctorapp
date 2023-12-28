import React from 'react'

const inventoryTable = () => {
  return (
    <div className="flex items-center justify-center h-screen overflow-auto">
    <table className="w-full text-sm bg-white text-left rtl:text-right text-gray-500 shadow-md dark:text-gray-400 rounded-lg overflow-auto">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Producto
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fecha Entrada
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fecha Salida
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Uso
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Acción
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Ramipril
                        </th>
                        <td className="px-6 py-4">
                            02/05/22
                        </td>
                        <td className="px-6 py-4">
                            03/05/22
                        </td>
                        <td className="px-6 py-4">
                            Hipertension
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
                            <a href="#" className="font-medium ml-2 text-red-600 dark:text-red-500 hover:underline">Borrar</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Paracetamol
                        </th>
                        <td className="px-6 py-4">
                            04/07/22
                        </td>
                        <td className="px-6 py-4">
                            06/08/22
                        </td>
                        <td className="px-6 py-4">
                            Dolor
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
                            <a href="#" className="font-medium ml-2 text-red-600 dark:text-red-500 hover:underline">Borrar</a>
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Aspirina
                        </th>
                        <td className="px-6 py-4">
                        04/07/22
                        </td>
                        <td className="px-6 py-4">
                        06/08/22
                        </td>
                        <td className="px-6 py-4">
                            Uso general
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
                            <a href="#" className="font-medium ml-2 text-red-600 dark:text-red-500 hover:underline">Borrar</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  )
}

export default inventoryTable
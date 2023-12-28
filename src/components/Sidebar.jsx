import Link from 'next/link';
import Clock from './Clock';



function Sidebar({ menuRoutes }) {
  return (
    <div  className="w-64 bg-gray-800 text-white h-screen flex flex-col justify-between">
    <div className="p-4 m-5">
        <h1 className="text-center mb-6 text-2xl font-semibold"><Clock/></h1>
        <ol className="space-y-2">
            {menuRoutes.map((menu, key) => (
                <li key={key}>
                    <Link href={menu.ruta} className="block py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300">
                        {menu.nombre}
                    </Link>
                </li>
            ))}
        </ol>
    </div>
    {/* Puedes agregar más elementos o enlaces aquí si lo necesitas */}
    <div className="p-4 text-center">
        <Link href="/api/auth/signout" className="block text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300">
        Cerrar Sesión  
        </Link>
        <p className="text-sm">Versión 0.1.0</p>
        <p className="text-xs mt-2">&copy; 2023</p>
    </div>
</div>

  );
}

export default Sidebar;

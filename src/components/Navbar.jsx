"use client"
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar'; // Asegúrate de tener la ruta correcta

const menuRoutes = [{
  ruta: '/inventario',
  nombre: 'Inventario',
}, {
  ruta: '/pacientes',
  nombre: 'Pacientes'
},

]

function Navbar() {
  // Estado para controlar si el Sidebar está abierto o cerrado en pantallas grandes
  const [isOpen, setIsOpen] = useState(true); 

  // Estado para controlar si estamos en un dispositivo móvil o no
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Verificar el ancho de la ventana para determinar si es móvil o no
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ajusta este valor según tus necesidades
    };

    // Agregar el listener para detectar cambios en el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Llamada inicial para configurar el estado inicial
    handleResize();

    // Limpieza del listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Si es móvil, solo mostrar el botón para abrir el menú
  if (isMobile) {
    return (
      <div>
        <button onClick={toggleMenu}>
          {isOpen ? 'X' : 'X'}
        </button>
        {isOpen && <Sidebar menuRoutes={menuRoutes}  />}
      </div>
    );
  }

  // Si no es móvil (pantallas más grandes), mostrar el Sidebar directamente

    return <Sidebar menuRoutes={menuRoutes} />;
  
  
}

export default Navbar;
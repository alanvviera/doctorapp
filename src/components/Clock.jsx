"use client"
import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Actualiza la hora cada segundo
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez

  return (
    <div className='text-2xl text-white font-bold'>{time}</div>
  );
}

export default Clock;

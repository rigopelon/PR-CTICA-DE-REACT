import { useState, useEffect } from 'react';
import testimonios from './data.js';
import Testimonial from './components/Testimonial.jsx';
import Controls from './components/Controls.jsx';

export default function App() {
  // Estado del testimonio actual
  const [index, setIndex] = useState(0);

  // Estado de la reproducción automática
  const [reproduciendo, setReproduciendo] = useState(false);

  const total = testimonios.length;

  // Cambiar automáticamente cada 5 segundos
  useEffect(() => {
    if (!reproduciendo || total < 2) return;

    const intervalo = setInterval(() => {
      setIndex(actual => (actual + 1) % total);
    }, 5000);

    // Limpiar el temporizador
    return () => clearInterval(intervalo);
  }, [reproduciendo, total]);

  // Pausar reproducción al navegar manualmente
  function navegar(accion) {
    setReproduciendo(false);
    accion();
  }

  // Siguiente testimonio
  function next() {
    setIndex(actual => (actual + 1) % total);
  }

  // Testimonio anterior
  function prev() {
    setIndex(actual => (actual - 1 + total) % total);
  }

  // Testimonio aleatorio diferente al actual
  function random() {
    if (total < 2) return;

    const salto = 1 + Math.floor(Math.random() * (total - 1));

    setIndex(actual => (actual + salto) % total);
  }

  // Manejo de arreglo vacío
  if (total === 0) {
    return (
      <main className="app">
        <h1>Experiencias de nuestros usuarios</h1>
        <p>No hay testimonios disponibles.</p>
      </main>
    );
  }

  return (
    <main className="app">
      <h1>Experiencias de nuestros usuarios</h1>

      <Testimonial item={testimonios[index]} />

      <Controls
        onPrev={() => navegar(prev)}
        onNext={() => navegar(next)}
        onRandom={() => navegar(random)}
      />

      {total > 1 && (
        <button
          type="button"
          onClick={() => setReproduciendo(actual => !actual)}
        >
          {reproduciendo ? 'Pausar' : 'Reanudar'}
        </button>
      )}

      <p className="counter">
        Testimonio {index + 1} de {total}
      </p>
    </main>
  );
}

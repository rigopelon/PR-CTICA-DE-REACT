# Práctica inicial de React: Aplicación de testimonios

**Materia:** Ingeniería de Software · Unidad 3
**Periodo:** AGO–DIC 2026
**Docente:** José Guillermo Fierro Mendoza
**Fecha de entrega:** 05/11/2026

## Integrantes

| Nombre | Rol principal en la pareja |
|---|---|
| Rigoberto Rodríguez Hernández | Conductor de la etapa básica (secciones 4 a 9). Se encarga de que el programa quede guardado correctamente en el repositorio y documentado en este README y en el documento de evidencias. |
| Hugo Baruch Rivera Morales | Observador de la etapa básica: verifica que lo implementado coincida con lo planeado y que funcione correctamente, y corrige los errores que encuentre. Conductor de la ampliación con reproducción automática (sección 11). |

**Pareja revisora:** _[]_

## Etapa terminada
- [✓] Etapa básica (navegación manual: Anterior, Siguiente, Aleatorio)
- [X] Ampliación con reproducción automática (Pausar / Reanudar)

## Descripción

Aplicación web hecha con React y Vite que muestra testimonios de clientes de uno en uno. Cada tarjeta incluye fotografía, nombre, cargo y comentario, además de la posición actual (por ejemplo, "Testimonio 2 de 8"). Los testimonios y fotografías son datos ficticios de demostración.

## Versiones utilizadas

| Herramienta | Versión |
|---|---|
| Node.js | v24.22.0 |
| npm | 11.19.1 |
| React | ^19.3.1 |
| Vite | ^8.3.5 |

## Instalación y ejecución

**Requisitos:** Git y Node.js (el equipo usó Node v24.22.0 y npm 11.19.1).

```bash
# 1. Clonar el repositorio
git clone https://github.com/rigopelon/PR-CTICA-DE-REACT.git

# 2. Entrar a la carpeta del proyecto
cd PR-CTICA-DE-REACT

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

Abrir la dirección **Local** que muestra la terminal (el puerto puede variar).

### Otros comandos
 
| Comando | Resultado |
|---|---|
| `npm run build` | Genera la versión de producción en `dist` |
| `npm run preview` | Permite revisar localmente la compilación |
| `npm run lint` | Revisa el código con ESLint |

## Estructura del proyecto

```
testimonios/
├── public/
|   ├── fotos/
├── src/
│   ├── components/
│   │   ├── Testimonial.jsx   # Presenta una tarjeta (recibe item por props)
│   │   └── Controls.jsx      # Botones; avisa al padre mediante callbacks
│   ├── App.jsx               # Conserva el índice (estado) y coordina la navegación
│   ├── main.jsx              # Monta React en #root
│   ├── data.js               # Arreglo de objetos con los testimonios
│   └── styles.css            # Apariencia
├── index.html                # Contiene el elemento #root
├── package.json
├── package-lock.json
└── vite.config.js
```

## Decisiones principales

### Organización del equipo
 
- Rigoberto fue el primero en preparar el proyecto en su equipo (laptop) y comprobó cómo funcionan `npm install` y `npm run dev`.

- Rigoberto implementó la parte básica del proyecto (secciones 4 a 9), y Hugo inspeccionó el código y verificó que el proyecto básico funcionara.

- Hugo implementa la ampliación con reproducción automática, y Rigoberto prueba que funcione correctamente.

- Rigoberto creó y administra el repositorio porque ya había sido responsable del repositorio del laboratorio anterior.

- En el [documento de evidencias](./docs/Lab_U3-03_Practica_de_React.pdf) se guardaron capturas de pantalla del progreso en cada sección, las tablas de prueba y las respuestas a las preguntas del documento de la práctica.

### Decisiones técnicas
 
- **Por qué `App` guarda el estado:** El índice del testimonio visible (`index`) lo necesitan tanto la tarjeta, para saber qué mostrar, como el contador, y lo modifican los botones. Por eso lo guardamos en `App`, que es el componente padre de los tres. Así hay una sola fuente de verdad y los hijos solo reciben datos y funciones por props.

- **Por qué `Testimonial` solo presenta:** Recibe un objeto (`item`) y muestra sus campos. No sabe de dónde viene ni cuántos testimonios hay, y no modifica el arreglo. Esto permite reutilizar la tarjeta y cambiar su diseño en un solo lugar.

- **Datos separados en `data.js`:** Los testimonios están en un módulo aparte. Agregar uno es agregar un objeto con `id` único, sin tocar los componentes. El `id` identifica al registro; `index` es solo la posición actual y puede cambiar si se reordena el arreglo.

- **Cómo se comunican `Controls` y `App`:** `App` define `next`, `prev` y `random` y se las pasa a `Controls` como `onNext`, `onPrev` y `onRandom`. `Controls` no conoce el estado: solo avisa que el usuario hizo clic. Pasamos la función (`onClick={onNext}`) y no su resultado (`onNext()`), para que se ejecute al hacer clic y no durante el renderizado.

- **Cómo se calculan siguiente, anterior y aleatorio:**
  - Siguiente: `(actual + 1) % total`. El operador `%` hace que, después del último, se regrese al primero.
  - Anterior: `(actual - 1 + total) % total`. Se suma `total` para evitar un índice negativo cuando se está en el primero.
  - Aleatorio: se elige un salto entre 1 y `total - 1` y se suma al índice actual con `%`. Como el salto nunca es 0 ni `total`, el resultado siempre es distinto del actual.
  - Usamos la forma funcional `setIndex(actual => ...)` para calcular el nuevo valor a partir del estado más reciente.

- **Manejo de 0 y 1 registros:** Con cero registros, `App` muestra el mensaje "No hay testimonios disponibles." y no renderiza la tarjeta ni los controles, para no acceder a campos de un registro inexistente. Con un registro, `next` y `prev` dan siempre el mismo índice (0) y `random` termina sin hacer nada (`if (total < 2) return`).

- **Fotografías:** Usamos URLs remotas del servicio de avatares de demostración pravatar.cc, como indica la guía, para empezar rápido. Dependen de la conexión a internet y del proveedor. La carpeta `public/fotos` queda disponible para usar imágenes locales. Las imágenes se usan solo como ilustración; los nombres y testimonios son ficticios.

- **Accesibilidad:**
  - Cada imagen tiene texto alternativo (`Retrato ilustrativo de {nombre}`).
  - Los botones tienen texto visible, altura mínima de 44 px y foco visible con `:focus-visible`.
  - Son `<button type="button">`, así funcionan con Tab, Enter y Espacio.
  - El contador usa `aria-live="polite"` para anunciar el cambio de posición.
  - El diseño usa `max-width`, `flex-wrap` y `overflow-wrap: anywhere` para adaptarse a móvil y escritorio.

## Pruebas
 
El registro de pruebas P01 a P10 (resultado obtenido, estado, correcciones y evidencia) está en el [documento de evidencias](./docs/Lab_U3-03_Practica_de_React.pdf), sección 10.
 
| Resumen | Resultado |
|---|---|
| Pruebas básicas aprobadas (P01 a P10) | _[ ] / 10_ |

## Capturas de pantalla

| Ancho | Captura |
|---|---|
| ~320 px (móvil) | ![320](./capturas/320.png) |
| ~768 px (tableta) | ![768](./capturas/768.png) |
| ~1280 px (escritorio) | ![1280](./capturas/1280.png) |

## Proceso de trabajo

- **Tablero (Pendiente, En proceso, En revisión, Terminado):** _[enlace del .pdf]_
- **Cambios de roles (conductor / observador):** _[describe cuándo y cómo se alternaron]_
- **Revisión por otra pareja:** _[quién revisó, qué observaron y qué se corrigió]_

## Dificultades y aprendizajes

_[Un error que encontraste, cómo lo detectaste y cómo comprobaste la solución.]_

## Reflexión individual

_[Cada integrante puede incluir aquí o en un documento aparte: qué reutilizó y qué duplicación evitó, comparación con actualizar el DOM a mano, un costo de usar React en una app pequeña y una duda concreta.]_
- **Rigoberto Rodríguez Hernández:**


- **Hugo Baruch Rivera Morales:**


## Referencias
 
- Documentación de React: https://es.react.dev/learn
- Guía de Vite: https://vite.dev/guide/
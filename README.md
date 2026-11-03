# Práctica inicial de React: Aplicación de testimonios

**Materia:** Ingeniería de Software · Unidad 3
**Periodo:** AGO–DIC 2026
**Docente:** José Guillermo Fierro Mendoza
**Fecha de entrega:** _[dd/mm/aaaa]_

## Integrantes

| Nombre | Rol principal en la pareja |
|---|---|
| Rigoberto Rodríguez Hernández | _[conductor / observador, indicar cómo se alternaron]_ |
| Hugo Baruch Rivera Morales | _[conductor / observador]_ |

**Pareja revisora:** _[nombres de quienes revisaron los componentes y las pruebas]_

## Etapa terminada
/*✓*/
- [X] Etapa básica (navegación manual: Anterior, Siguiente, Aleatorio)
- [X] Ampliación con reproducción automática (Pausar / Reanudar)

_[Si incluiste autoplay, agrega las pruebas A01 a A07 en `REGISTRO_PRUEBAS.md` y explica `useEffect` y su limpieza en la sección "Decisiones principales".]_

## Descripción

Aplicación web hecha con React y Vite que muestra testimonios de clientes de uno en uno. Cada tarjeta incluye fotografía, nombre, cargo y comentario, además de la posición actual (por ejemplo, "Testimonio 2 de 8"). Los testimonios y fotografías son datos ficticios de demostración.

## Versiones utilizadas

| Herramienta | Versión |
|---|---|
| Node.js (`node -v`) | _[ej. v24.22.0]_ |
| npm (`npm -v`) | _[ej. 11.19.1]_ |
| React | _[ver package.json]_ |
| Vite | _[ver package.json]_ |

## Instalación y ejecución

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd testimonios

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Abrir la dirección **Local** que muestra la terminal (el puerto puede variar).

## Estructura del proyecto

```
testimonios/
├── public/
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

_[Explica con tus palabras. Ejemplos de lo que puedes cubrir:]_

- **Por qué `App` guarda el estado:** _[...]_
- **Por qué `Testimonial` solo presenta y no modifica el arreglo:** _[...]_
- **Cómo se comunican `Controls` y `App` (callbacks):** _[...]_
- **Cómo se calcula el siguiente, el anterior y el aleatorio (uso de `%`, por qué Aleatorio nunca repite el actual):** _[...]_
- **Manejo de 0 y 1 registros:** _[...]_
- **Fotografías:** _[URLs remotas o archivos locales en `public/fotos`, y por qué]_
- **Accesibilidad:** _[texto alternativo, foco visible, navegación con teclado, `lang="es"` en `index.html`]_
- **Autoplay (si aplica):** _[qué hace `useEffect`, cuáles son sus dependencias y por qué la limpieza con `clearInterval` evita intervalos acumulados]_

## Pruebas

El registro completo de pruebas está en [`REGISTRO_PRUEBAS.md`](./REGISTRO_PRUEBAS.md).

| Resumen | Cantidad |
|---|---|
| Pruebas básicas aprobadas (P01 a P10) | _[ ] / 10_ |
| Pruebas de autoplay aprobadas (A01 a A07) | _[ ] / 7 (si aplica)_ |

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


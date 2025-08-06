<div align="center">
  <img src="./assets/fewinfos-banner.png" alt="Welcome to FEWINFOS Contribution - GitHub Repository Stats Widget" width="100%">
</div>

📦 Widget de Estadísticas de Repositorios de GitHub

Una herramienta de código abierto, totalmente del lado del cliente, que visualiza estadísticas en tiempo real de repositorios de GitHub en un formato interactivo y personalizable — perfecto para desarrolladores, mantenedores de código abierto y creadores de portafolios.

🎯 Objetivo

Este widget utiliza la API REST de GitHub para obtener y mostrar diversos metadatos e información sobre cualquier repositorio público de GitHub. Funciona completamente en el navegador sin necesidad de backend o autenticación.

✨ Características

    🔄 Obtención de datos en tiempo real a través de la API REST de GitHub

    ⭐ Muestra estrellas, forks, observadores, issues y pull requests

    👥 Visualiza los principales contribuyentes con avatares y recuentos de commits

    📊 Muestra los lenguajes utilizados con gráficos interactivos

    📅 Muestra la fecha de creación del repositorio y la hora de la última actualización

    📜 Muestra información de la licencia

    🎨 Interfaz de usuario limpia, receptiva y personalizable

    💻 Funciona directamente en cualquier navegador (sin configuración de servidor)

    🧩 Fácilmente incrustable en sitios web o archivos README.md

    📈 Visualizaciones opcionales a través de Chart.js

🧱 Stack Tecnológico

    HTML – Estructura y maquetación

    CSS – Estilos y responsividad

    JavaScript – Lógica y manejo de la API

    API REST de GitHub – Fuente de datos

    Chart.js – Para renderizar gráficos y diagramas (opcional)

📊 Widgets Disponibles

🔍 Estadísticas del Repositorio

    ⭐ Contador de Estrellas / 🍴 Forks / 👁️ Observadores

    📅 Fecha de creación y última actualización del repositorio

    📜 Visualización del tipo de licencia

    📊 Uso de lenguajes (gráfico de tarta, de barras, de anillo)

    📦 Gráfico de dependencias (npm, pip, etc.)

    📈 Mapa de calor de la actividad de commits

    🕐 Tiempo promedio de fusión de PR

    🧵 Desglose del estado de los issues (Abierto / Cerrado / Fijado)

👥 Widgets de Contribuyentes

    👥 Principales contribuyentes (avatares + recuentos de commits)

    📊 Contribuciones por día de la semana

    🗺️ Mapa de ubicación de contribuyentes (datos públicos)

    ⏱️ Contribuyentes recientes (últimos 7 / 30 días)

    📈 Contribuciones a lo largo del tiempo (gráfico de área apilada)

📊 Widgets Basados en Gráficos

    📊 Gráfico de radar de la salud del repositorio (estrellas, forks, PRs, issues)

    📉 Gráfico de líneas para tendencias de crecimiento de estrellas/forks

    🍩 Gráfico de anillo para el uso de lenguajes

    📈 Gráfico de área para tendencias de issues/PRs

    📆 Mapa de calor de calendario estilo GitHub

⚙️ Widgets de DevOps y CI/CD

    🚦 Insignia de estado de CI/CD de GitHub Actions

    🧪 Insignia de cobertura de código (Codecov, Coveralls)

    🔄 Widget de la última ejecución del flujo de trabajo

    🛠️ Línea de tiempo del historial de compilaciones (visual de éxito/fallo)

📌 Widgets de Issues y PRs

    📋 Issues o discusiones fijadas

    🔍 Nube de palabras de etiquetas de issues

    📬 Rastreador de estado/ratio de fusión de PR

    📈 Indicador de sentimiento de issues (basado en palabras clave)

🧩 Widgets Misceláneos

    📌 Botón de marcar/favorito para el repositorio

    🔍 Búsqueda en línea para ingresar otros repositorios

    🧠 Resumen de commit impulsado por IA (opcional)

    🔗 Widget de repositorios relacionados

    🪄 Exportar widget como iframe / incrustación HTML

📂 Estructura del Proyecto

github-repo-stats-widget/
├── index.html         # Archivo HTML principal
├── style.css          # Estilos CSS
├── repo.js            # Lógica principal de JavaScript
├── charts.js          # Lógica de renderizado de gráficos
├── assets/            # Iconos, capturas de pantalla
├── README.md          # Este archivo de documentación
└── LICENSE            # Licencia MIT

🚀 Despliegue

Puedes desplegar este widget en GitHub Pages, o usar cualquier servicio de alojamiento estático como Netlify, Vercel o Firebase.

Desplegar a través de GitHub Pages

    Empuja tu proyecto a GitHub

    Ve a Settings → Pages

    Elige la rama: main y la carpeta: / (root)

    Tu widget estará alojado en:
    https://yourusername.github.io/github-repo-stats-widget/

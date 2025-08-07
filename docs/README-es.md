<div align="center">
  <img src="./assets/fewinfos-banner.png" alt="Bienvenido a la Contribución de FEWINFOS - Widget de Estadísticas de Repositorios de GitHub" width="100%">
</div>

# 📦 Widget de Estadísticas de Repositorios de GitHub

Una herramienta de código abierto, totalmente del lado del cliente, que visualiza estadísticas en tiempo real de repositorios de GitHub en un formato interactivo y personalizable — perfecto para desarrolladores, mantenedores de código abierto y creadores de portafolios.

---

## 🎯 Objetivo

Este widget utiliza la API REST de GitHub para obtener y mostrar diversos metadatos e información sobre cualquier repositorio público de GitHub. Funciona completamente en el navegador sin necesidad de backend o autenticación.

---

## ✨ Características

1. 🔄 Obtención de datos en tiempo real a través de la API REST de GitHub
2. ⭐ Muestra estrellas, bifurcaciones, observadores, problemas y solicitudes de extracción
3. 👥 Visualiza los principales contribuyentes con avatares y recuentos de confirmaciones
4. 📊 Muestra los lenguajes utilizados con gráficos interactivos
5. 📅 Muestra la fecha de creación del repositorio y la última hora de actualización
6. 📜 Muestra información de la licencia
7. 🎨 Interfaz de usuario limpia, receptiva y personalizable
8. 💻 Funciona directamente en cualquier navegador (no se requiere configuración del servidor)
9. 🧩 Fácil de incrustar en sitios web o archivos README.md
10. 📈 Visualizaciones opcionales a través de Chart.js

---

## 🧱 Stack Tecnológico

1. **HTML** – Estructura y maquetación
2. **CSS** – Estilos y responsividad
3. **JavaScript** – Lógica y manejo de la API
4. **API REST de GitHub** – Fuente de datos
5. **Chart.js** – Para renderizar gráficos y diagramas (opcional)

---

## 📊 Widgets Disponibles

### 🔍 Estadísticas del Repositorio

1. ⭐ Estrellas / 🍴 Bifurcaciones / 👁️ Contador de observadores
2. 📅 Fecha de creación y última actualización del repositorio
3. 📜 Visualización del tipo de licencia
4. 📊 Uso del lenguaje (gráfico circular, de barras, de anillo)
5. 📦 Gráfico de dependencias (npm, pip, etc.)
6. 📈 Mapa de calor de actividad de commits
7. 🕐 Tiempo promedio de fusión de PR
8. 🧵 Desglose del estado de los problemas (Abierto / Cerrado / Fijado)

### 👥 Widgets de Contribuyentes

1. 👥 Principales contribuyentes (avatares + recuentos de commits)
2. 📊 Contribuciones por día de la semana
3. 🗺️ Mapa de ubicación de contribuyentes (datos públicos)
4. ⏱️ Contribuyentes recientes (últimos 7 / 30 días)
5. 📈 Contribuciones a lo largo del tiempo (gráfico de área apilada)

### 📊 Widgets Basados en Gráficos

1. 📊 Gráfico de radar de la salud del repositorio (estrellas, forks, PRs, issues)
2. 📉 Gráfico de líneas para tendencias de crecimiento de estrellas/forks
3. 🍩 Gráfico de anillo para el uso de lenguajes
4. 📈 Gráfico de área para tendencias de issues/PRs
5. 📆 Mapa de calor de calendario estilo GitHub

### ⚙️ Widgets de DevOps y CI/CD

1. 🚦 Insignia de estado de CI/CD de GitHub Actions
2. 🧪 Insignia de cobertura de código (Codecov, Coveralls)
3. 🔄 Widget de la última ejecución del flujo de trabajo
4. 🛠️ Línea de tiempo del historial de compilaciones (visual de éxito/fallo)

### 📌 Widgets de Issues y PRs

1. 📋 Issues o discusiones fijadas
2. 🔍 Nube de palabras de etiquetas de issues
3. 📬 Rastreador de estado/ratio de fusión de PR
4. 📈 Indicador de sentimiento de issues (basado en palabras clave)

### 🧩 Widgets Misceláneos

1. 📌 Botón de marcar/favorito para el repositorio
2. 🔍 Búsqueda en línea para ingresar otros repositorios
3. 🧠 Resumen de commit impulsado por IA (opcional)
4. 🔗 Widget de repositorios relacionados
5. 🪄 Exportar widget como iframe / incrustación HTML

---

## 📂 Estructura del Proyecto

```
github-repo-stats-widget/
├── index.html         # Archivo HTML principal
├── style.css          # Estilos CSS
├── repo.js            # Lógica principal de JavaScript
├── charts.js          # Lógica de renderizado de gráficos
├── assets/            # Iconos, capturas de pantalla
├── README.md          # Este archivo de documentación
└── LICENSE            # Licencia MIT
```

---

## 🚀 Despliegue

Puedes desplegar este widget en **GitHub Pages**, o usar cualquier servicio de alojamiento estático como **Netlify**, **Vercel** o **Firebase**.

### Desplegar a través de GitHub Pages

1. Empuja tu proyecto a GitHub.
2. Ve a **Settings → Pages**.
3. Elige la rama: `main` y la carpeta: `/ (root)`.
4. Tu widget estará alojado en:  
   `https://yourusername.github.io/github-repo-stats-widget/`
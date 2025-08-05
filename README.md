# Proyecto Dockerizado (Frontend + Backend)
Este es un proyecto que consta de un backend (NestJS) y un frontend (React con Vite), ambos configurados para ejecutarse en contenedores Docker para un entorno de desarrollo consistente y portátil.

## Prerrequisitos

Asegúrate de tener **Docker** y **Docker Compose** instalados en tu sistema. Puedes descargarlos desde el sitio oficial de Docker

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:
```
├── backend/                  # Código fuente del backend (NestJS)
│   ├── src/
│   ├── Dockerfile.backend    # Dockerfile para el servicio del backend
│   └── ...
├── frontend/                 # Código fuente del frontend (React + Vite)
│   ├── src/
│   ├── Dockerfile.frontend   # Dockerfile para el servicio del frontend
│   └── ...
├── docker-compose.yml        # Archivo principal para orquestar ambos servicios
└── README.md
```
---

## Instrucciones para Levantar el Proyecto

Para levantar el proyecto completo, solo necesitas un comando desde la raíz del proyecto.

### 1. Construir y Ejecutar los Contenedores

Abre una terminal en la raíz del proyecto (donde se encuentra el archivo `docker-compose.yml`) y ejecuta el siguiente comando:

```bash
docker-compose up --build
```

### 2. Acceder a las Aplicaciones
Una vez que los contenedores estén en ejecución, podrás acceder a las aplicaciones desde tu navegador:

- Frontend: http://localhost:5173

- Backend (API): http://localhost:3001
# Backend - Registro de Incidentes

Este backend fue desarrollado con **NestJS**, utilizando **TypeORM** para la persistencia de datos en **SQLite**. Expone una API RESTful que permite registrar, listar y filtrar incidentes operacionales.

---

## Tecnologías utilizadas

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [SQLite](https://www.sqlite.org/)
- [Swagger](https://swagger.io/)
- [Docker](https://www.docker.com/)

---

## Instalación

1. Clona este repositorio o descomprime el `.zip`:

```bash
cd backend
npm install
npm run start
```
La API estará disponible en: http://localhost:3001

2. Endpoints disponibles:
    - `POST /incidents`: Crea un nuevo incidente
    - `GET /incidents`: Lista todos los incidentes
    Filtros opcionales:
        - `?estado=abierto`
        - `?equipo_id=tractor-01`
3. Documentación Swagger:
   - Accede a la documentación en: http://localhost:3001/api

4. Base de datos:
  - La base de datos se inicializa automáticamente en `src/db.sqlite`. 
  - No requiere instalación de servidor de base de datos adicional.

## Docker


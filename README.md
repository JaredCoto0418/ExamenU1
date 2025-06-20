
# ExamenU1

## Descripción

Este proyecto corresponde al **Examen Unidad 1** para la asignatura de Lenguajes de Programación.  
Incluye un sistema **CRUD de Roles** desarrollado en React, con una API REST simulada usando JSON Server.

---

##  Instalación y ejecución

### 1. Clona el repositorio

````
git clone https://github.com/JaredCoto0418/ExamenU1.git
cd ExamenU1
````

### 2. Instala las dependencias

```
npm install
```

### 3. Configura y ejecuta el backend simulado (JSON Server)

* Instala [json-server](https://github.com/typicode/json-server) de forma global si no lo tienes:

 
  npm install -g json-server
  ```
* Inicia el servidor de la API REST:

  
  json-server --watch db.json --port 3001
  

  (Asegúrate de que el archivo `db.json` esté en la raíz del proyecto)

### 4. Inicia la aplicación React


npm start
```

### 5. Accede desde el navegador

* [http://localhost:3000](http://localhost:3000)

---

## Funcionalidades principales

* Listado de roles en tabla
* Crear, editar y eliminar roles
* Búsqueda por nombre o descripción
* Estilos modernos y responsivos
* Persistencia mediante API simulada

---

##  Estructura principal

```
├── src/
│   ├── components/
│   │   └── RolesTable.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── db.json
├── README.md
```


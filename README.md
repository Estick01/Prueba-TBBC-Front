# Contactos Frontend

Este es el frontend de la aplicación de Contactos, desarrollado con React y TypeScript.

## Características
- CRUD de contactos.
- Autenticación con JWT.
- Búsqueda de contactos por nombre o teléfono.
- Modal para agregar y editar contactos.

## Tecnologías utilizadas
- React 19
- TypeScript
- Axios para peticiones HTTP
- React Router DOM para la navegación
- JWT Decode para manejo de tokens

## Instalación
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/Estick01/Prueba-TBBC-Front.git
   cd contactos-frontend
   ```
2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Configurar variables de entorno en `.env`:
   ```sh
   REACT_APP_API_URL=http://localhost:5000
   ```
4. Iniciar la aplicación:
   ```sh
   npm start
   ```

## Uso
- **Agregar contacto:** Hacer clic en "Add Contact" y completar el formulario.
- **Editar contacto:** Hacer clic en el botón de editar en la lista de contactos.
- **Eliminar contacto:** Hacer clic en el botón de eliminar.
- **Buscar contacto:** Ingresar un nombre o número en el buscador.

## Estructura del Proyecto
```
contactos-frontend/
│── src/
│   ├── components/  # Componentes reutilizables
│   ├── pages/       # Vistas principales
│   ├── services/    # Servicios para API
│   ├── types/       # Tipos de TypeScript
│   ├── App.tsx      # Componente principal
│── public/          # Archivos estáticos
│── package.json     # Dependencias y scripts
│── README.md        # Documentación
```

## API Backend
El frontend consume una API que proporciona las siguientes rutas:
- `GET /contacts` - Obtener todos los contactos.
- `POST /contacts` - Crear un nuevo contacto.
- `PUT /contacts/:id` - Actualizar un contacto.
- `DELETE /contacts/:id` - Eliminar un contacto.

## Autenticación
La aplicación utiliza JWT para autenticación.
- **Login:** Enviar credenciales a `POST /auth/login`.
- **Registro:** Crear usuario con `POST /auth/register`.
- **Logout:** Eliminar el token almacenado en `localStorage`.

## Despliegue
Para construir la aplicación para producción:
```sh
npm run build
```
Esto generará los archivos estáticos en la carpeta `build/`, listos para ser desplegados en un servidor.


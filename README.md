# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
Apartir del figma se a decidido que el programa esté compuesto:
Header : con los estados
Feed: listado de todos los posteos, quien tednra la api y se comunicara con los poseteos

Stories: listado con los estados de seguidores
ModalPost: Al clikear en una publicacion se ira a otra vista para mostrar todos los detalles:
Imagen ampliada.
Nombre de usuario.
Descripción o caption.
Cantidad de likes.
Comentarios simulados.
Botones de interacción.
Fecha o información adicional del posteo.

Perfil : perfil del usuario
Nombre de usuario.
Foto de perfil.
Likes.
Seguidores.
Cantidad de publicaciones.
Botón visual de editar perfil o configuración.


//Se decidio utilizar dos -- uno para recibir la ifnormacion de la API y otro para llenar las variables faltantes manualmente
Tuvimos problemas para detectar el error detras de los paramteros entre componenetes y decidimos implementar props 

//Como los formatos del id de la API y el manual son diferentes(ya que uno es un strign), se decidió hacer un combinado
Para la logica implementamos un metodo similar al tp de API de peliculas, donde se utiliza el usestate vació y al clickear en un posteo se le da el id del posteo apretado, esto lo lleva al componente post que posee la informacion detallada en base al id da la variable transferida 
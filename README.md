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
Header : con los estados, iconos y un buscador
Feed: listado de todos los posteos y se comunicara con la lsita de posteos y el poseteo seleccionado
Stories: listado con los estados de seguidores, susfotos de perfil y usernames
Posteos: formaran parte de la lista mostrada en feed con la información basica. el contenido está dentro de un botón que al apretarlo te lleva a otra vista más detallada de ese mismo psot seleccionado
Post: Al clikear en una publicacion se ira a otra vista para mostrar todos los detalles:
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

-Uso de props: los componentes se comunican con los props atravez de lo que se recibe pro pramateros y lo requerido para que es componente funcione
-Utilizamos el primer diseño de figma: https://www.figma.com/community/file/1004033523744290376

-PAra el perfil del usuario decidimos utilizar la primera foto que nos concediera la API al giual que su nombre y usuario. Pero decidmos cargar la información manualmente como su cantidad de seguidores y botones de decoración para hacerlo lo más aprecido al figma

Para la logica implementamos un metodo similar al tp de API de peliculas, donde se utiliza el usestate vació y al clickear en un posteo se le da el id del posteo apretado, esto lo lleva al componente post que posee la informacion detallada en base al id da la variable transferida 



Componentes creados y responsabilidad
app.tsx: raíz de la app, contiene dos estados(posts y posteoSeleccionado) y es el único que se comunica directamente con la api mediante axios

Header: barra superior con los estados, iconos de navegación y un buscador. contenido decorativo

Feed: si no hay ningún posteo seleccionado, muestra el listado de todos los posteos, si hay un posteo seleccionado reemplaza el listado por el componente post mostrando la vista detallada del mismo. se comunicará con la lista posteos y con el posteo seleccionado 

Stories: muestra un listado con los estados de seguidores: sus fotos de perfil y usernames. Recorre el array postapi com map para generar una story por cada publicación traída de la api. se oculta cuando hay un posteo seleccionado

Posteos: formarán parte de la lista mostrada en feed con la información básica: imagen, usuario e iconos. Todo el contenido está dentro de un botón que al apretarlo, llama a setposteoseleccionado, llevándote a otra vista más detallada de ese mismo post seleccionado 

Post: Vista detallada que se muestra al clickear en una publicación. recibe el id del posteo seleccionado y el array completo postapi. se encarga de encontrar el objeto correspondiente. Muestra: Imagen ampliada. Nombre de usuario. Descripción o caption. Cantidad de likes. Comentarios simulados. Botones de interacción. Fecha o información adicional del posteo. Y el botón back que llama a setPosteoSeleccionado(null) para volver al feed. 

Perfil : Muestra el perfil del usuario. Incluye: Nombre de usuario. Foto de perfil. Likes. Seguidores. Cantidad de publicaciones. Botón visual de editar perfil o configuración. Se oculta cuando hay un posteo seleccionado


Componenetes: Los componenetes están completamente basados en el figma.Header no cumple ninguna fucnión, Feed solo se encarga de listar posetos pero no de como se ve. En el caso de los posetos estos están dentro de un botton que contiene la información del id, eso facilita conseguir información detallada del poseto individual. App sería quien contiene todos los compoenentes y detecta si hay un poseto seleccionado para mostrar los demas componentes o no.



-Uso de props: los componentes se comunican con los props atravez de lo que se recibe por pramateros y lo requerido para que es componente funcione.
Por ejemplo, Feed recibe postAPI, posteoSeleccionado y setPosteoSeleccionado. Le pasa post y setPosteoSeleccionado a cada Posteos, y le pasa posteoSeleccionado, setPosteoSeleccionado y postAPI al componente Post.

Hooks:
 useState en App:
Guardamos el array de publicaciones traídas de la API. Empieza vacío y se llena cuando llega la respuesta.

UseEstate en App:cuando el id del posteo no vale null lo guarda y se muestra el detalle. cuando es null se muestra el feed normal

useEffect en App:
tiene el array vacío hace que el effect se ejecute una sola vez. cuando el componente se hace por primera vez





-Utilizamos el primer diseño de figma: https://www.figma.com/community/file/1004033523744290376

-PAra el perfil del usuario decidimos utilizar la primera foto que nos concediera la API al giual que su nombre y usuario. Pero decidmos cargar la información manualmente como su cantidad de seguidores y botones de decoración para hacerlo lo más aprecido al figma
Datos: foto de perfil,nombre,username,seguidores,likes,menú lateral


Como pensamos el poseto detalllado: Para la logica, implementamos un metodo similar al tp de API de peliculas, donde se utiliza el usestate vació y al clickear en un posteo se le da el id del posteo apretado, esto lo lleva al componente post que posee la informacion detallada en base al id da la variable transferida 


https://validator.w3.org/nu/?doc=https%3A%2F%2Fwww.infobae.com%2Festados-unidos%2F
correcciones: mal uso de tables y tbody
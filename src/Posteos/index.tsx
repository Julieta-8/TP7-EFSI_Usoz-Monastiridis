import type { PropsListado } from ".././types";
import type { UnsplashPhoto } from ".././types";

const Posteos = (post, posteoSeleccionado, setPosteoSeleccionado) => {

  return (

   <tbody>
 


      <td>
        @{post.user.username}
      </td>



         <button onClick={(() => setPosteoSeleccionado(post.id))}>Conocé más</button>


      <img
        src={post.urls.regular}
        alt=""
      />

      <td>
        ❤ 
      </td>

    </tbody>

  );
};
export default Posteos;

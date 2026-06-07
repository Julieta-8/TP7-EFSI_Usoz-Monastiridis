import type { PropsListado } from "../../types";
import type { UnsplashPhoto } from "../../types2";

const Posteos = (post, posteoSeleccionado, setPosteoSeleccionado) => {

  return (

    <tbody>
      onClick={() => onSelectPost(post)}
    >

      <td>
        @{post.user.username}
      </td>
         <button onClick={() => setPosteoSeleccionado(post.id))}>Conocé más</button>
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

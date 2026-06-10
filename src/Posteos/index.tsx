import type { Unsplash } from ".././types";
import type { UnsplashPhoto } from ".././types";
import type { PropsPosteos } from "../types";

const Posteos = ({ setPosteoSeleccionado, post}: PropsPosteos) => {

  return (

   <tbody>
 
 <button onClick={(() => setPosteoSeleccionado(post.id))}>
      <img
        src={post.urls.regular}
        alt={post.urls.regular}
      />
      <td>
        @{post.user.username}
      </td>
      <td>
        ❤ {post.likes}
      </td>
  </button>
    </tbody>

  );
};
export default Posteos;

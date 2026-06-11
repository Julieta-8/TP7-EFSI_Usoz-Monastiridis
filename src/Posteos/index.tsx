import type { Unsplash } from ".././types";
import type { UnsplashPhoto } from ".././types";
import type { PropsPosteos } from "../types";

const Posteos = ({ setPosteoSeleccionado, post}: PropsPosteos) => {

  return (

   <tbody className="bodyPosteos">
 
 <button onClick={(() => setPosteoSeleccionado(post.id))}>
      <img className="PosteosImg"
        src={post.urls.regular}
        alt={post.urls.regular}
      />
      <td className="UserPosteos">
        @{post.user.username}
      </td>
      <td className="LikesPosteos">
        ❤ {post.likes}
      </td>
      <img className="message"    src="" alt="" />
      <img className="Comments" src="" alt="" />
  </button>
    </tbody>

  );
};
export default Posteos;

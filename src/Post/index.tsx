import type { PropsListado } from ".././types";
import type { UnsplashPhoto } from ".././types";

const Post = (posteoSeleccionado, setPosteoSeleccionado) => {

  return (
<tbody>
      <td>
        @{post.user.username}
      </td>

      <img
        src={post.urls.regular}
        alt=""
      />

      <td>
        ❤ {post.likes}
      </td>

    </tbody>

  );
};
export default Post;
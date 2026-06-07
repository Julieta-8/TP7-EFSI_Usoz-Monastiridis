import type { PropsListado } from "../../types";
import type { UnsplashPhoto } from "../../types2";

const Post = ({post,onSelectPost}: PostProps) => {

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
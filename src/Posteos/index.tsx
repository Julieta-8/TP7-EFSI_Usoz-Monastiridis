import type { Unsplash } from ".././types";
import type { UnsplashPhoto } from ".././types";
import type { PropsPosteos } from "../types";
import './Posteos.css'
import {
  Heart,
  MessageCircle,
  Send
} from "lucide-react";


const Posteos = ({ setPosteoSeleccionado, post}: PropsPosteos) => {

  return (

   <tbody >

 <button onClick={(() => setPosteoSeleccionado(post.id))}>
     <div
  className="PostCard"
  onClick={() => setPosteoSeleccionado(post.id)}
>

  <img
    className="PosteosImg"
    src={post.urls.regular}
    alt=""
  />

  <div className="PostFooter">

    <span className="UserPosteos">
      @{post.user.username}
    </span>

    <div className="PostActions">
      <Heart className="PostIcon"/>
      <MessageCircle className="PostIcon"/>
      <Send className="PostIcon"/>
    </div>

  </div>

</div>
  </button>
    </tbody>

  );
};
export default Posteos;

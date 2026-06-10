import type { Unsplash } from ".././types";
import type { UnsplashPhoto } from ".././types";

const Posteos = ({ setPosteoSeleccionado, post}) => {

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
          <button  onClick={() => setPosteoSeleccionado(post.id)}>Conocé más</button>

      <td>
        ❤ 
      </td>

    </tbody>

  );
};
export default Posteos;

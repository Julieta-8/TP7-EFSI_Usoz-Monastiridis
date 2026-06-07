
import type { PropsListado } from "../../types";
import type { UnsplashPhoto } from "../../types";
import Post from "../Post"
const Feed = ( {posteos}: PropsListado, {posteoAPI}: UnsplashPhoto ) => {
    
     const [posteoSeleccionado, setPosteoSeleccionado] = useState(null);
    
    
    return (
           {posteoSeleccionado === null ? (
        <table>
            <thead>
                <tr>
                    <th>TRENDING</th>
              
                </tr>
            </thead>
            <tbody>
                  { posteoAPI.map((pa) => (
                    <tr>
                      <Posteos
                            posteoSeleccionado:{posteoSeleccionado}
                            setPosteoSeleccionado:{setPosteoSeleccionado}
                            post:{pa}
                      />
                    </tr>
                )
                )}
            </tbody>
        </table>): (
          <Post
         
            posteoSeleccionado={posteoSeleccionado}
            Set={setPosteoSeleccionado}
          />
        )}
    
);

}

export default Feed;

import type { Unsplash } from ".././types";
import type { UnsplashPhoto } from ".././types";
import Post from "../Post"
import Posteos from "../Posteos"
import { useState, useEffect } from 'react'



const Feed = (  posteoAPI, setPosts) => {
    
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
            setPosteoSeleccionado={setPosteoSeleccionado}
          />
        )}
    
);

}

export default Feed;
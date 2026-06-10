
import type { PropsListado } from ".././types";
import type { Listado } from ".././types";
import Post from "../Post"
import Posteos from "../Posteos"
import { useState, useEffect } from 'react'



const Feed = ({ postAPI, setPosts }: PropsListado) => {
  const [posteoSeleccionado, setPosteoSeleccionado] = useState(null);

  return (
    <>
      {posteoSeleccionado === null ? (
        <table>
          <thead>
            <tr>
              <th>TRENDING</th>
            </tr>
          </thead>

          <tbody>
            {postAPI.map((pa) => (
              <Posteos
                key={pa.id}
                setPosteoSeleccionado={setPosteoSeleccionado}
                post={pa}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <Post
          posteoSeleccionado={posteoSeleccionado}
          setPosteoSeleccionado={setPosteoSeleccionado}
        />
      )}
    </>
  );
};

export default Feed;
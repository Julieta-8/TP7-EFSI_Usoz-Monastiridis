

import Post from "../Post"
import Posteos from "../Posteos"
import { useState, useEffect } from 'react'


import type { PropsFeed } from "../types";

const Feed = ({ postAPI }: PropsFeed) => {
const [posteoSeleccionado, setPosteoSeleccionado] =
  useState<string | null>(null);
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
            {postAPI.map(pa => (
              <Posteos
               
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
         
          postAPI ={postAPI}
        />
      )}
    </>
  );
};

export default Feed;


import Post from "../Post"
import Posteos from "../Posteos"
import { useState, useEffect } from 'react'


import type { PropsFeed } from "../types";

const Feed = ({posteoSeleccionado, setPosteoSeleccionado, postAPI }: PropsFeed) => {

  return (
    <>
      {posteoSeleccionado === null ? (
        <table className="tableFeed">
          <thead className="theadFeedTitle">
            <tr>
              <th className="Trending">TRENDING</th>
            </tr>
          </thead>

          <tbody className="BodyPosteos">
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
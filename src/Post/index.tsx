
import { useEffect, useState } from "react";
import type { PropsPost, Unsplash } from "../types";
const Post = ({posteoSeleccionado, setPosteoSeleccionado, postAPI}: PropsPost) => {

 const detalle = postAPI.find(
  p => p.id === posteoSeleccionado
);
if (!detalle) {
  return <p>Post no encontrado</p>;
}
/*  [
  {


    caption:"Explorando la Patagonia",

    comments:["Hermoso lugar"],

    date:"Hace 2 horas",

    location:"Patagonia"
  }
]
*/
  return (
<tbody>
      <td>
        @{detalle.user.username}
      </td>

      <img
        src={detalle.urls.regular}
        alt=""
      />

      <td>
        ❤ {detalle.likes}
      </td>

    </tbody>

  );
};
export default Post;
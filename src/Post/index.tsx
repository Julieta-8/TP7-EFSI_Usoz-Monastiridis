import "./Post.css";
import { useEffect, useState } from "react"; import type { PropsPost, Unsplash } from "../types";
import './Post.css'
const Post = ({
  posteoSeleccionado,
  setPosteoSeleccionado,
  postAPI
}: PropsPost) => {

  const detalle = postAPI.find(
    p => p.id === posteoSeleccionado
  );

  if (!detalle) {
    return <p>Post no encontrado</p>;
  }

  return (
    <div className="PostView">

      <button
        className="BackButton"
        onClick={() => setPosteoSeleccionado(null)}
      >
        ← Back
      </button>

      <div className="PostContainer">

        <div className="PostImageSection">
          <img
            src={detalle.urls.regular}
            alt=""
            className="PostImage"
          />
        </div>

        <div className="PostInfo">

          <div className="PostHeader">

            <img
              src={detalle.urls.regular}
              alt=""
              className="ProfileMini"
            />

            <div>
              <h3 className="Username">
                {detalle.user.username}
              </h3>

              <p className="Name">
                {detalle.user.name}
              </p>
            </div>

          </div>

          <div className="PostStats">
            ❤️ {detalle.likes} Likes
          </div>

          <div className="CaptionSection">

            <span className="CaptionUser">
              @{detalle.user.username}
            </span>

            <p className="CaptionText">
              Exploring the future of robotics and immersive storytelling.
            </p>

          </div>

          <div className="CommentsSection">

            <div className="Comment">
              <span className="CommentUser">
                pixarfan
              </span>

              Amazing work!
            </div>

            <div className="Comment">
              <span className="CommentUser">
                vrdesigner
              </span>

              This looks incredible.
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Post;
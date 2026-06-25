import type { Unsplash, UnsplashPhoto } from "../types";
import type { PropsStories } from "../types";

import './Stories.css'
const Stories = ({ posteoSeleccionado, setPosteoSeleccionado, postAPI }: PropsStories) => {
  return (
    <>
      {posteoSeleccionado === null ? (
        <tbody>
          <h1 className="Stories">STORIES</h1>

          <div className="StoriesContainer">
            {postAPI.map(p => (
              <div className="StoryCard" key={p.id}>
                <img
                  className="StorieIMG"
                  src={p.urls.regular}
                  alt=""
                />

                <span className="StorieUser">
                  @{p.user.username}
                </span>
              </div>
            ))}
          </div>
        </tbody>
      ) : (<div></div>)}
    </>
  );
}

export default Stories;
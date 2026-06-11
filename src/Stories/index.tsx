import type { Unsplash, UnsplashPhoto } from "../types";
import type { PropsStories } from "../types";


const Stories = ({posteoSeleccionado, setPosteoSeleccionado,postAPI}: PropsStories) => {
    return (
        <>
         {posteoSeleccionado === null ? (
        <table className="tableStory">
                <h1 className="Stories">STORIES</h1>
            <tbody >
                { postAPI.map(p => (
                    <tr>
                        <td className="StorieUser">{ p.user.username }</td>
                            <img    className="StorieIMG" src={p.urls.regular}
        alt={p.urls.regular} />

                    </tr>
                )
                )}
                
            </tbody>
        </table>
            ):(<div></div>)}
                    </>
    );
}

export default Stories;
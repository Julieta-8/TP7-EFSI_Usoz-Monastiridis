import type { Unsplash, UnsplashPhoto } from "../types";
import type { PropsStories } from "../types";


const Stories = ({postAPI}: PropsStories) => {
    return (
        <table>
                <h1>STORIES</h1>
            <tbody>
                { postAPI.map(p => (
                    <tr>
                        <td>{ p.user.username }</td>
                        <td>{ p.urls.regular }</td>

                    </tr>
                )
                )}
                
            </tbody>
        </table>
    );
}

export default Stories;
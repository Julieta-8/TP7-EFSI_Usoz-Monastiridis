import type { Unsplash } from ".././types";
import type { UnsplashPhoto } from ".././types";
const Stories = (  {posteoAPI}: UnsplashPhoto, PosteoAPI, setPosts) => {
    return (
        <table>
                <h1>STORIES</h1>
            <tbody>
                { setPosts.map(p => (
                    <tr>
                        <td>{ p.user }</td>
                        <td>{ p.url.regular }</td>

                    </tr>
                )
                )}
                
            </tbody>
        </table>
    );
}

export default Stories;
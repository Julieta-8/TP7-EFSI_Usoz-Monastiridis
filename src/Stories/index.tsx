import type { PropsListado } from ".././types";
import type { UnsplashPhoto } from ".././types";
const Stories = ( {posteo}: PropsListado, {posteoAPI}: UnsplashPhoto) => {
    return (
        <table>
                <h1>STORIES</h1>
            <tbody>
                { posteoAPI.map(p => (
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
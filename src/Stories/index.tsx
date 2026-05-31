import type { PropsListado } from "../../types";

const Stories = ( {posts}: PropsListado ) => {
    return (
        <table>
 
            <tbody>
                { posts.map(p => (
                    <tr>
                        <td>{ p.user }</td>
                        <td>{ p.url }</td>

                    </tr>
                )
                )}
                
            </tbody>
        </table>
    );
}

export default Stories;
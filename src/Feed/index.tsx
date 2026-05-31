import type { PropsListado } from "../../types";

const ListadoPeliculas = ( {peliculas}: PropsListado ) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Director</th>
                    <th>Año</th>
                </tr>
            </thead>
            <tbody>
                { peliculas.map(p => (
                    <tr>
                        <td>{ p.nombre }</td>
                        <td>{ p.director }</td>
                        <td>{ p.anio }</td>
                    </tr>
                )
                )}
                
            </tbody>
        </table>
    );
}

export default ListadoPeliculas;
import type { PropsPerfil } from "../types";

const Perfil = ({postAPI}: PropsPerfil) => {
const perfil = postAPI[0];

if (!perfil) return <p>Cargando...</p>;
  return (
    <div>
     <img src="img" alt={perfil.urls.regular} className="Perfil"/>
      <h1>{perfil.user.name}</h1>
      <p>{perfil.user.username}</p>
        <div className="Buscador">
           
           <div>
            <img src="" alt="" />
            <h3>121K</h3>
           </div>
           <div>
            <img src="" alt="" />
            <h3>{perfil.likes}</h3>
           </div>
          
        </div>
        <div>
              <div className="SeccionSlectioned">
                    <img src="" alt="" />
                    <h3>Home</h3>
              </div>
                <div className="NotSlectioned">
                    <img src="" alt="" />
                    <h3>Explore</h3>
              </div>
                <div className="NotSlectioned">
                    <img src="" alt="" />
                    <h3>Reels</h3>
              </div>
                <div className="NotSlectioned">
                    <img src="" alt="" />
                    <h3>iGTV</h3>
              </div>
                <div className="NotSlectioned">
                    <img src="" alt="" />
                    <h3>Notification</h3>
              </div>
        </div>
       
    </div>
  );
};




export default Perfil;
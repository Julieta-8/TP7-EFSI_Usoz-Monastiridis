import type { PropsPerfil } from "../types";
import './Perfil.css'
import {
  UserRound,
  Heart,
} from "lucide-react";


import {
  House,
  Compass,
  Clapperboard,
  Monitor,
  Bell
} from "lucide-react";

const Perfil = ({posteoSeleccionado, setPosteoSeleccionado,postAPI}: PropsPerfil) => {
const perfil = postAPI[0];

if (!perfil) return <p>Cargando...</p>;
  return (
    <>
    <tbody>
    {posteoSeleccionado === null ? (
    <div className="PerfilContainer">
     <img src={perfil.urls.regular}alt={perfil.urls.regular} className="FotoPerfil"/>
      <h1 className="UserNamePerfil">{perfil.user.name}</h1>
      <p className="NamePerfil">@{perfil.user.username}</p>
    
<section>
  <div className="StatCard">
    <UserRound size={20}/>
    <h3>121K</h3>
  </div>

  <div className="StatCard">
    <Heart size={20}/>
    <h3>{perfil.likes}</h3>
  </div>
</section>

          
<div className="MenuPerfil">
              <div className="SeccionSlectioned">
<House />
                    <h3>Home</h3>
              </div>
                <div className="NotSlectioned">
                    <Compass />
                    <h3>Explore</h3>
              </div>
                <div className="NotSlectioned">
                   <Clapperboard />

                    <h3>Reels</h3>
              </div>
                <div className="NotSlectioned">
<Monitor />
                    <h3>iGTV</h3>
              </div>
                <div className="NotSlectioned">
<Bell />
                    <h3>Notification</h3>
              </div>
        </div>
       
    </div>
    ):(<div></div>)}
    </tbody>
    </>
  );
};




export default Perfil;
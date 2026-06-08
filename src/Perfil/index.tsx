import type { PropsListado } from ".././types";
import type { UnsplashPhoto } from ".././types";

const Perfil = ({posteo}: PropsListado, {posteoAPI}: UnsplashPhoto) => {

  return (
    <div>
     <img src="" alt="" className="Perfil"/>
      <h1></h1>
      <p></p>
        <div className="Buscador">
           
           <div>
            <img src="" alt="" />
            <h3></h3>
           </div>
           <div>
            <img src="" alt="" />
            <h3></h3>
           </div>
          
        </div>
        <div>
              <div className="SeccionSlectioned">
                    <img src="" alt="" />
                    <h3></h3>
              </div>
                <div className="NotSlectioned">
                    <img src="" alt="" />
                    <h3></h3>
              </div>
                <div className="NotSlectioned">
                    <img src="" alt="" />
                    <h3></h3>
              </div>
                <div className="NotSlectioned">
                    <img src="" alt="" />
                    <h3></h3>
              </div>
                <div className="NotSlectioned">
                    <img src="" alt="" />
                    <h3></h3>
              </div>
        </div>
       
    </div>
  );
};




export default Perfil;
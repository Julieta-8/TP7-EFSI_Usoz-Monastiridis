

const Perfil = ({postAPI, setPosts, posteo}) => {

  return (
    <div>
     <img src="img" alt={postAPI.urls.regular} className="Perfil"/>
      <h1>{postAPI.user.name}</h1>
      <p>{postAPI.user.username}</p>
        <div className="Buscador">
           
           <div>
            <img src="" alt="" />
            <h3>121K</h3>
           </div>
           <div>
            <img src="" alt="" />
            <h3>{postAPI.likes}</h3>
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
import './Header.css'
import {
  Search,
  Settings,
  Camera,
  Send
} from "lucide-react";
const Header = ({}) => {

  return (
    <header className="Header">
    <img
        src="/instagram-logo.png"
        className="Logo"
        alt=""
    />
<div className="Buscador">
  <Search className="Lupa" />

  <input
    className="InputBuscador"
    placeholder="Search"
  />
</div>

    <div className="HeaderIcons">
         <Settings className="Icon" />
  <Camera className="Icon" />
  <Send className="Icon" />

        <button className="NewPost">
            New Post
        </button>
    </div>
</header>
  );
};




export default Header;
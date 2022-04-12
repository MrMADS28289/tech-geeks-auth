import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Image/logo.png";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";

const Navbar = () => {
  const { pathname } = useLocation();
  const { user, handeLogout } = useFirebase();

  return (
    <nav
      style={
        pathname.includes("blog") ? { display: "none" } : { display: "flex" }
      }
    >
      <div className='logo-container'>
        <img src={Logo} alt='' />
      </div>
      <div className='link-container'>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/videos'
        >
          Videos
        </NavLink>
        {user?.uid ?
          <NavLink
            onClick={handeLogout}
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to='/'
          >
            Logout
          </NavLink>
          :
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to='/login'
          >
            Login
          </NavLink>
        }
        <span style={{ margin: '10px', color: 'goldenrod' }}>{user?.displayName}</span>
      </div>
    </nav>
  );
};

export default Navbar;

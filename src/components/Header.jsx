import { NavLink } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.png";


export default function Header() {

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img src={logo} className="main-nav-logo-image" alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

        <div>
            <NavLink class="main-nav-item" to="/sign-in.html">
                {/* TODO fix user icon not working */}
                <i className="fa fa-user-circle"></i>
            Sign In
            </NavLink>
        </div>
    </nav>
  );
}

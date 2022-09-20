import { Link } from "react-router-dom";
import logo from "../components/logo-vinted.svg";

const Header = ({ handleToken, userToken }) => {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <img src={logo} alt="logo vinted" />
        </Link>
      </div>
      <div className="header-right">
        {!userToken ? (
          <>
            <Link to="/Login">
              <button>Connexion</button>
            </Link>
            <Link to="/Signup">
              <button>S'inscrire</button>
            </Link>
          </>
        ) : (
          <button
            onClick={() => {
              handleToken();
            }}
          >
            Déconnexion
          </button>
        )}
        <div className="sale-button">
          <Link to="/publish">
            <button>Vends tes articles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

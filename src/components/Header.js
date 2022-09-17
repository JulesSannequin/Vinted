import { Link } from "react-router-dom";
import logo from "../components/logo-vinted.svg";

const Header = ({ handleToken, userToken }) => {
  return (
    <div className="header">
      <img src={logo} alt="logo vinted" />
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
      <Link to="/publish">
        <button>Vends tes articles</button>
      </Link>
    </div>
  );
};

export default Header;

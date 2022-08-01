import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <p>Logo</p>
      <Link to="/Login">
        <button>Connexion</button>
      </Link>
      <Link to="/Signup">
        <button>S'inscrire</button>
      </Link>

      <button>Déconnexion</button>
    </div>
  );
};

export default Header;

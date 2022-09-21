import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import background from "../images/background.jpeg";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchOffers = async () => {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      };
      fetchOffers();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return isLoading === true ? (
    <div>En cours de chargement </div>
  ) : (
    <div className="global-home">
      <div className="background-home">
        <div className="modal-main">
          <div className="modal-card">
            <h1>Prêts à faire du tri dans vos placards ?</h1>
            <Link to="/publish">
              <button>Commencer a vendre</button>
            </Link>
          </div>
        </div>
        <img src={background} alt="background" />
      </div>
      {data.offers.map((offer) => {
        console.log(offer.Id);
        return (
          <Link to={`/offer/${offer._id}`}>
            <div className="home-center">
              <div className="home-card">
                <h2>{offer.product_name}</h2>
                <img src={offer.product_image.secure_url} alt="cloth" />
                <p>{offer.product_price}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;

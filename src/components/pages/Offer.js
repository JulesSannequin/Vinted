import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const { offerId } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOffer = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${offerId}`
      );

      setData(response.data);
      setIsLoading(false);
    };
    fetchOffer();
  }, [offerId]);

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div className="offer-main">
      <div className="offer-left">
        <h2>{data.product_name}</h2>
        <p>{data.product_price}</p>
        <div>
          {data.product_details.map((item) => {
            const keys = Object.keys(item);

            return (
              <p>
                {keys[0]} : {item[keys[0]]}
              </p>
            );
          })}
          <Link to="/payment" state={{ data: data }}>
            Acheter
          </Link>
        </div>
      </div>

      <div className="offer-right">
        <img src={data.product_image.secure_url} alt="cloth" />
      </div>
    </div>
  );
};

export default Offer;

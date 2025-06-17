import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function BeerCard({ beer }) {

  const renderStars = (rating) => {
    let stars = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }

    return stars;
  };

  return <div>
    <h4>{beer.name}</h4>
    <p>Brewery: {beer.brewery}</p>
    <span>{renderStars(beer.rating)}</span>
  </div>
}

export default BeerCard;
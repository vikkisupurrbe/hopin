import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useState } from 'react';
import BookEdit from './BeerEdit';


function BeerCard({ beer, onDelete, onEdit }) {

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(beer.id);
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleSubmit = (id, newName, newBrewery, newRating) => {
    setShowEdit(false);
    onEdit(id, newName, newBrewery, newRating)
  }

  // Star rating
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

  let content = <div>
    <h4>{beer.name}</h4>
    <p>Brewery: {beer.brewery}</p>
    <span>{renderStars(beer.rating)}</span>
  </div>

  if (showEdit) {
    content = <BookEdit beer={beer} onSubmit={handleSubmit} />;
  }

  return (
    <div className='beer-card'>
      {content}
      <div className='actions'>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  )
}

export default BeerCard;
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useState } from 'react';
import BookEdit from './BeerEdit';
import useBeersContext from "../hooks/useBeersContext";
import Button from './Button';

function BeerCard({ beer, searchTerm }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBeerById } = useBeersContext();

  const handleDeleteClick = () => {
    deleteBeerById(beer.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

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

  // Highlight matching text
  const highlightText = (text) => {
    if (!searchTerm) return text;

    const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="bg-[#fbbf24] bg-opacity-40">
          {part}
        </span>
      ) : part
    );
  };

  let content = (
    <div>
      <h4 className="font-title font-semibold text-lg text-[#8b5e3c] mb-2">
        {highlightText(beer.name)}
      </h4>
      <p className="font-body font-medium text-sm mb-2">
        Brewery: {highlightText(beer.brewery)}
      </p>
      <span className="flex justify-center space-x-1">
        {renderStars(beer.rating)}
      </span>
    </div>
  );

  if (showEdit) {
    content = <BookEdit beer={beer} onSubmit={handleSubmit} />;
  }

  return (
    <div className="beer-card max-w-lg mx-auto border border-[#d9b99b] rounded-lg mb-4 p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
      {content}
      <div className="actions flex justify-end space-x-2 mt-4">
        <Button rounded outline warning className="font-body font-medium text-sm" onClick={handleEditClick}>
          Edit
        </Button>
        <Button rounded outline danger className="font-body font-medium text-sm" onClick={handleDeleteClick}>
          Delete
        </Button>
      </div>
    </div>
  )
}

export default BeerCard;
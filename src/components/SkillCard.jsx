// SkillCard.jsx
import React from 'react';

const SkillCard = ({ name, imageSrc, rating = 3, maxRating = 5 }) => {
  const stars = Array.from({ length: maxRating }, (_, i) =>
    i < rating ? '★' : '☆'
  );

  return (
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
      <div className="bg-white rounded-lg shadow-md p-4 text-center">
        <img
          src={imageSrc}
          alt={name}
          className="mx-auto mb-3"
          style={{ height: '60px' }}
        />
        <h5 className="text-lg font-semibold mb-2">{name}</h5>
        <div className="text-yellow-500 text-xl">
          {stars.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
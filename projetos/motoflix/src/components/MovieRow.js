import React from 'react';
import './MovieRow.css';
const MovieRow = ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        {items.results.lenght > 0 && items.results.map((item, key)=>(

        ))}
      </div>
    </div>
  );
};

export default MovieRow;

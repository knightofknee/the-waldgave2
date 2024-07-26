import React from 'react';

const FavoritesDisplay = ({ favorites }) => {

  console.log("FavoritesDisplay", favorites)
  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((list, index) => (
        <div key={index}>
          <h3>List {list.name}</h3>
          <ul>
            {list.entries.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FavoritesDisplay;

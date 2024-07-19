import React, { useState } from 'react';
import { db } from '../firebase'; // Assuming you have a firebase.js file exporting your db instance


const FavoritesForm = ({ favorites, userUid }) => {
  const [editedFavorites, setEditedFavorites] = useState(favorites);

  const handleNameChange = (index, newName) => {
    const newFavorites = [...editedFavorites];
    newFavorites[index].name = newName;
    setEditedFavorites(newFavorites);
  };

  const handleEntryChange = (favIndex, entryIndex, newEntry) => {
    const newFavorites = [...editedFavorites];
    newFavorites[favIndex].entries[entryIndex] = newEntry;
    setEditedFavorites(newFavorites);
  };

  const deleteEntry = (favIndex, entryIndex) => {
    if (editedFavorites[favIndex].entries[entryIndex] != '') {
      alert('Delete the entry first (to prevent accidents. ctrl A + delete)');
      return;
     }
    const newFavorites = [...editedFavorites];
    newFavorites[favIndex].entries.splice(entryIndex, 1);
    setEditedFavorites(newFavorites);
  };

  const deleteFavorite = (favIndex) => {
    const newFavorites = [...editedFavorites];
    newFavorites.splice(favIndex, 1);
    setEditedFavorites(newFavorites);
  };

  const handleSubmit = async () => {
    console.log('Submitting:', editedFavorites);
    try {
      await db.collection('Favorites').doc(userUid).set({ favorites: editedFavorites });
      alert('Favorites updated successfully!');
    } catch (error) {
      console.error('Error updating favorites:', error);
      alert('Failed to update favorites.');
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {editedFavorites.map((element, favIndex) => (
        <div key={element.name}>
          <input
            type="text"
            value={element.name}
            onChange={(e) => handleNameChange(favIndex, e.target.value)}
          />
          <button type="button" onClick={() => deleteFavorite(favIndex)}>Delete List</button>
          <ul>
            {element.entries.map((entry, entryIndex) => (
              <li key={entry}>
                <input
                  type="text"
                  value={entry}
                  onChange={(e) => handleEntryChange(favIndex, entryIndex, e.target.value)}
                />
                <button type="button" onClick={() => deleteEntry(favIndex, entryIndex)}>Delete Entry</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button type="button" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default FavoritesForm;

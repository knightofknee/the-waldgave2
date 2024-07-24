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
    if (editedFavorites[favIndex].entries[entryIndex] === '' || window.confirm("Are you sure you want to delete this entry?")) {
      const newFavorites = [...editedFavorites];
      newFavorites[favIndex].entries.splice(entryIndex, 1);
      setEditedFavorites(newFavorites);
    }
  };

  const deleteFavorite = (favIndex) => {
    if (window.confirm("Are you sure you want to delete this list?")) {
      const newFavorites = [...editedFavorites];
      newFavorites.splice(favIndex, 1);
      setEditedFavorites(newFavorites);
    }
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

  const addNewList = () => {
    const newList = { name: '', entries: [''] };
    setEditedFavorites([...editedFavorites, newList]);
  };

  const addNewEntry = (favIndex) => {
    const newFavorites = [...editedFavorites];
    // Assuming each entry is a string, you can modify this part based on your data structure
    if (!newFavorites[favIndex].entries) {
      newFavorites[favIndex].entries = ['']; // Initialize entries array if it doesn't exist
    } else {
      newFavorites[favIndex].entries.push(''); // Add a new empty entry
    }
    setEditedFavorites(newFavorites);
  };

  // todo add an edit button so it is readonly by default

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {editedFavorites.map((element, favIndex) => (
        <div key={element.name + favIndex}>
          <input
            type="text"
            value={element.name}
            onChange={(e) => handleNameChange(favIndex, e.target.value)}
          />
          <button
            type="button"
            onClick={() => deleteFavorite(favIndex)}
            style={{ color: 'white', backgroundColor: 'red', borderRadius: '50%' }}
          >
            X
          </button>
          <ul>
            {element.entries.map((entry, entryIndex) => (
              <li key={entry + entryIndex}>
                <input
                  type="text"
                  value={entry}
                  onChange={(e) => handleEntryChange(favIndex, entryIndex, e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => deleteEntry(favIndex, entryIndex)}
                  style={{ color: 'white', backgroundColor: 'red', borderRadius: '50%' }}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <button
          type="button"
          onClick={() => addNewEntry(favIndex)}
          style={{ marginLeft: '10px', marginBottom: '10px' }}
        >
          Add New Entry
        </button>
        </div>
      ))}
      <button
      type="button"
      onClick={addNewList}
      style={{ marginTop: '20px' }}
    >
      Add New List
    </button>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default FavoritesForm;

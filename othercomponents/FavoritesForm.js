import React, { useState } from 'react';
import { db } from '../firebase'; // Assuming you have a firebase.js file exporting your db instance

const FavoritesForm = ({ favorites, userUid }) => {
  const [editedFavorites, setEditedFavorites] = useState(favorites);

  const handleNameChange = (index, newName) => {
    const newFavorites = [...editedFavorites];
    newFavorites[index].name = newName;
    setEditedFavorites(newFavorites);
  };

  const handleEntryChange = (favIndex, entryId, newEntryValue) => {
    const newFavorites = [...editedFavorites];
    const entryIndex = newFavorites[favIndex].entries.findIndex(entry => entry.id === entryId);
    if (entryIndex !== -1) {
      // Ensure the entry is an object with a 'value' property
      newFavorites[favIndex].entries[entryIndex] = { ...newFavorites[favIndex].entries[entryIndex], value: newEntryValue };
      setEditedFavorites(newFavorites);
    }
  };

  // todo, add an undo button that records all changes to state of the list.
  const deleteEntry = (favId, entryId) => {
    const newFavorites = editedFavorites.map(fav => {
      if (fav.id === favId) {
        // Filter out the entry to delete
        return { ...fav, entries: fav.entries.filter(entry => entry.id !== entryId) };
      }
      return fav;
    });
    setEditedFavorites(newFavorites);
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
      await db.collection('Favorites').doc(userUid).set({ favorites: editedFavorites }, { merge: true });
      alert('Favorites updated successfully!');
    } catch (error) {
      console.error('Error updating favorites:', error);
      alert('Failed to update favorites.');
    }
  };

  const addNewList = () => {
    const newList = { id: generateUUID(), name: '', entries: [{ id: generateUUID(), value: '' }] };
    setEditedFavorites([...editedFavorites, newList]);
  };

  const addNewEntry = (favIndex) => {
    const newFavorites = [...editedFavorites];
  const newEntry = { id: generateUUID(), value: '' };
  if (!newFavorites[favIndex].entries) {
    newFavorites[favIndex].entries = [newEntry];
  } else {
    newFavorites[favIndex].entries.push(newEntry);
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
            {element.entries.map((entry) => (
              <li key={entry.id}>
                <input
                  type="text"
                  value={entry.value}
                  onChange={(e) => handleEntryChange(favIndex, entry.id, entry.value)}
                />
                <button
                  type="button"
                  onClick={() => deleteEntry(favIndex, entry.id)}
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

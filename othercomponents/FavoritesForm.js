import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Assuming you have a firebase.js file exporting your db instance
import generateUUID from '../utils';
import { doc, setDoc } from 'firebase/firestore';

const FavoritesForm = ({ favorites, userUid }) => {
  const [editedFavorites, setEditedFavorites] = useState(favorites);

  useEffect(() => {
    setEditedFavorites(favorites);
  }, [favorites]);

  const handleNameChange = (listId, newName) => {
    const newFavorites = editedFavorites.map(list => {
      if (list.id === listId) {
        return { ...list, name: newName };
      }
      return list;
    });
    setEditedFavorites(newFavorites);
  };

  const handleEntryChange = (listId, entryId, newEntryValue) => {
    const newFavorites = editedFavorites.map(list =>
      list.id === listId ? {
        ...list,
        entries: list.entries.map(entry =>
          entry.id === entryId ? { ...entry, value: newEntryValue } : entry
        )
      } : list
    );
    setEditedFavorites(newFavorites);
  };

  // todo, add an undo button that records all changes to state of the list.
  const deleteEntry = (listId, entryId) => {
    const newFavorites = editedFavorites.map(list => {
      if (list.id === listId) {
        // Filter out the entry to delete
        return { ...list, entries: list.entries.filter(entry => entry.id !== entryId) };
      }
      return list;
    });
    setEditedFavorites(newFavorites);
  };

  const deleteFavorite = (listId) => {
    if (window.confirm("Are you sure you want to delete this list?")) {
      const newFavorites = editedFavorites.filter(list => list.id !== listId);
      setEditedFavorites(newFavorites);
    }
  };

  const handleSubmit = async () => {
    try {
      await setDoc(doc(db, 'Favorites', userUid), { favorites: editedFavorites }, { merge: true });
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

  const addNewEntry = (listId) => {
  const newEntry = { id: generateUUID(), value: '' };
  const newFavorites = editedFavorites.map(list => {
    if (list.id === listId) {
      const updatedEntries = list.entries ? [...list.entries, newEntry] : [newEntry];
      return { ...list, entries: updatedEntries };
    }
    return list;
  });
    setEditedFavorites(newFavorites);
  };

  // todo add an edit button so it is readonly by default

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {editedFavorites.map((list) => (
        <div key={list.id}>
          <input
            type="text"
            value={list.name}
            onChange={(e) => handleNameChange(list.id, e.target.value)}
          />
          <button
            type="button"
            onClick={() => deleteFavorite(list.id)}
            style={{ color: 'white', backgroundColor: 'red', borderRadius: '50%' }}
          >
            X
          </button>
          <ul>
            {list.entries.map((entry) => (
              <li key={entry.id}>
                <input
                  type="text"
                  value={entry.value}
                  onChange={(e) => handleEntryChange(list.id, entry.id, e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => deleteEntry(list.id, entry.id)}
                  style={{ color: 'white', backgroundColor: 'red', borderRadius: '50%' }}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <button
          type="button"
          onClick={() => addNewEntry(list.id)}
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
      <button type="button" onClick={handleSubmit}>Save Your Changes</button>
    </form>
  );
};

export default FavoritesForm;

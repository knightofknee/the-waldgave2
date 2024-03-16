import EntryView from "./EntryView"
import React, { useState } from 'react';

export default function Feed () {
  const [theList, setTheList] = useState([]);

  const sort = (event) =>{

  }

  const showUnread = (event) => {

    // check for if it is hiding or getting them?
    // call to firebase here

    setTheList()

  }
  return (<div>

    <h1>Feed</h1>

    <form onChange={(event) => sort(event)}>
    <label htmlFor="sorting">Sort</label>
  <select name="sorting" id="sorting">
    <optgroup label="Date Added">
      <option value="new">Newest</option>
      <option value="old">Oldest</option>
    </optgroup>
    <optgroup label="Other">
      <option value="unread">Unread</option>
      <option value="starred">Starred</option>
    </optgroup>
  </select>
  </form>
  <form>
  <label htmlFor="showUnread">Show Unread</label>
    <input type="checkbox" id="showUnread" onChange={showUnread()}></input>
  </form>
    {theList.map(element => {
      return <EntryView key={element.id} link={element.link} name={element.name} description={element.description} />
    })}

  </div>)
}

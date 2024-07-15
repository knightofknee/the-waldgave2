import { useState } from "react";

export default function EntryView (props) {

  const markAsRead = (reverse = true) => () => {
    var entryID = props.entryID

    // firebase.update todo
    // if (reverse) {
       // ...
  //}
    // else normal mark
    //
    setTheList(!showEntry)
  }

  const [showEntry, setTheList] = useState(props.isUnread);
  const [notes, setNotes] = useState("");

  const handleNotesChange = (event) => {
    setNotes(event.target.value)

    // for auto update we hit after no typing for a few seconds. so todo here is logic for not doing it every change but still definitely doing it, and the call to update the note-user relationship with that note. These can be a separate table for each user, with just entry IDs and notes
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h2>{props.title}</h2>
    <a href={props.link}><span>{props.link}</span></a>
      <p style={{ whiteSpace: 'pre-wrap' }}>{props.body}</p>

    {/* todo add login check here. like if it is your profile, this should not show. if you are not logged in, it should not show. 3 peeps, owner, visitor logged in/out. */}
    {props.showMarkAsRead && (showEntry ? <button type="click" onClick={markAsRead()}>Mark as read</button>
    : <button type="click" onClick={markAsRead(false)}>Mark as unread</button>)}

    {/* this can be added later <div>
      <label>Notes (autosave and private)</label>
      <textarea rows={7} cols={7} value={notes} onChange={handleNotesChange}></textarea>
    </div> */}
  </div>
  )
}

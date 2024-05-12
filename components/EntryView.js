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

  return (
    <div>
      <a href={props.link}><span>{props.title}</span></a>
      <p>{props.body}</p>
      {showEntry ? <button type="click" onClick={markAsRead()}>Mark as read</button>
      : <button type="click" onClick={markAsRead(false)}>Mark as unread</button>}
    </div>
  )
}

import EntryView from "./EntryView"
import React, { useState, useEffect } from 'react';

export default function FeedComponent () {
  const [theList, setTheList] = useState([]);
  const [sortMethod, setSortMethod] = useState("date");
  const [starredOnly, setStarred] = useState(false)
  const [unreadOnly, setUnread] = useState(false)

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {


      // **** todo get posts from db
      // const data = await (
      //   await fetch(
      //     'https://google.com',
      //   )
      // ).json();

      const data = [{title: "first post: example", link: "https://waldgrave.com", body: "the waldgrave grows", date: new Date(Date.parse("2024-05-11T22:00:00.000-05:00")), isUnread: true, id: "23weeeee", starred: false},

      {title: "second post: wowoowwo", link: "https://waldgrave.com/Login", body: "the login goes", date: new Date(Date.parse("2024-05-11T22:01:00.000-05:00")), isUnread: false, id: "whatdoIDslooklike?", starred: true}]

      // set state when the data received
      setTheList(data);
    };

    dataFetch();
  }, []);

  const sortByDate = (event) =>{
    console.log("weeeeeeoeoeoeoeoe")

    if (sortMethod == "date") {
      setSortMethod("reverseDate")

      // get the list? if we dont want to pull down every post at once, we could be hitting the db again here with pagination, but not needed for mvp

      // also can store this info in session storage so they keep whatever view they were on.

      setTheList(theList.sort((a,b) => {a.date < b.date})) //?
    }
    else
    {
      setSortMethod("date")
      setTheList(theList.sort((a,b) => {a.date > b.date}))
    }
  }

  const showUnread = (event) => {
    // call to firebase here

    setUnread(!unreadOnly)
  }
  const showStarred = (event) => {
    setStarred(!starredOnly)
  }

  const displayList = theList.filter(x => !unreadOnly || x.isUnread).filter(x => !starredOnly || x.starred).map(element => {
    return <EntryView key={element.id} entryID={element.id} link={element.link} title={element.title} body={element.body} isUnread={element.isUnread} />
  });

  //you can star posts and people to follow in a focused group. you control your content
  return (<div>

    <h1>Feed</h1>

  <div>
    <span onClick={sortByDate}>Date</span>
    <span onClick={showUnread}>Unread</span>
    <span onClick={showStarred}>Starred</span>
  </div>
    {displayList}
  </div>)
}

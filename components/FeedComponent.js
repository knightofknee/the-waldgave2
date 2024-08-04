import EntryView from "./EntryView"
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { getDocs, query, collection, where, doc, getDoc } from 'firebase/firestore';

// todo add ability to minimize posts. and store that in session storage

// todo show number of updates to starred posts. as in if a post is added that is connected to the starred post, it pops up.

  const EntryViewItem = React.memo(({ element }) => (
    <div key={element.id} style={{ border: '1px solid black', padding: '10px', margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <EntryView entryID={element.id} link={element.link} title={element.title} body={element.content} isUnread={element.isUnread} author={element.author} authorName={element.authorName} />
      <br/>
    </div>
  ));

export default function FeedComponent () {
  const [theList, setTheList] = useState([]);
  const [sortMethod, setSortMethod] = useState("date");
  const [starredOnly, setStarred] = useState(false)
  const [unreadOnly, setUnread] = useState(false)
  const [includePublic, setIncludePublic] = useState(() => {
    const saved = localStorage.getItem("includePublic");
    return saved === "true" ? true : false;
  });

  useEffect(() => {
    localStorage.setItem("includePublic", includePublic);
  }, [includePublic]);

  useEffect(() => {
    const dataFetch = async () => {
      const userUid = auth.currentUser.uid;

      let friendsPosts = [];
      let publicPosts = [];

      const friendsDocRef = doc(db, 'Friends', userUid);
      const friendsDocSnap = await getDoc(friendsDocRef);

      if (friendsDocSnap.exists() && friendsDocSnap.data().friends.length > 0) {
        const friends = friendsDocSnap.data().friends;
        const friendsPostsPromises = friends.map(friend => {
          const q = query(collection(db, 'Posts'), where('author', '==', friend.uid));
          return getDocs(q);
        });
        const friendsPostsSnapshots = await Promise.all(friendsPostsPromises);
        const friendsPosts = friendsPostsSnapshots.map(snapshot => {
          // Assuming you want to extract all document data into an array
          return snapshot.docs.map(doc => doc.data());
        }).flat();

      setTheList(friendsPosts.sort((a, b) => b.timestamp - a.timestamp));
      if (friendsPosts.length > 0) {
        const footer = document.querySelector('footer');
        if (footer) {
        footer.style.position = 'relative';
        footer.style.bottom = 'initial';
        }
      }
      }
    };

    dataFetch();
  }, []);

  const togglePublicPosts = () => {
    setIncludePublic(!includePublic);
  };

  const sortByDate = (event) =>{
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

const displayList = theList
  .filter(x => !unreadOnly || x.isUnread)
  .filter(x => !starredOnly || x.starred)
  .map(element => <EntryViewItem key={element.title} element={element} />);

  //you can star posts and people to follow in a focused group. you control your content
  return (<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

    <h1>Feed</h1>

  {/* todo make it so that the buttons look like they have been pressed, arrows up/down or somthin */}
  <div>
    <span onClick={sortByDate} style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>Date</span>
    <span onClick={showUnread} style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>Unread</span>
    <span onClick={showStarred} style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>Starred</span>
    {/* <span onClick={togglePublicPosts} style={{ border: '1px solid black', padding: '10px', margin: '5px', width: '82px', display: 'inline-block', textAlign: 'center' }}>
          {includePublic ? "Hide Public" : "Show Public"}
        </span> */}
  </div>
    {displayList.length > 0 && <div style={{minHeight: '400px'}}>{displayList}</div>}
    {displayList.length == 0 && <p style={{height: '400px', margin: 0, display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}>No posts to show</p>}
  </div>)
}

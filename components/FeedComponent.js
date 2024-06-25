import EntryView from "./EntryView"
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { getDocs, query, collection, where, doc, getDoc } from 'firebase/firestore';

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
        const friendUids = friendsDocSnap.data().friends;
        const friendsPostsPromises = friendUids.map(friendUid => {
          const q = query(collection(db, 'Posts'), where('uid', '==', friendUid));
          return getDocs(q);
        });
        const friendsPostsSnapshots = await Promise.all(friendsPostsPromises);
        friendsPosts = friendsPostsSnapshots.flatMap(snapshot =>
          snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        );
      }

      if (includePublic) {
        try {
          console.log("Fetching public posts...");
          const publicPostsQuery = query(collection(db, 'Posts'), where('public', '==', true));
          const publicPostsSnapshot = await getDocs(publicPostsQuery);
          publicPosts = publicPostsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          console.log("Fetched public posts:", publicPosts);
        } catch (error) {
          console.error("Error fetching public posts:", error);
        }
      }

      const allPosts = [...friendsPosts, ...publicPosts];
      const uniquePosts = Array.from(new Map(allPosts.map(post => [post.id, post])).values());

      setTheList(uniquePosts);
    };

    dataFetch();
  }, [includePublic]);

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
  .map(element => (
    <div key={element.id} style={{ border: '1px solid black', padding: '10px', margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <EntryView entryID={element.id} link={element.link} title={element.title} body={element.body} isUnread={element.isUnread} />
      <br/>
    </div>
  ));

  //you can star posts and people to follow in a focused group. you control your content
  return (<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

    <h1>Feed</h1>

  <div>
    <span onClick={sortByDate} style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>Date</span>
    <span onClick={showUnread} style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>Unread</span>
    <span onClick={showStarred} style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>Starred</span>
    <span onClick={togglePublicPosts} style={{ border: '1px solid black', padding: '10px', margin: '5px', width: '82px', display: 'inline-block', textAlign: 'center' }}>
          {includePublic ? "Hide Public" : "Show Public"}
        </span>
  </div>
    {displayList}
  </div>)
}

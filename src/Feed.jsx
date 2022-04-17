import React, { useEffect, useState } from "react";
import "./Feed.css";
import { db, collection, orderBy, query, onSnapshot } from "./firebase";
import Post from "./Post";
import Tweetbox from "./Tweetbox";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        });
        setPosts(posts);
      }
    );
    return () => getPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <Tweetbox />
      <FlipMove>
        {posts.map(
          ({
            id,
            data: {
              displayName,
              username,
              verified,
              text,
              avatar,
              image,
              timestamp,
            },
          }) => (
            <Post
              key={id}
              displayName={displayName}
              username={username}
              verified={verified}
              text={text}
              avatar={avatar}
              image={image}
              timestamp={timestamp}
            />
          )
        )}
      </FlipMove>
    </div>
  );
}

export default Feed;

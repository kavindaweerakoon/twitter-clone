import React, { useState } from "react";
import "./Tweetbox.css";
import { Button, Avatar } from "@mui/material";
import { db, collection, query, addDoc } from "./firebase";
import { serverTimestamp } from "firebase/firestore";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  var ref = collection(db, "posts/");

  const sendTweet = (e) => {
    e.preventDefault();
    addDoc(ref, {
      displayName: "Kavinda W",
      username: "kavinda_w",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://lh3.googleusercontent.com/a-/AOh14Gixr6KiAUOZWifKr29JcdcRxzoEAwpIaSU7sY-0=s288-p-rw-no",
      timestamp: serverTimestamp(),
    });
    setTweetImage("");
    setTweetMessage("");

  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1225105869/profile_normal.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default Tweetbox;

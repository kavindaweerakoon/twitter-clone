import React from "react";
import "./Tweetbox.css";
import { Button, Avatar } from "@mui/material";

function Tweetbox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1225105869/profile_normal.jpg" />
          <input placeholder="What's happening?" type="text" />          
        </div>
        <input className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text" />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default Tweetbox;

import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import {
  ChatBubbleOutline,
  ChatBubbleOutlineOutlined,
  FavoriteBorder,
  Publish,
  Repeat,
} from "@mui/icons-material";

function Post({ displayName, username, verified, text, image, avatar, timestamp }) {
  
  const dateObject = new Date(timestamp*1000).toLocaleString( "en-US", {
    month: "short",
    day: "numeric",
  })

  
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {verified && <VerifiedIcon className="post__badge" />} @
                {username} • {dateObject}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">{text}</div>
        </div>
        <img src={image} alt="" />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;

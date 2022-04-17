import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import { ChatBubbleOutline, ChatBubbleOutlineOutlined, FavoriteBorder, Publish, Repeat } from "@mui/icons-material";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/1225105869/profile_normal.jpg " />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Kavinda W{" "}
              <span className="post__headerSpecial">
                <VerifiedIcon className="post__badge" />
                @kavinda_w
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            "Hey Jeff can I get a raise? My family is starving."
          </div>
        </div>
        <img src="https://media1.giphy.com/media/Qc4i40SWi42rK/giphy.gif?cid=790b7611d1d705e2c8372b65bdb2ebcc0377065701e2eb73&rid=giphy.gif&ct=g" alt=""/>
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

import React from 'react'
import "./Widgets.css"
import {
    TwitterTimeEmbed,
    TwitterTweetEmbed,
    TwitterShareButton,
    TwitterTimelineEmbed
} from 'react-twitter-embed';
import { Search } from '@mui/icons-material';


function Widgets() {
  return (
      <div className="widgets">
          <div className="widgets__input">
              <Search className='widgets__searchIcon'/>
              <input placeholder="Search Twitter" type="text"/>
          </div>
            <div className="widgets__widgetsContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"20"} />
                <TwitterTimelineEmbed
                    sourceType="profile"    
                    screenName="jack"
                    options={{height: 400}}
                />
                <TwitterShareButton 
                    url={"https://twitter.com/jack/status/20"}
                    options={{text: "Hello World", via: "jack"}}
                />
            </div>
      </div>
  )
}

export default Widgets
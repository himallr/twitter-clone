import { Search } from '@mui/icons-material'
import { height } from '@mui/system'
import React, { useEffect,useState } from 'react'
import { TwitterTweetEmbed,TwitterShareButton,TwitterTimelineEmbed } from 'react-twitter-embed'
import './Widgets.css'

function Widgets() {
  const [tweetId,setId] = useState("");
  return (
    <div className='widgets'>
    <div className='wigetSearch'>
      <Search/>
      <input className='wigetSearch' placeholder='Search Twitter'/>
    </div>
    <div className='widgetContainer'>
      <h2>What's Happneing</h2>
      <TwitterTweetEmbed tweetId='1646036517088018432'/>
      <TwitterTimelineEmbed 
        sourceType="profile"
        screenName="Himal08559549"
        options={{height:400}}
      />
      <TwitterShareButton 
        url={'https://www.instagram.com/_10_himal_10_/'}
        options={{text: "Haaland is awesome",via:"Himal08559549"}}
      />
    </div>
    </div>
  )
}

export default Widgets
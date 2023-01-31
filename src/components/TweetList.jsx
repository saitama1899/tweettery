import React, { useState, useEffect } from "react"
import axios from "axios"

const TweetList = () => {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    axios
      .get("https://api.twitter.com/1.1/statuses/user_timeline.json", {
        params: {
          screen_name: "twitter_handle",
          count: 30,
          // API credentials
          consumer_key: "your_consumer_key",
          consumer_secret: "your_consumer_secret",
          access_token_key: "your_access_token_key",
          access_token_secret: "your_access_token_secret"
        }
      })
      .then(response => {
        setTweets(response.data);
      })
      .catch(error => {
        console.error(error);
      })
  }, [])

  return (
    <ul>
      {tweets.map(tweet => (
        <li key={tweet.id}>{tweet.text}</li>
      ))}
    </ul>
  )
}

export default TweetList
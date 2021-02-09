import React from 'react';
import reply from './assets/reply-thin.svg';
import retweet from './assets/retweet-thin.svg';
import like from './assets/like-thin.svg';

import Icon from './assets/fire-talk-icon.png';
import TwitterLogo from './assets/twitter-logo.png';

function Tweet({ tweet, user, text, url }) {
    /*const [tweetText, setTweetText] = useState(text)*/
    const replyURL = "https://twitter.com/intent/tweet?in_reply_to=TWEET_ID" + "1358867620183740416";
    const retweetURL = "https://twitter.com/intent/retweet?tweet_id=TWEET_ID" + "1358867620183740416";
    const likeURL = "https://twitter.com/intent/like?tweet_id=TWEET_ID" + "1358867620183740416";
    return (
        <div className="articleCard">
            <div className="twitter-header">
                <img src={Icon} className="avatar"/>
                <div className="twitter-bio">
                    <h6 className="articleTitle">Author Name</h6>
                    <p className="username">@{user}</p>
                </div>
            </div>
            
            <img src={TwitterLogo} className="twitter-logo"/>
            <p>{text}</p>
            {/*<p>{JSON.stringify(tweet)}</p>*/}
            <div className="actions">
                <a href={replyURL}><img src={reply} className="action"/></a> 
                <a href={retweetURL}><img src={retweet} className="action"/></a>
                <a href={likeURL}><img src={like} className="action"/></a>
            </div>
            <p className="timestamp">22 Jan 2021</p>
            {/*<a href={"https://" + url} target="_blank" rel="noopener noreferrer" className="readMoreText"><button className="seeTweetButton">See Tweet</button></a>*/}
        </div>
    );
}

export default Tweet;

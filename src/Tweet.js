import React from 'react';
import reply from './assets/reply-thin.svg';
import retweet from './assets/retweet-thin.svg';
import like from './assets/like-thin.svg';

import TwitterLogo from './assets/twitter-logo.png';
 

function Tweet({ user, name, pic, date, text, id, url }) {

    /*formateDate(date) {
        var year = date[0:4];
    }*/
    /*const [tweetText, setTweetText] = useState(text)*/
    const replyURL = "https://twitter.com/intent/tweet?in_reply_to=" + id; //"1358867620183740416";
    const retweetURL = "https://twitter.com/intent/retweet?tweet_id=" + id; //"1358867620183740416";
    const likeURL = "https://twitter.com/intent/like?tweet_id=" + id; // "1358867620183740416";
    return (
        <a className="twitter-card" href={"https://" + url} target="_blank" rel="noopener noreferrer">
        <div className="articleCard" id="pointer">
            <div className="twitter-header">
                <img src={pic} className="avatar" alt="avatar"/>
                <div className="twitter-bio">
                    <h6 className="articleTitle">{name}</h6>
                    <p className="username">@{user}</p>
                </div>
            </div>
            
            <img src={TwitterLogo} className="twitter-logo" alt="twitter logo"/>
            <p>{text}</p>
            {/*<p>{JSON.stringify(tweet)}</p>*/}
            <div className="actions">
                <a href={replyURL} target="_blank" rel="noopener noreferrer"><img alt="reply" src={reply} className="action"/></a> 
                <a href={retweetURL} target="_blank" rel="noopener noreferrer"><img alt="retweet" src={retweet} className="action"/></a>
                <a href={likeURL} target="_blank" rel="noopener noreferrer"><img alt="like" src={like} className="action"/></a>
            </div>
            <p className="timestamp">{date}</p>
            {/*<a href={"https://" + url} target="_blank" rel="noopener noreferrer" className="readMoreText"><button className="seeTweetButton">See Tweet</button></a>*/}
        </div>
        </a>
    );
}

export default Tweet;

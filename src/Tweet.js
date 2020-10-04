import React from 'react';

function Tweet({ user, text, url }) {
    /*const [tweetText, setTweetText] = useState(text)*/
    return (
        <div className="articleCard">
            <h6 className="articleTitle">{user}</h6>
            <p>{text}</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="readMoreText"><button className="seeTweetButton">See Tweet</button></a>
        </div>
    );
}

export default Tweet;
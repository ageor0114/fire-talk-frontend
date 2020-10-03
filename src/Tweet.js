import React from 'react';

function Tweet({ text, url }) {
    /*const [tweetText, setTweetText] = useState(text)*/
    return (
        <div className="articleCard">
            <p>{text}</p>
            <a target="_blank" rel="noopener noreferrer" className="readMoreText" href={url}><button className="seeTweetButton">See Tweet</button></a>
        </div>
    );
}

export default Tweet;
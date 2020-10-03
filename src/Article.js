import React from 'react';

function Article({ title, blurb, url }) {
    /*const [titleText, setTitle] = useState(title)
    const [blurbText, setBlurb] = useState(blurb)*/
    return (
        <div className="articleCard">
            <h6 className="articleTitle">{title}</h6>
            <p>{blurb}</p>
            <a target="_blank" rel="noopener noreferrer" className="readMoreText" href={url}><button className="readMoreButton">Read More</button></a>
        </div>
    );
}

export default Article;
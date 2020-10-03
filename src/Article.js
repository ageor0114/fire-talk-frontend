import React, { useState } from 'react';

function Article({ title, blurb }) {
    const [titleText, setTitle] = useState(title)
    const [blurbText, setBlurb] = useState(blurb)
    return (
        <div className="articleCard">
            <h6 className="articleTitle">{titleText}</h6>
            <p>{blurb}</p>
            <button className="readMoreButton">Read More</button>
        </div>
    );
}

export default Article;
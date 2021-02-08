import React from 'react';

function Map({ data }) {
    /*const [tweetText, setTweetText] = useState(text)*/
    let mainAQI = data[0][0][1][0]['AQI'];
    let mainLevel = data[0][0][1][0]['Level'];
    var nearCities = data[0].slice(1);
    /*console.log("NEAR CITIES:");
    console.log(nearCities);*/

    return (
        <div className="mapOuter">
            <div className="mapSection">
                <h2>Fires Near You</h2>
                <img alt="map" className="map" src="https://www.vmcdn.ca/f/files/mahoningmatters/images/mahoningmatters/firerecoverybbmap.jpg;w=960;h=640;bgcolor=000000"/>
           </div>
        </div>
    );
}

export default Map;
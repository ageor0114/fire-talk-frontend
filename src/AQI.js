import React from 'react';

function AQI({ data }) {
    /*const [tweetText, setTweetText] = useState(text)*/
    let mainAQI = data[0][0][1][0]['AQI'];
    let mainLevel = data[0][0][1][0]['Level'];
    var nearCities = data[0].slice(1);
    console.log("NEAR CITIES:");
    console.log(nearCities);
    console.log("M AQI: " + mainAQI);
    console.log("M Level: " + mainLevel);

    return (
        <div className="aqiOuter">
            <div className="aqiSection">
                <h2>AQI: {mainAQI} - {mainLevel}</h2>
                {/*<h2>AQI: {data[0][0][1][0]['AQI']} - {data[0][0][1][0]['Level']}</h2>*/}
                <div className="aqiNearby">
                <h4>Nearby Cities</h4>

                {nearCities.map((city, index) => (
                    <p>▶ {city[0]}: {city[1][0]['AQI']} - {city[1][0]['Level']}</p>
                ))}

                </div>
           </div>
        </div>
    );
}

export default AQI;
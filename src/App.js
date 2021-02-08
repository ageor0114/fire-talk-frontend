import React, { useState } from 'react';
import './App.css';
import flame from './assets/fire-talk-flame.svg';
import loading from './assets/linear-t.gif';
import Article from './Article';
import Tweet from './Tweet';
import AQI from './AQI';
import Map from './Map';
         

//Styles
import 'rsuite/dist/styles/rsuite-default.css'; 
/*const styles = {
  marginBottom: 10,

  maxWidth: 500
};*/


//onKeyPress={(value) => updateCity(value)}

function App() {

  //==========================
  //   STATE
  //==========================

  //API Data
  const [city, setCity] = useState("");
  const [articleInfo, setArticleInfo] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [aqi, setAQI] = useState()
  const [showArticles, setShowArticles] = useState(false);
  const [showTweets, setShowTweets] = useState(false);
  const [showAQI, setShowAQI] = useState(false);

  //Incremental Loading
  const [showLoading, setLoading] = useState(false);
  const [articleIndex, setArticleIndex] = useState(0); //5
  const [tweetIndex, setTweetIndex] = useState(0);
  const [showLoadArticles, setShowLoadArticles] = useState(true);
  const [showLoadTweets, setShowLoadTweets] = useState(true);

  //==========================
  //   FUNCTIONS
  //==========================

  //Handle Input Change (Update City)
  function handleInputChange(event){
    setCity(event.target.value);
  }

  //Handle Key Down
  function handleKeyDown(e){
    if (e.key === 'Enter') {
      console.log('City Submitted');
      submitCity();
    }
  }

  /*function updateCity(cityX){
    console.log("poop: " + cityX);
    setCity(cityX);
  }*/

  //Update Articles
  function updateArticles(){
    setShowLoadArticles(false);
    console.log("Providing Next Three Tweets Starting From Index " + articleIndex);

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://firetalk.herokuapp.com/api/moreInfo?n=3";
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(data => {
        console.log(Object.values(data));
        setArticleInfo(articleInfo + Object.values(data));

        //Inside Fetch, Make Button Visible AS LONG AS articleIndex <= 
        if (articleIndex < 3){
          setShowLoadArticles(true);
        }
        //Inside Fetch, Update Article Index
        setArticleIndex(articleIndex + 1);
        console.log("Successfully Loaded 3 New Articles");
      });
      
  }

  //Update Tweets
  function updateTweets(){
    setShowLoadTweets(false);
    console.log("Providing Next Three Tweets Starting From Index " + tweetIndex);

    //Fetch Tweets
      //Inside Fetch, Make Button Visible AS LONG AS tweetIndex <= 
      if (tweetIndex < 3){
        setShowLoadTweets(true);
      }
      //Inside Fetch, Update Tweet Index
      setTweetIndex(tweetIndex + 1)
  }

  //Submit City
  function submitCity(){
    console.log("City: " + city);
    var cityX = city.replace(" ","+");
    //var n = "4"

    //Generate API URL's
    //Uncomment ProxyURL and add to fetches if native CORS fails in the future
    //const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var articlesUrl = "https://firetalk.herokuapp.com/api/info?city=" + cityX + "&n=4";
    var tweetsUrl = "https://firetalk.herokuapp.com/api/tweets?city=" + cityX + "&n=10";
    var aqiUrl = "https://firetalk.herokuapp.com/api/nearCities?city=" + cityX + "&n=3";

    //SHOW LOADING GIF
    setLoading(true);
    //HIDE DATA
    setShowArticles(false);
    setShowTweets(false);
    setShowAQI(false);

    //Fetch AQI
    fetch(aqiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(Object.values(data));
        setAQI(Object.values(data));

        //HIDE LOADING GIF
        setLoading(false);
        setShowAQI(true);
        console.log("Successfully Queried AQI");
      });

    //Fetch Articles
    fetch(articlesUrl)
      .then(response => response.json())
      .then(data => {
        setArticleInfo(Object.values(data));

        //HIDE LOADING GIF
        setLoading(false);
        setShowArticles(true);
        console.log("Successfully Queried Articles");
      }, (error) => {
        if (error) {
          console.log("Failed to Request 4 Articles From Heroku");
          let newArticlesUrl = "https://firetalk.herokuapp.com/api/info?city=" + cityX + "&n=3";
          fetch(newArticlesUrl)
          .then(response => response.json())
          .then(data => {
            setArticleInfo(Object.values(data));

            //HIDE LOADING GIF
            setLoading(false);
            setShowArticles(true);
            console.log("Successfully Queried Articles Now");
          }, (error) => {
            if (error) {
              console.log("Failed To Request 3 Articles Heroku");
              let newestArticlesUrl = "https://firetalk.herokuapp.com/api/info?city=" + cityX + "&n=2";
              fetch(newestArticlesUrl)
              .then(response => response.json())
              .then(data => {
                setArticleInfo(Object.values(data));

                //HIDE LOADING GIF
                setLoading(false);
                setShowArticles(true);
                console.log("Successfully Queried Articles Now");
            });
            }
          });
        }
      });
        
      
      //Fetch Tweets
      fetch(tweetsUrl)
      .then(response => response.json())
      .then(data => {
        console.log(Object.values(data));
        setTweets(Object.values(data));

        //HIDE LOADING GIF
        setLoading(false);
        setShowTweets(true);
        console.log("Successfully Queried Tweets");
      });
  }


  /*useEffect(() => {
    console.log("Used Effect");
    // code to run on component mount
  }, [])*/

  //==========================
  //   RENDER
  //==========================
  return (
    <div className="App">
        <div className="container">
        <center className="landingTitle">
          <h1 className="appTitle">fire talk</h1>
          <p className="about">
          when disaster strikes, you don't have time to sift through information. <strong>fire talk</strong> provides on the ground updates from local news stations and neighbors in your community. <strong>enter your city</strong> to get the latest or <strong>report a fire</strong> to keep others in the know. stay informed and stay safe. ❤️
          </p>

          <img className="fire" alt="fire" src={flame}/>
          <div className="divider">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0 0V46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5C438.64 32.43 512.34 53.67 583 72.05c69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
          </div>
          <div className="dividerMargin"/>

        </center>

        <div className="landingBody">
          <center>

            {/*NEW SEARCH*/}
            <div className="inputOuter">
            <input className="inputField"
                   placeholder="Enter your city ..."
                   type="text"
                   value={city}
                   onChange={handleInputChange}
                   onKeyDown={handleKeyDown}/>
            <button onClick={() => submitCity()} className="inputButton"><center><img alt="search" className="inputIcon" src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg"/></center></button>
            </div>

            <button className="loadMoreButton">Report A Fire</button>


            {/*<h3>{city}</h3>*/}

            {/*Insert Classes: flexGrid & col*/}
            <div>
              {/*AQI*/}
              {/*showAQI && !showLoading && <AQI data={aqi}/>*/}

              {/*Top Flex Container*/}
              <div className="flexContainer">
                <div className="flexBox">
                  {/*Inline AQI*/}
                  {showAQI && !showLoading && <AQI data={aqi}/>}
                </div>
                <div className="flexBox">
                  {/*Inline Map*/}
                  {showAQI && !showLoading && <Map data={aqi}/>}
                </div> 
              </div>

              {/*Bottom Flex Container*/}
              <div className="flexContainer">
              <div className="flexBox">

                

                {/*Tweets*/}
                {showTweets && !showLoading && <h3>Tweets</h3>}   
                {showTweets && !showLoading && tweets.map((tweet, index) => (
                  <Tweet user={tweet.user} text={tweet.text} url={tweet.src}/>
                ))}
                {showTweets && !showLoading && showLoadTweets && <button onClick={() => updateTweets()} className="loadMoreButton">Load More</button>}
              </div>
              
              {/*Articles*/}
              <div className="flexBox">
                {showArticles && !showLoading && <h3>Articles</h3>}
                {showArticles && !showLoading && articleInfo.map((article,index)=> (
                  <Article key={index} title={article.title} blurb={article.paragraph} url={article.url}/>
                ))}
                {showArticles && !showLoading && showLoadArticles && <button onClick={() => updateArticles()} className="loadMoreButton">Load More</button>}
              </div>
              </div>
            </div>

            {(showLoading || (!showLoading && ((showArticles && !showTweets)||(showTweets && !showArticles)))) && <img alt="loading" className="loading" src={loading}/>}

            
          </center>
        </div>
        </div>
        
        {/* Footer */}
        <div className="footer">
          <p>a monkey production by <a className="link" href="https://linkedIn.com/in/austinzg" target="_blank" rel="noopener noreferrer">Austin George</a>, <a className="link" href="https://www.linkedin.com/in/neel-roy-802b72182" target="_blank" rel="noopener noreferrer">Neel Roy</a>, & <a className="link" href="https://linkedin.com/in/josiah-adrineda-2250481a6" target="_blank" rel="noopener noreferrer">Josiah Adrineda</a>.</p>
        </div>
    </div>
  );
}

export default App;

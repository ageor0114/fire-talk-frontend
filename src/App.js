import React, { useState, useEffect } from 'react';
import './App.css';
import { Button,
         InputGroup,
         Input,
         Icon } from 'rsuite';
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import flame from './assets/fire-talk-flame.svg';
import Article from './Article';
         

//Styles
import 'rsuite/dist/styles/rsuite-default.css'; 
const styles = {
  marginBottom: 10,
  width: 500
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "600px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));
function submitCity(){
  console.log("HEY");
}

const CustomInputGroupWidthButton = ({ placeholder, ...props }) => (
  <InputGroup {...props} inside style={styles}>
    <Input onKeyPress={() => submitCity()}placeholder={placeholder} />
    <InputGroup.Button onClick={() => submitCity()}>
      <Icon icon="search" />
    </InputGroup.Button>
  </InputGroup>
);


function App() {
  useEffect(() => {
    console.log("yipee");
    var city = "Thousand+Oaks"
    var n = "1"
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = "https://firetalk.herokuapp.com/api/articles?city=" + city + "&n=" + n;
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(data => {
        console.log("hi");
        console.log(data);
        console.log("hi2");
        console.log(data[0]);
        console.log("data3");
      });
    // code to run on component mount
  }, [])

  const classes = useStyles();
  let title2 = "Preparing furry friends for fire season | Thousand Oaks Acorn";
  let blurb2 = 'The society has assisted in the safe evacuation and relocation of animals displaced by wildfires, which erupt regularly across the region and have hit close to home.';
  let title = "Power outage in Thousand Oaks leaves more than 6,400 Edison customers without electricity";
  let blurb = "A Southern California Edison power outage temporarily left more than 6,400 customers in Thousand Oaks without electricity Tuesday, a company spokeswoman said.";

  //const [showArticles, setShowArticles] = useState(0);

  

  /*fetch(url, {
    method: 'GET',
  })*/
  return (
    <div className="App">
        <div className="landingTitle">
          <h1>Fire Talk</h1>
          {/*<img className="fire" src="https://www.flaticon.com/svg/static/icons/svg/3238/3238399.svg"/>*/}
          <img className="fire" src={flame}/>
          {/*<img className="fire" src="https://www.flaticon.com/svg/static/icons/svg/2873/2873014.svg"/>*/}
          <div className="divider">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0 0V46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5C438.64 32.43 512.34 53.67 583 72.05c69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>
        {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF4757" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,85.3C384,75,480,85,576,106.7C672,128,768,160,864,192C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>*/}
        
        

        <div className="landingBody">
          <br/>
          <center>
          <p className="about">
          When disaster strikes, you don't have time to sift through information. Fire Talk provides on the ground updates from neighbors like you. <strong>Enter your city</strong> to get the latest from local news outlets and fellow community members.
          </p>
          <br/>
          </center>
          <br/>
          <br/>
          <center>
            <div className="search">
            <CustomInputGroupWidthButton size="lg" placeholder="Enter your city" />
            </div>
            <h3>Articles</h3>
            <Article title={title2} blurb={blurb2}/>
            <Article title={title} blurb={blurb}/>
            <Article title="foo" blurb="bar"/>
          <div className={classes.root}>
            <h2>Map</h2>
            <p>Here's an overview of fires rising across the nation</p>
            <img className="map" src="https://upload.wikimedia.org/wikipedia/commons/2/26/COVID-19_Outbreak_World_Map.svg"/>
            <br/>
            <br/>
            <h2> Articles</h2>
            <br/>
          <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
              <h6>‘Crazy, unbreathable’ air forces Southern Californians indoors, clogging daily routines</h6>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordian">
            The unprecedented wreckage left by seemingly endless eruptions up and down the Golden State is creating horrific air quality, according to residents, forcing them to find options to release stress, count their steps and exercise.
            </p>
          </AccordionDetails>
          </Accordion>
          <br/>
          <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
              <h6>Power outage in Thousand Oaks leaves more than 6,400 Edison customers without electricity</h6>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordian">
            A Southern California Edison power outage temporarily left more than 6,400 customers in Thousand Oaks without electricity Tuesday, a company spokeswoman said.
            </p>
          </AccordionDetails>
          </Accordion>
          <br/>
          <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
              <h6>Garage fire in Thousand Oaks spreads to attic, RV</h6>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordian">
            A garage fire in Thousand Oaks late Friday afternoon sent a plume of black smoke skyward as it spread to an attic and RV on the property, authorities said.

The blaze was reported shortly before 4:45 p.m. in the 300 block of Pepperwood Court, the Ventura County Fire Department reported. The block is on the west side of Moorpark Road, south of Olsen Road.
            </p>
          </AccordionDetails>
          </Accordion>
          <br/>
          </div>
          </center>
        </div>
    </div>
  );
}

export default App;

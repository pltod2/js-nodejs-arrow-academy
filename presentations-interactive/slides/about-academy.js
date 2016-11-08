// Import React
import React from "react";
var code = require("../assets/identifiers");


// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  corporatebg: require("../assets/corporate_bg.png"),
  trainingOverview: require("../assets/training_outline.png"),
  kidding: require("../assets/kidding.png"),
  what: require("../assets/what.jpg"),
  really: require("../assets/really.jpg"),
  envstack: require("../assets/envstack.png"),
  appc: require("../assets/appctitanium.jpg"),
  appcax: require("../assets/appcax.png"),
  acad: require("../assets/acad.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#212121",
  myGreen: "#4CAF50",
  fileNameColor: "#1976D2",
  pingAudience: "#FFE082",
  cY: "#FFEB3B",
  cA: "#FFC107",
  cO: "#FF9800",
  cDO: "#FF5722",
  lime: "#CDDC39",
  red: "#B71C1C"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

            <Slide transition={["slide"]} bgImage={images.corporatebg.replace("/", "")}>
                <Layout>
                    <Fill></Fill>
                    <Fill>
                        <Text textSize="1.9em" margin="20px 0px 0px" textColor="pingAudience" bold>Axway Academy</Text>
                        <Heading size={6} caps textColor="white" margin={10}>
                            Learn.
                        </Heading>
                        <Heading size={6} caps textColor="white" margin={10}>
                            Code Strong.
                        </Heading>
                        <Heading size={6} caps textColor="white" margin={10}>
                            Get Hired.
                        </Heading>
                        <Text textSize="0.8em" margin="70px 0px 0px" textColor="white" bold>26.10.2016</Text>
                        <Text textSize="0.8em" margin="10px 0px 0px" textColor="white" bold>ptodorov@axway.com</Text>
                  </Fill>
                </Layout>
            </Slide>

            <Slide transition={["spin", "zoom"]} bgColor="red">
                <Markdown>
                    {`![Markdown Logo](${images.appc.replace("/", "")})`}
                </Markdown>
                <Heading size={6} caps textColor="pingAudience" margin={10}>
                    Appcelerator, Anyone?
                </Heading>                            
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgColor="red">
                <Text textColor="pingAudience" textSize="1.5em" margin="20px 0px 0px" bold>Mobile Application Types</Text>
                <Heading size={2} caps textColor="white" margin={10}>
                    Web Apps, Hybrid Apps or Native Apps
                </Heading>
            </Slide>

            <Slide transition={["zoom"]}  bgColor="red">
              <BlockQuote>
                <Quote textColor="white">
                    When you write a Titanium application, you are writing a native application in JavaScript. 
                </Quote>
                <Cite>Appcelerator Blog</Cite>
              </BlockQuote>
            </Slide>

            <Slide transition={["fade"]} bgColor="red">
                <Heading size={5} caps textColor="white" margin={10}>
                    Appcelerator Ecosystem. In Addition to Titanium...
                </Heading>
                <List textColor="white">
                    <Appear><ListItem>Alloy - MVC Framework</ListItem></Appear>
                    <Appear><ListItem>Arrow/ArrowDB - BaaS</ListItem></Appear>
                    <Appear><ListItem>CLI - Cloud Enabled App With Single Command</ListItem></Appear>
                    <Appear><ListItem>Connectors - Facade To Third Party APIs/Services</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["fade"]} bgColor="red">
                <Heading size={2} caps textColor="white" margin={10}>
                    Why We Talk About Appcelerator On The First Place?
                </Heading>
            </Slide>

            <Slide transition={["spin", "zoom"]} bgColor="red">
                <Markdown>
                    {`![Markdown Logo](${images.appcax.replace("/", "")})`}
                </Markdown>
                <Heading size={6} caps textColor="pingAudience" margin={10}>
                    Yes! Appcelerator products are now developed in Sofia.
                </Heading>                            
            </Slide>

            <Slide transition={["fade"]} bgColor="red">
                <Heading size={2} caps textColor="white" margin={10}>
                    Why This Is Cool?
                </Heading>
            </Slide>

            <Slide transition={["fade"]} bgColor="red">
                <Heading size={2} caps textColor="white" margin={10}>
                    1. Work on large Node.js product - Arrow Platform
                </Heading>
                <Heading size={6} caps textColor="pingAudience" margin={10}>
                    Express / MongoDB / Docker / REST APIs / Microservices
                </Heading>
            </Slide>

            <Slide transition={["fade"]} bgColor="red">
                <Heading size={2} caps textColor="white" margin={10}>
                    2. Use Arrow Platform to develop other SAAS products
                </Heading>
                <Heading size={6} caps textColor="pingAudience" margin={10}>
                    ES6 / TypeScript / React / Webpack / NPM
                </Heading>
            </Slide>

            <Slide transition={["fade"]} bgColor="red">
                <Heading size={2} caps textColor="white" margin={10}>
                    3. Many of your daily coding is open sourced in github
                </Heading>
            </Slide>

            <Slide transition={["fade"]} bgColor="red">
                <Heading size={2} caps textColor="white" margin={10}>
                    How You Can Be Part Of This?
                </Heading>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.acad.replace("/", "")} bgDarken={0.50}>
                <Heading size={2} caps textColor="white" margin={10}>
                    Lets speak after this presentation!
                </Heading>
            </Slide>

            <Slide transition={["fade"]} bgColor="red">
                <Heading size={5} caps textColor="white" margin={10}>
                    How it works?
                </Heading>
                <List textColor="white">
                    <Appear><ListItem>12 Lectures / 3 Hours Each</ListItem></Appear>
                    <Appear><ListItem>Lecture = Theory + Coding</ListItem></Appear>
                    <Appear><ListItem>Homeworks and Final Project</ListItem></Appear>
                    <Appear><ListItem>Your Code Will Be in Github</ListItem></Appear>
                    <Appear><ListItem>If You Progress Well You Could Get a Job Offer</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["spin", "zoom"]} bgColor="tertiary">
                <Markdown>
                    {`![Markdown Logo](${images.trainingOverview.replace("/", "")})`}
                </Markdown>            
            </Slide>

            <Slide transition={["fade"]} bgColor="red">
                <Heading size={2} caps textColor="white" margin={10}>
                    Now You Say - Nice But Why JavaScript?
                </Heading>
            </Slide>

            <Slide transition={["zoom"]} bgImage={images.kidding.replace("/", "")}></Slide>
            
            <Slide transition={["zoom"]} bgImage={images.really.replace("/", "")}></Slide>
            
            <Slide transition={["zoom"]} bgImage={images.what.replace("/", "")}></Slide>

            <Slide transition={["fade"]} bgColor="red">
                <Heading size={5} caps textColor="white" margin={10}>
                    In Case You Have Missed It
                </Heading>
                <List textColor="white">
                    <Appear><ListItem>From Web Sites to Web Applications</ListItem></Appear>
                    <Appear><ListItem>From Web Applications to Mobile Applications</ListItem></Appear>
                    <Appear><ListItem>From Mobile Applications to Cross Platform Mobile Applications</ListItem></Appear>
                    <Appear><ListItem>From Cross Platform Mobile Application to Cross Platform Desktop Applications</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["fade"]} bgColor="red">
                <Heading size={5} caps textColor="white" margin={10}>
                    In Case You Have Missed It
                </Heading>
                <List textColor="white">
                    <Appear><ListItem>JavaScript Is The Most Popular Language In Github</ListItem></Appear>
                    <Appear><ListItem>There Are More Than 100 Languages That Compile To JavaScript</ListItem></Appear>
                    <Appear><ListItem>With JavaScript You Can Reuse Your Skills Across All Layers And Platforms</ListItem></Appear>
                    <Appear><ListItem>With JavaScript You Can Develop All - Web, Mobile, and Desktop Applications</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["fade"]} bgColor="red">
                <Heading size={5} caps textColor="white" margin={10}>
                    In Case You Have Missed It
                </Heading>
                <List textColor="white">
                    <Appear><ListItem>JavaScript is REAL programming language - Standard Move Fast from 5 to 6/7</ListItem></Appear>
                    <Appear><ListItem>Node.js Ecosystem -> fastly moved from 0.10 to 6</ListItem></Appear>
                    <Appear><ListItem>With JavaScript You Will Better Understand Front End MVC - HTML5, Angular, React, Backbone</ListItem></Appear>
                    <Appear><ListItem>Google, Microsoft, Facebook, Uber, Twitter, Netflix, IBM - all are using JavaScript intensively</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["slide"]} bgImage={images.corporatebg.replace("/", "")}>
                <Layout>
                    <Fill></Fill>
                    <Fill>
                        <Heading size={4} caps textColor="pingAudience">
                            Come Join Us At Axway To Work On Challenging JavaScript/Node.js Projects!
                        </Heading>
                        <Text textSize="0.6em" margin="30px 0px 0px" textColor="white" bold>ptodorov@axway.com</Text>
                  </Fill>
                </Layout>
            </Slide>

        </Deck>
      </Spectacle>
    );
  }
}

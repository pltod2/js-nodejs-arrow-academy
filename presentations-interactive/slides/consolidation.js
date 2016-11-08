// Import React
import React from "react";


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
  components_packaging_delivering: require("../assets/components_packaging_delivering.png"),
  training_outline: require("../assets/training_outline.png"),
  alman: require("../assets/alman.jpg"),
  crockford: require("../assets/crockford.jpg")
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
  lime: "#CDDC39"
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
                        <Heading size={1} caps textColor="white" margin={10}>
                            Training
                        </Heading>
                        <Heading size={6} caps textColor="white" margin={10}>
                            JavaScript
                        </Heading>
                        <Heading size={6} caps textColor="white" margin={10}>
                            NodeJS
                        </Heading>
                        <Heading size={6} caps textColor="white" margin={10}>
                            Arrow
                        </Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>CONSOLIDATION</Text>
                        <Text textSize="0.8em" margin="70px 0px 0px" textColor="white" bold>05.10.2016</Text>
                        <Text textSize="0.8em" margin="10px 0px 0px" textColor="white" bold>ptodorov@axway.com</Text>
                  </Fill>
                </Layout>
            </Slide>

            <Slide transition={["fade"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                  <Heading size={2} caps textColor="lime" margin={10}>
                      What we can do with Node.js and JavaScript?
                  </Heading>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="white" margin={10}>
                    PRETTY MUCH EVERYTHING... 
                </Heading>
                <List>
                    <Appear><ListItem>IDE -> Visual Studio Code, Atom</ListItem></Appear>
                    <Appear><ListItem>HTTP Servers -> especially good in serving APIs</ListItem></Appear>
                    <Appear><ListItem>Databases -> in-memory db (lokijs) / mongo shell (JavaScript interface to MongoDB)</ListItem></Appear>
                    <Appear><ListItem>Realtime Apps -> via WebSockets</ListItem></Appear>
                    <Appear><ListItem>...and even you can emulate your Terminal</ListItem></Appear>                    
                </List>
            </Slide>

            <Slide transition={["fade"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={6} caps textColor="white" margin={10}>
                    DO YOU REMEMBER HTML5 HYPE?
                </Heading>
                <Heading size={2} caps textColor="lime" margin={10}>
                    <Appear><Text textSize='72px' textColor="lime">HTML is JavaScript!</Text></Appear>
                    <Appear><Text textColor="white">http://html5index.org/</Text></Appear>                    
                </Heading>
            </Slide>

            <Slide transition={["fade"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={6} caps textColor="white" margin={10}>
                    WHY DO WE LEARN FRONT END IN NODE COURSE?
                </Heading>
                <Heading size={2} caps textColor="lime" margin={10}>
                    <Appear><Text textSize='72px' textColor="lime">We are full stack engineers!</Text></Appear>
                    <Appear><Text textColor="white">JavaScript is all about full stack.</Text></Appear>                    
                </Heading>
            </Slide>

            <Slide transition={["fade"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                  <Heading size={2} caps textColor="lime" margin={10}>
                      How is it possible to use the same piece of code across the whole stack and all platforms?
                  </Heading>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="lime" margin={10}>
                    NOTE 1. ECMAScript Specification  
                </Heading>
                http://www.ecma-international.org/publications/standards/Ecma-262.htm
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="lime" margin={10}>
                    NOTE 2. ECMAScript Technical Commitee  
                </Heading>
                https://github.com/tc39
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="lime" margin={10}>
                    NOTE 3. ECMAScript Implementations  
                </Heading>
                JavaScript FTW!
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="lime" margin={10}>
                    NOTE 4. JavaScript Core Concepts  
                </Heading>
                <Appear><ListItem textColor="white">Scope Chain</ListItem></Appear>
                <Appear><ListItem textColor="white">Prototype Chain</ListItem></Appear>                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="lime" margin={10}>
                    NOTE 5. JavaScript Compiled Languages (INTERNAL MECHANISMS vs. SUGAR) 
                </Heading>
                <Appear><ListItem textSize='40px' textColor="white">CoffeScript / DART / TypeScript</ListItem></Appear>
                <Appear><ListItem textColor="white">More than 100 languages - https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-js</ListItem></Appear>
                <Appear><ListItem textSize='40px' textColor="white">ES6 kills all except those that give you Type System</ListItem></Appear>
                <Appear><ListItem textSize='40px' textColor="white">(Wisely Used) TypeScript FTW!</ListItem></Appear>                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="lime" margin={10}>
                    NOTE 6. RENDERING ENGINE vs. JAVASCRIPT ENGINE 
                </Heading>
                <Appear><ListItem textSize='40px' textColor="white">RENDERING ENGINE DEALS WITH DOM AND CSSOM</ListItem></Appear>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="lime" margin={10}>
                    NOTE 7. APPLICATION = BACKEND LOGIC + UI 
                </Heading>
                <Appear><ListItem textColor="white">WEB APP = BE -> NODE (V8) + UI -> BROWSER (V8)</ListItem></Appear>
                <Appear><ListItem textColor="white">DESKTOP APP = ELECTRON/NODE-WEBKIT (NODE + CHROMIUM)</ListItem></Appear>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="lime" margin={10}>
                    NOTE 8. ELECTRON IN BRIEF 
                </Heading>
                <Appear><ListItem textColor="white">V8 to intepret JavaScript</ListItem></Appear>
                <Appear><ListItem textColor="white">Rendering Engine to interpret the UI (LAYOUT / DOM / CSSOM)</ListItem></Appear>
                <Appear><ListItem textColor="white">Node.js Stuff to access the platform specific stuff - FS / Processes etc.</ListItem></Appear>
            </Slide>

           <Slide transition={["spin", "zoom"]} bgColor="tertiary">
                <Markdown>
                    {`![Markdown Logo](${images.components_packaging_delivering.replace("/", "")})`}
                </Markdown>            
           </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="lime" margin={10}>
                    NOTE 9: ASYNCHRONOUS MODEL (EVENT LOOP AND CONTROL FLOW) 
                </Heading>
                <Appear><ListItem textColor="white">EVENT LOOP -> MANAGE EXECUTION STACK</ListItem></Appear>
                <Appear><ListItem textColor="white">CONTROL FLOW -> CALLBACKS / PROMISES / GENERATORS / STREAMS</ListItem></Appear>                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="lime" margin={10}>
                    NOTE 10: STREAMS ALL THE WAY DOWN 
                </Heading>
                <Appear><ListItem textColor="white">http://highlandjs.org/</ListItem></Appear>
            </Slide>

            <Slide transition={["slide"]} bgImage={images.corporatebg.replace("/", "")}>
                <Layout>
                    <Fill></Fill>
                    <Fill>
                        <Heading size={2} caps textColor="white">
                            Thank You!
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
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
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Lecture 3</Text>
                        <Text textSize="1.5em" margin="10px 0px 0px" bold>Modules</Text>
                        <Text textSize="0.8em" margin="70px 0px 0px" textColor="white" bold>07.11.2016</Text>
                        <Text textSize="0.8em" margin="10px 0px 0px" textColor="white" bold>ptodorov@axway.com</Text>
                  </Fill>
                </Layout>
            </Slide>

            <Slide transition={["fade"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                  <Heading size={2} caps textColor="cA" margin={10}>
                      What happens when we change inherited property via the child object?
                  </Heading>
            </Slide>

            <Slide transition={["fade"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                  <Heading size={1} caps textColor="cA" margin={10}>
                      JavaScript primitives are immutable!
                  </Heading>
            </Slide>

            <Slide transition={["fade"]} bgImage={images.training_outline.replace("/", "")}>
            </Slide>

            <Slide transition={["fade"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                  <Heading size={1} caps textColor="lime" margin={10}>
                      MIXINS - WHY WE NEED TO KNOW THE INTERNALS
                  </Heading>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="white" margin={10}>
                    INTERNAL MECHANISMS (IM) vs. SUGAR 
                </Heading>
                <List>
                    <Appear><ListItem>IM - Scope Chain && Prototype Chain</ListItem></Appear>
                    <Appear><ListItem>SUGAR - ES6 Syntax and Compiled Languages</ListItem></Appear>
                    <Appear><ListItem>https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-js</ListItem></Appear>                    
                </List>
            </Slide>

           <Slide transition={["spin", "zoom"]} bgColor="tertiary">
                <Markdown>
                    {`![Markdown Logo](${images.components_packaging_delivering.replace("/", "")})`}
                </Markdown>            
            </Slide>

           <Slide transition={["spin", "zoom"]}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    The Cowboy
                </Heading>           
                <Markdown>
                    {`![Markdown Logo](${images.alman.replace("/", "")})`}
                </Markdown>            
            </Slide>

            <Slide transition={["fade"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                  <Heading size={1} caps textColor="lime" margin={10}>
                      IIFE
                  </Heading>
            </Slide>

           <Slide transition={["spin", "zoom"]}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    Crockford
                </Heading>
                <Markdown>
                    {`![Markdown Logo](${images.crockford.replace("/", "")})`}
                </Markdown>            
            </Slide>

            <Slide transition={["fade"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                  <Heading size={1} caps textColor="lime" margin={10}>
                      MODULE
                  </Heading>
            </Slide>

            <Slide transition={["fade"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                  <Heading size={1} caps textColor="lime" margin={10}>
                      NODE MODULES (CommonJS)
                  </Heading>
            </Slide>

            <Slide transition={["fade"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                  <Heading size={1} caps textColor="lime" margin={10}>
                      Universal Module Definition (UMD)
                  </Heading>
            </Slide>

            <Slide transition={["fade"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                  <Heading size={1} caps textColor="lime" margin={10}>
                      ES6 MODULES
                  </Heading>
            </Slide>

            <Slide transition={["fade"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="lime" margin={10}>
                      IIFE -> MODULE -> COMMONJS / AMD -> UMD -> ES6 MODULES
                </Heading>
            </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
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

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  corporatebg: require("../assets/corporate_bg.png"),
  trainingOverview: require("../assets/training_outline.png"),
  kidding: require("../assets/kidding.png"),
  what: require("../assets/what.jpg"),
  really: require("../assets/really.jpg"),
  envstack: require("../assets/envstack.png")
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
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Lecture 1</Text>
                        <Text textSize="1.5em" margin="10px 0px 0px" bold>JavaScript Core Concepts</Text>
                        <Text textSize="0.8em" margin="70px 0px 0px" textColor="white" bold>31.10.2016</Text>
                        <Text textSize="0.8em" margin="10px 0px 0px" textColor="white" bold>ptodorov@axway.com</Text>
                  </Fill>
                </Layout>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="white" margin={10}>
                    Before we start...
                </Heading>
                <List>
                    <Appear><ListItem>Welcome!</ListItem></Appear>
                    <Appear><ListItem>JavaScript Definition.</ListItem></Appear>
                    <Appear><ListItem>Why We End Up Writing JavaScript?</ListItem></Appear>
                    <Appear><ListItem>Disclaimer</ListItem></Appear>
                    <Appear><ListItem>Training Overview</ListItem></Appear>
                    <Appear><ListItem>Lecture Format</ListItem></Appear>
                    <Appear><ListItem>Environment Setup</ListItem></Appear>
                    <Appear><ListItem>Start...</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
              <BlockQuote>
                <Quote textColor="white">JavaScript is
                  <Text textSize="72px" textColor="cA">1) untyped</Text>
                  <Text textSize="72px" textColor="cDO">2) interpreted</Text>
                  <Text textSize="72px" textColor="cO">3) dynamic</Text>
                  <Text textSize="72px" textColor="cY">4) multi-pardigm</Text>
                  programming language standardized by ECMAScript specification.
                </Quote>
                <Cite>Wikipedia</Cite>
              </BlockQuote>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="white" margin={10}>
                    Why we all end up writing JavaScript?
                </Heading>
                <Appear fid="1">
                    <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>Because Our Previous Experience With Java/XXX</Text>
                </Appear>
                <Appear fid="1">
                    <Text textColor="myGreen" textSize="0.8em" margin="20px 0px 0px" bold>(this is mostly personal experience)</Text>
                </Appear>
                <List>
                    <Appear><ListItem>Java did NOT force me to do the things the right way</ListItem></Appear>
                    <Appear><ListItem>Java forces me to use OOP paradigm</ListItem></Appear>
                    <Appear><ListItem>Java Web Frameworks does not feel right in the context of SPA (especially component-based like JSF)</ListItem></Appear>
                    <Appear><ListItem>Java feels like too high abstraction which moves you away from DevOps activities (we are not close to the metal)</ListItem></Appear>
                    <Appear><ListItem>There is no such thing like full-stack developer with Java (this is a problem when you work on the full-stack)</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
              <Text bold textColor="white">Pitch JavaScript - Attempt Number 1 (year 2011)</Text>
              <Link href="http://pltod.github.io/blog/c1WhyJS.html#/" margin={100}>
                <Text bold caps textColor="pingAudience">Why Spend Time on JavaScript?</Text>
              </Link>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="white" margin={10}>
                    Why we all end up writing JavaScript?
                </Heading>
                <Appear fid="1">
                    <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>Because of the Paradigm Shift in App Development</Text>
                </Appear>
                <Appear fid="1">
                    <Text textColor="myGreen" textSize="0.8em" margin="20px 0px 0px" bold>(Devreach Conference, Sofia 2012)</Text>
                </Appear>
                <List>
                    <Appear><ListItem>From Web Sites to Web Applications</ListItem></Appear>
                    <Appear><ListItem>From Web Applications to Mobile Applications</ListItem></Appear>
                    <Appear><ListItem>From Mobile Applications to Cross Platform Mobile Applications (Titanium!)</ListItem></Appear>
                    <Appear><ListItem>From Cross Platform Mobile Application to Cross Platform Desktop Applications</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
              <Text bold textColor="white">Pitch JavaScript - Attempt Number 2 (year 2012)</Text>
              <Link href="http://pltod.github.io/blog/appTypes.html#/" margin={100}>
                <Text bold caps textColor="pingAudience">JAVASCRIPT APPLICATIONS</Text>
              </Link>
            </Slide>

            <Slide transition={["zoom"]} bgImage={images.kidding.replace("/", "")}></Slide>
            <Slide transition={["zoom"]} bgImage={images.really.replace("/", "")}></Slide>
            <Slide transition={["zoom"]} bgImage={images.what.replace("/", "")}></Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="white" margin={10}>
                    Why we all end up writing JavaScript?
                </Heading>
                <Appear fid="1">
                    <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>Because JavaScript has a Business Case</Text>
                </Appear>
                <List>
                    <Appear><ListItem>Large Pool of Developers (web devs)</ListItem></Appear>
                    <Appear><ListItem>Skill Reuse Across Layers (server-side with Node.js)</ListItem></Appear>
                    <Appear><ListItem>Skill Reuse Across Platforms (cross platform compilation e.g. Titanium)</ListItem></Appear>
                    <Appear><ListItem bold textColor="cA">Bottom Line: Less Costs / Faster Time to Market</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="white" margin={10}>
                    Why we all end up writing JavaScript?
                </Heading>
                <Appear fid="1">
                    <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>Because of the JavaScript Explosion</Text>
                </Appear>
                <List>
                    <Appear><ListItem>The End of Browser Wars</ListItem></Appear>
                    <Appear><ListItem>Tons of FE Frameworks</ListItem></Appear>
                    <Appear><ListItem>Tons of Languages that Compiles to JavaScript</ListItem></Appear>
                    <Appear><ListItem bold textColor="myGreen">Code Reuse Across the Server and the Client -> UNLOCKED! (Isomorphic/Universal Apps)</ListItem></Appear>
                    <Appear><ListItem bold textColor="myGreen">Cross Platform Mobile/Desktop Applications -> UNLOCKED! (Hyperloop!)</ListItem></Appear>
                    <Appear><ListItem>Serverless Architectures where SPA FE Work Directly with Cloud Datasources</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="white" margin={10}>
                    Why we all end up writing JavaScript?
                </Heading>
                <Appear fid="1">
                    <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>Because JavaScript IS REAL Programming Language</Text>
                </Appear>
                <List>
                    <Appear><ListItem>The Standard -> fastly moved from version 3 to 6/7 turning JS into full-blown language</ListItem></Appear>
                    <Appear><ListItem>Node.JS Ecosystem -> fastly moved from 0.10 to 6</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["spin", "zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                  <Heading size={3} textColor="white">
                    Disclaimer
                  </Heading>
                  <BlockQuote>
                    <Quote textColor="white" textSize="1.5em">JavaScript/NodeJS is one very good option for I/O heavy business applications as Golang is good system language for cloud infrastructures.</Quote>
                  </BlockQuote>
            </Slide>

            <Slide transition={["spin", "zoom"]} bgColor="tertiary">
                <Markdown>
                    {`![Markdown Logo](${images.trainingOverview.replace("/", "")})`}
                </Markdown>            
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="white" margin={10}>
                    Lecture Format
                </Heading>
                <Appear fid="1">
                    <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>(C)reate / (R)ead / (U)pdate / (D)elete</Text>
                </Appear>                
                <List>
                    <Appear fid="1"><ListItem>Applications => Use them to manage data (loaded in-memory)</ListItem></Appear>
                    <Appear fid="2"><ListItem>Applications => Create them with Programming Languages</ListItem></Appear>
                    <Appear fid="3"><ListItem>Programming Language => Manage in-memory data</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="white" margin={10}>
                    Lecture Format
                </Heading>
                <Appear fid="1">
                    <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>Recipe / Code Examples / Takeways</Text>
                </Appear>                
                <List>
                    <Appear fid="1"><ListItem>Set of Recipies will form our communication dictionary</ListItem></Appear>
                    <Appear fid="2"><ListItem>Each Recipe is bound to Code Examples</ListItem></Appear>
                    <Appear fid="3"><ListItem bold textColor="cA">Each Recipe is bound to Takeways that hopefully will help you write quality code!</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Text textColor="myGreen" textSize="1.5em" margin="20px 0px 0px" bold>HANDS ON</Text>
                <Heading size={1} caps textColor="white" margin={10}>
                    Set up minimal development environment
                </Heading>
            </Slide>

            <Slide transition={["spin", "zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={1} caps textColor="cA" margin={10}>
                    1. Create
                </Heading>
                <Heading size={6} caps textColor="cA" margin={10}>
                    Introducing App Data
                </Heading>                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    1.1 Identifiers and Data Binding
                </Heading>
                <Appear><Text textColor="fileNameColor" textSize="1.0em" margin="20px 0px 0px" bold>identifiers-states.js</Text></Appear>
                <List>
                    <Appear fid="1"><ListItem>Binding is the association of an identifier with value</ListItem></Appear>
                    <Appear fid="2"><ListItem>Identifier States - NOT EXISTS / NOT BOUND / BOUND</ListItem></Appear>
                    <Appear fid="2"><ListItem>ReferenceError vs. undefined - make difference between them</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    1.2 Three ways to create identifiers
                </Heading>
                <Appear><Text textColor="fileNameColor" textSize="1.0em" margin="20px 0px 0px" bold>identifiers-creation.js</Text></Appear>
                <List>
                    <Appear><ListItem>Variable Declaration</ListItem></Appear>
                    <Appear><ListItem>Function Declaration</ListItem></Appear>
                    <Appear><ListItem>Function Formal Parameters</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    1.3 Identifiers Creation Order (Hoisting)
                </Heading>
                <Appear><Text textColor="fileNameColor" textSize="1.0em" margin="20px 0px 0px" bold>identifiers-creation-order.js</Text></Appear>
                <List>
                    <Appear><ListItem>Be aware about Function Declarations vs. Function Expressions</ListItem></Appear>
                    <Appear><ListItem>Be aware about Global and Local Environments (back to this in Read Section)</ListItem></Appear>
                    <Appear><ListItem>Be aware about Environment Creation vs. Environment Execution</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    1.4 Language defined identifiers
                </Heading>
                <Appear><Text textColor="fileNameColor" textSize="1.0em" margin="20px 0px 0px" bold>identifiers-language-defined.js</Text></Appear>
                <List>
                    <Appear><ListItem>JS engine understand some built-in identifiers - Object, Array, this, arguments etc.</ListItem></Appear>
                    <Appear><ListItem>Hijacking Identifier / Monkey Patching / Polyfill are good examples of why thinking in terms of identifers could be helpful</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={2} caps textColor="pingAudience" margin={10}>
                    Are you still with me?
                </Heading>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    1.5 Primitive Data Types
                </Heading>
                <Appear><Text textColor="fileNameColor" textSize="1.0em" margin="20px 0px 0px" bold>data-types-primitives.js</Text></Appear>
                <List>
                    <Appear><ListItem>5 primitive data types</ListItem></Appear>
                    <Appear><ListItem>JS is dynamic so it apply automatic type conversion - coercion</ListItem></Appear>
                    <Appear><ListItem>Coercion - during arithmetic operations / comaprison with ==</ListItem></Appear>
                    <Appear><ListItem>Evaluation order (from left to right) matters in case of coercion</ListItem></Appear>
                    <Appear><ListItem>Comparison with === does not use coercion</ListItem></Appear>
                    <Appear><ListItem>Primitives are compared by value</ListItem></Appear>
                    <Appear><ListItem>Comparison and if statements -> careful with 7 falsy values</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    1.6 Reference Data Types
                </Heading>
                <Appear><Text textColor="fileNameColor" textSize="1.0em" margin="20px 0px 0px" bold>data-types-reference.js</Text></Appear>
                <List>
                    <Appear><ListItem>To represent complex data JS use reference types</ListItem></Appear>
                    <Appear><ListItem>Reference Types - Object, Array, Function, RegExp etc.</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    1.7 typeof vs. instanceof
                </Heading>
                <Appear><Text textColor="fileNameColor" textSize="1.0em" margin="20px 0px 0px" bold>data-types-reference.js</Text></Appear>
                <List>
                    <Appear><ListItem>"typeof" for Primitive Types is not working for null</ListItem></Appear>
                    <Appear><ListItem>"typeof" for Reference Types works only for Object and Function</ListItem></Appear>
                    <Appear><ListItem>Use "instanceof" instead of "typeof" to check the concrete Reference type</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    1.8 Autoboxing
                </Heading>
                <Appear><Text textColor="fileNameColor" textSize="1.0em" margin="20px 0px 0px" bold>autoboxing.js</Text></Appear>
                <List>
                    <Appear><ListItem>primitive types are autoboxed -> wrapped with corresponding Reference types - Number, String, Boolean</ListItem></Appear>
                    <Appear><ListItem>do not be surprised that we could call method via identifier that points to primitive type</ListItem></Appear>
                    <Appear><ListItem>manual usage of these is not recommended "e.g. var b = new Boolean(false) ... b is true"...should use vauleOf</ListItem></Appear>                
                </List>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    1.9 Data Structures
                </Heading>
                <Text caps textColor="fileNameColor" textSize="1.0em" margin="20px 0px 0px" bold>any data structure is represented via Array or Object</Text>                
                <List>
                    <Link href="https://github.com/thejameskyle/itsy-bitsy-data-structures" margin={100}>
                        <Text bold textColor="pingAudience">Itsy Bitsy Data Structures</Text>
                    </Link>
                    <Link href="http://shop.oreilly.com/product/0636920029557.do" margin={100}>
                        <Text bold textColor="pingAudience">DataStructures and Algorithms with JavaScript</Text>
                    </Link>                
                    <Link href="https://github.com/mgechev/javascript-algorithms" margin={100}>
                        <Text bold textColor="pingAudience">JavaScript Algorithms (github repo with code examples)</Text>
                    </Link>                                    
                </List>
            </Slide>

            <Slide transition={["spin", "zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={1} caps textColor="cA" margin={10}>
                    2. Read
                </Heading>
                <Heading size={6} caps textColor="cA" margin={10}>
                    Resolving App Data
                </Heading>                                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    2.1 Environment - Definition and Types
                </Heading>
                <List>
                    <Appear><ListItem>Environment = Set of Identificators with Their Corresponding Values</ListItem></Appear>
                    <Appear><ListItem>Global Environment - only one; we have this by default</ListItem></Appear>
                    <Appear><ListItem>Local Environment - many; JS engine create these during program execution</ListItem></Appear>                
                </List>
            </Slide>

            <Slide transition={["zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Text textColor="myGreen" textSize="1.5em" margin="20px 0px 0px" bold>QUESTION</Text>
                <Heading size={2} caps textColor="pingAudience" margin={10}>
                    When JavaScript engine create Local Environment?
                </Heading>
            </Slide>

            <Slide transition={["zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Text textColor="myGreen" textSize="1.5em" margin="20px 0px 0px" bold>ANSWER</Text>
                <Heading size={2} caps textColor="pingAudience" margin={10}>
                    JavaScript engine creates Local Environment on each function invocation
                </Heading>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    2.2 Stack of Environments
                </Heading>
                <List>
                    <Appear><ListItem>To understand how data is resolved means to understand the stack of environments</ListItem></Appear>
                    <Appear><ListItem>Lets see next diagram...</ListItem></Appear>                
                </List>
            </Slide>

            <Slide transition={["spin", "zoom"]} bgColor="tertiary">
                <Markdown>
                    {`![Markdown Logo](${images.envstack.replace("/", "")})`}
                </Markdown>            
            </Slide>            

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    2.3 Rules Of Data Visibility
                </Heading>
                <Appear><Text textColor="fileNameColor" textSize="1.0em" margin="20px 0px 0px" bold>SCOPE CHAIN RESOLUTION (scope-chain.js)</Text></Appear>
                <List>
                    <Appear><ListItem>Data is visible in environment where defined (no block scope in ES5 or less)</ListItem></Appear>
                    <Appear><ListItem>Data defined in previous environments is visible in newer environments</ListItem></Appear>
                    <Appear><ListItem>If particular environment override data the updated value is visible in the newer environments</ListItem></Appear>                
                </List>
            </Slide>
            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    Quiz 1
                </Heading>
                <CodePane
                    textSize="22px"
                    lang="javascript"
                    source={require("../assets/quiz1.js")}
                    margin="20px auto"
                />                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    Quiz 2
                </Heading>
                <CodePane
                    textSize="22px"
                    lang="javascript"
                    source={require("../assets/quiz2.js")}
                    margin="20px auto"
                />                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    Quiz 3
                </Heading>
                <CodePane
                    textSize="22px"
                    lang="javascript"
                    source={require("../assets/quiz3.js")}
                    margin="20px auto"
                />                
            </Slide>

            <Slide transition={["zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={2} caps textColor="pingAudience" margin={10}>
                    FUNCTIONS ARE ESSENTIAL!
                </Heading>
                <Heading size={2} caps textColor="pingAudience" margin={20}>
                    LETS TALK ABOUT FUNCTIONS...
                </Heading>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    QUIZ 4
                </Heading>
                <CodePane
                    textSize="22px"
                    lang="javascript"
                    source={require("../assets/fconstructor.js")}
                    margin="20px auto"
                />                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    2.4 Function constructor
                </Heading>
                <Appear><Text textColor="fileNameColor" textSize="1.0em" margin="20px 0px 0px" bold>function-constructor.js</Text></Appear>
                <List>
                    <Appear><ListItem>Function constructor does not behave like function declaration and function expression</ListItem></Appear>
                    <Appear><ListItem>Make difference between lexical scope and global only scope</ListItem></Appear>                
                </List>
            </Slide>

            <Slide transition={["zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
              <BlockQuote>
                <Quote textColor="white" textSize="48">
                     Functions created with the Function constructor do not create closures to their creation contexts. They are always created in the global scope.
                </Quote>
                <Cite>Mozilla Reference</Cite>
              </BlockQuote>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    DATA RESOLUTION TAKEWAYS 
                </Heading>
                <List>
                    <Appear><ListItem>Think in terms of identifers ... do they exist, are they defined, from which environment they are resolved</ListItem></Appear>
                    <Appear><ListItem>Know the lifecycle phases - Environment Creation / Environment Execution</ListItem></Appear>
                    <Appear><ListItem>Make difference between functions created with declaration / expression / constructor</ListItem></Appear>
                    <Appear><ListItem bold textColor="cA">Bottom Line: If you want predicatble data in your environments/scope chain use Function Declarations</ListItem></Appear>                                    
                </List>
            </Slide>

            <Slide transition={["zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={2} caps textColor="pingAudience" margin={10}>
                    Are you still with me?
                </Heading>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    2.5 Closures
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>Definition</Text>
                <BlockQuote>
                    <Quote textColor="white" textSize="48">
                        Combination of code block and data... 
                    </Quote>
                    <Quote textColor="white" textSize="48">
                        If you understand the scope chain, the question on understanding closures in ECMAScript will disappear by itself. 
                    </Quote>
                    <Cite>DMITRY SOSHNIKOV</Cite>
                </BlockQuote>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    2.5 Closures
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>In General Theory</Text>
                <List>
                    <Appear><ListItem>FUNARG: FUNCTION USED AS FUNCTION ARGUMENT</ListItem></Appear>
                    <Appear><ListItem>HIGHER ORDER FUNCTION: THE ONE THAT TAKES FUNARG</ListItem></Appear>
                    <Appear><ListItem>FUNCTION VALUED FUNCTIONS: FUNCTIONS THAT RETURN OTHER FUNCTIONS</ListItem></Appear>
                    <Appear><ListItem>FIRST CLASS FUNCTIONS: CAN BE PASSED AS ARGUMENTS AND RETURNED FROM OTHER FUNCTIONS</ListItem></Appear>
                </List>                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    2.5 Closures
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>In ECMAScript (closure.js)</Text>
                <List>
                    <Appear><ListItem>Functions are data</ListItem></Appear>
                    <Appear><ListItem>Functions can be passed as parameters and returned by other functions</ListItem></Appear>
                    <Appear><ListItem>Anonymous Function could be used as Funarg</ListItem></Appear>
                </List>                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    QUIZ
                </Heading>
                <CodePane
                    textSize="22px"
                    lang="javascript"
                    source={require("../assets/closures.js")}
                    margin="20px auto"
                />                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    2.5 Closures in ECMAScript
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>TAKEWAYS</Text>
                <List>
                    <Appear><ListItem>All functions are first-class</ListItem></Appear>                    
                    <Appear><ListItem>All functions are closures except function created with Function constructor</ListItem></Appear>
                    <Appear><ListItem>Closures from the same environment share the same scope</ListItem></Appear>
                    <Appear><ListItem>FOCUS ON: functions that have function arguments that use free variables</ListItem></Appear>
                    <Appear><ListItem>FOCUS ON: functions that return functions</ListItem></Appear>
                </List>                
            </Slide>

            <Slide transition={["spin", "zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={1} caps textColor="cA" margin={10}>
                    3. Update
                </Heading>
                <Heading size={6} caps textColor="cA" margin={10}>
                    Changing App Data
                </Heading>                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    Change Data Takeways in One Slide
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>binding-rebinding-mutation.js</Text>
                <List>
                    <Appear><ListItem>Make difference between binding / rebinding / mutation</ListItem></Appear>                    
                    <Appear><ListItem>Make difference between call by value / call by reference / call by sharing</ListItem></Appear>
                    <Appear><ListItem>The more immutable data the better</ListItem></Appear>
                </List>                
            </Slide>

            <Slide transition={["spin", "zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={1} caps textColor="cA" margin={10}>
                    4. Delete
                </Heading>
                <Heading size={6} caps textColor="cA" margin={10}>
                    Removing App Data
                </Heading>                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <BlockQuote>
                    <Quote textColor="white" textSize="40">
                        Many modern language engines such as Chrome's V8 JavaScript engine dynamically manage memory for running applications so that developers don't need to worry about it themselves. The engine periodically passes over the memory allocated to the application, determines which data is no longer needed, and clears it out to free up room. This process is known as garbage collection. 
                    </Quote>
                    <Cite>V8 JavaScript Engine Blog</Cite>
                </BlockQuote>
            </Slide>            

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    Delete Data Takeways in One Slide
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>data-deletion.js</Text>
                <List>
                    <Appear><ListItem>JavaScript engines use garbage collection</ListItem></Appear>                    
                    <Appear><ListItem>Manuall deletion could be made with 'delete' operator</ListItem></Appear>
                    <Appear><ListItem>Developer can delete only properties with 'DontDelete' attibute set to false but no identifiers</ListItem></Appear>
                </List>                
            </Slide>

            <Slide transition={["zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={2} caps textColor="pingAudience" margin={10}>
                    Before we end I would like to make a statement
                </Heading>
            </Slide>

            <Slide transition={["zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
              <BlockQuote>
                <Quote textSize="30" textColor="lime">
                    1. We could perfectly write programs with the paradigms we already learned.
                    So our programs could stick only to -> functions / scope chain resolution / objects as key-value data stores.
                </Quote>
                <br/>
                <Quote textSize="30" textColor="lime">
                    2. This is great because our programs will not only be simpler and less error prone but will also fit in the context of current trends - doing functional programming with immutable data structures.
                </Quote>
                <br/>
                <Quote textSize="30" textColor="lime">
                    3. As you will see in the forthcoming lectures adding OOP into the mix will add a whole new set of complexity having to deal with -  
                    prototype chain / this context and its binding / various OOP patterns that do not naturally fit to JavaScript language (which is mitigated with newest standards ES6/7). 
                </Quote>
                <br/>
                <Quote textSize="30" textColor="red">
                    Bottom Line: The added value by this additional abstraction layer is so little that it does not justify the additional complexity which you must cope with.   
                </Quote>                
              </BlockQuote>
            </Slide>

            <Slide transition={["zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Text textColor="fileNameColor" textSize="1.0em" margin="20px 0px 0px" bold>HOMEWORK: Watch this now and at the end of the course!</Text>              
                <Link href="https://www.youtube.com/watch?v=PSGEjv3Tqo0" margin={100}>
                    <Text bold caps textColor="pingAudience">Douglas Crockford - The Better Parts</Text>
                </Link>                
            </Slide>

            <Slide transition={["slide"]} bgImage={images.corporatebg.replace("/", "")}>
                <Layout>
                    <Fill></Fill>
                    <Fill>
                        <Heading size={2} caps textColor="white">
                            Want to Learn More?
                        </Heading>
                        <Appear>
                            <Heading size={6} caps textColor="white">1. Keep Calm</Heading>
                        </Appear>
                        <Appear>
                            <Heading size={6} caps textColor="white" margin="30px 0px 0px">2. Grab The Source Code</Heading>
                        </Appear>
                        <Appear>
                            <Heading size={6} caps textColor="white"  margin="30px 0px 0px">3. Start Coding</Heading>
                        </Appear>
                  </Fill>
                </Layout>
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

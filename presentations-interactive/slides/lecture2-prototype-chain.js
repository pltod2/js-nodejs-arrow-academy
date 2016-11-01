// Import React
import React from "react";
import CodeSlide from 'spectacle-code-slide';

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
  envstack: require("../assets/envstack.png"),
  envcircles: require("../assets/envcircles.png"),
  oopjs: require("../assets/oopjs.png"),
  matrix: require("../assets/matrix.jpg"),
  oopproto: require("../assets/oopproto.png"),
  cpn: require("../assets/cpn.png"),
  scopeproto: require("../assets/scopeproto.png"),
  es6logo: require("../assets/ecmascript6Logo.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
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
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Lecture 2</Text>
                        <Text textSize="1.5em" margin="10px 0px 0px" bold>JavaScript Prototype Chain</Text>
                        <Text textSize="0.8em" margin="70px 0px 0px" textColor="white" bold>02.11.2016</Text>
                        <Text textSize="0.8em" margin="10px 0px 0px" textColor="white" bold>ptodorov@axway.com</Text>
                  </Fill>
                </Layout>
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
                    In both cases 'p' does not exist but we have different result. Why?
                </Heading>
                <List>
                    <Appear><ListItem>The engine resolves identifiers using internal method GetValue (p) -> if IsUnresolvableReference(p) throw a ReferenceError exception</ListItem></Appear>
                    <Appear><ListItem>In case of 'typeof'' the engine runs special algorithm -> if IsUnresolvableReference(p) return "undefined"</ListItem></Appear>
                    <Appear><ListItem bold textColor="cA">Bottom Line: Consider both 1) ECMAScript Specification AND 2) JS Engine specific augmentations</ListItem></Appear>
                </List>                                
            </Slide>

            <Slide transition={["zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
              <BlockQuote>
                <Quote textColor="white">JavaScript is
                  <Text textSize="72px" textColor="cA">1) untyped</Text>
                  <Text textSize="72px" textColor="cDO">2) interpreted</Text>
                  <Text textSize="72px" textColor="cO">3) dynamic</Text>
                  <Text textSize="72px" textColor="cY">4) multi-paradigm</Text>
                  programming language standardized by ECMAScript specification.
                </Quote>
                <Cite>Wikipedia</Cite>
              </BlockQuote>
            </Slide>

            <Slide transition={["spin", "zoom"]} bgColor="tertiary">
                <Markdown>
                    {`![Markdown Logo](${images.envstack.replace("/", "")})`}
                </Markdown>            
            </Slide>

            <Slide transition={["spin", "zoom"]} bgColor="tertiary">
                <Markdown>
                    {`![Markdown Logo](${images.envcircles.replace("/", "")})`}
                </Markdown>            
            </Slide>

            <Slide transition={["fade"]}  textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    Lecture 1 Takeways (1/2)
                </Heading>
                <List>
                    <Appear><ListItem>One Global and Many Local Enviroments with Identifiers</ListItem></Appear>                    
                    <Appear><ListItem>Identifiers (states: NOT EXIST / NOT BOUND / BOUND, creation: Variable or Function Declaration / Function Parameters, types: built-in / manual</ListItem></Appear>
                    <Appear><ListItem>Identifier to Value Binding-> Function Declaration during Environment Creation (Hoisting) / Function Expression and Variable Declaration during Environment Execution</ListItem></Appear>                                        
                </List>
            </Slide>            

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    Lecture 1 Takeways (2/2)
                </Heading>
                <List>              
                    <Appear><ListItem>Values - Everything is Object Mantra: primitives are autoboxed (5 types, 7 falsy values, coercion) / functions (callable objects)</ListItem></Appear>                  
                    <Appear><ListItem>Functions (the most powerful type of objects): Create Local Environments (on invokation)  / Send data to other environments (closures) / Create Other Objects (when invoked with new)</ListItem></Appear>                    
                    <Appear><ListItem>How do we create Function objects? -> Function Declaration or Expression / Function constructor</ListItem></Appear>                    
                    <Appear><ListItem>How do we resolve values? -> Scope Chain Resolution</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
              <BlockQuote>
                <Quote textColor="white" textSize="48">
                    Using only Scope Chain Resolution to write apps in
                    <Text textSize="48px" textColor="cA">1) Functional programming style</Text>
                    <Text textSize="48px" textColor="cDO">2) WITHOUT rigid object hierarchies</Text>
                    <Text textSize="48px" textColor="cO">3) WITH single source of truth data store, </Text>
                    <Text textSize="48px" textColor="cY">4) Immutable data structures, and</Text>
                    <Text textSize="48px" textColor="cY">4) Streams-like control flow </Text>
                    weaving different single purpose granular functions into coherent application logic                    
                </Quote>
                <Cite>The True Nature of JavaScript</Cite>
              </BlockQuote>
            </Slide>
            

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    So how we are going to proceed today?
                </Heading>
                <List>
                    <Appear><ListItem>Your Daily Dose Of Motivation</ListItem></Appear>
                    <Appear><ListItem>MAIN GOAL: Understand Prototype Chain (in contrast to Scope Chain it allow us writing in OOP style, deal with object hierarchies and 'this' context etc.)</ListItem></Appear>
                    <Appear><ListItem>OOP (in contrast to Functional Programming)</ListItem></Appear>
                    <Appear><ListItem>Useful JavaScript Patterns (good reason to weave some software architecture advices in this lecture; as much as we can...will continue with them in Modules lecture)</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    Principles of Software/Systems Design
                </Heading>
                <Appear><Text textColor="fileNameColor" textSize="1.0em" margin="20px 0px 0px" bold>Tim Berners-Lee</Text></Appear>
                <List>
                    <Appear><ListItem textColor="myGreen">Simplicity - Keep it simple, stupid!</ListItem></Appear>
                    <Appear><ListItem textColor="myGreen">Modularity - Granular reusable software agnostic to change</ListItem></Appear>
                    <Appear><ListItem textColor="myGreen">Tolerance - Be liberal in what you require but conservative in what you do</ListItem></Appear>
                    <Appear><ListItem>Decentralization - Remove the single point of failure</ListItem></Appear>
                    <Appear><ListItem textColor="myGreen" bold>Principle of Least Power - The less powerful the language, the more you can do with the data stored in that language</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
              <BlockQuote>
                <Quote textColor="white" textSize="48">
                     Atwood's Law: Any application that can be written in JavaScript, will eventually be written in JavaScript.
                </Quote>
                <Cite>2007, Jeff Atwood (founder of stackoverflow)</Cite>
              </BlockQuote>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    1. Everything is Object
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>everything-is-object.js</Text>
                <List>
                    <Appear><ListItem>Primitives are autoboxed</ListItem></Appear>
                    <Appear><ListItem>Even functions are objects and can have properties</ListItem></Appear>
                </List>                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    2. How Do We Create Real Objects?
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>object-creation.js</Text>
                <List>
                    <Appear><ListItem>Object Literal</ListItem></Appear>
                    <Appear><ListItem>Object.create</ListItem></Appear>
                    <Appear><ListItem>Constructor Functions: built-in for reference types</ListItem></Appear>
                    <Appear><ListItem>Constructor Functions: custom</ListItem></Appear>
                </List>                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    3. Functions Roles - Summary
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>function-roles.js</Text>
                <List>
                    <Appear><ListItem>Function used as Function => test()</ListItem></Appear>
                    <Appear><ListItem>Function used as Method => obj.test()</ListItem></Appear>
                    <Appear><ListItem>Function used as Constructor => new test()</ListItem></Appear>
                    <Appear><ListItem>Constructor Functions are implicit - protect your code of cases where 'new' is missing</ListItem></Appear>
                    <Appear><ListItem>Functions are Objects - they can have properties and methods</ListItem></Appear>
                </List>                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    4. IDENTIFIERS VS. PROPERTIES
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>properties.js</Text>
                <List>
                    <Appear><ListItem>Identifiers are evaluated via Scope Chain</ListItem></Appear>
                    <Appear><ListItem>Properties are evaluated via Prototype Chain</ListItem></Appear>
                    <Appear><ListItem>Properties are deletable by default</ListItem></Appear>
                </List>                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={4} caps textColor="cA" margin={10}>
                    5. OBJECT MODIFICATION
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>object-modification.js</Text>
                <List>
                    <Appear><ListItem>Remove the possibility to add properties - isExtensible</ListItem></Appear>
                    <Appear><ListItem>Remove the possibility to add and remove properties - isSealed</ListItem></Appear>
                    <Appear><ListItem>Remove the possibility to add, remove, and update properties - isFrozen</ListItem></Appear>
                </List>                
            </Slide>


            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={2} caps textColor="fileNameColor" margin={10}>
                    Our programs so far
                </Heading>
                <Heading size={6} caps textAlign="left" textColor="pingAudience" margin={10}>
                     1. A set of environments full of unrelated objects
                </Heading>
                <Heading size={6} caps textAlign="left" textColor="cA" margin={10}>
                     2. Some objects are simple data holders where data visibility obey scope chain rules
                </Heading>
                <Heading size={6} caps textAlign="left" textColor="lime" margin={10}>
                     3. Other objects are callable - could recieve data, do some processing, and pass data along 
                </Heading>
            </Slide>

            <Slide transition={["fade"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={1} caps textColor="pingAudience" margin={10}>
                    How do we create relationships between Objects?
                </Heading>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={4} caps textColor="pingAudience" margin={10}>
                    Hello, Object Oriented Programming!
                </Heading>
                <Markdown>
                    {`![Markdown Logo](${images.oopjs.replace("/", "")})`}
                </Markdown>                            
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={2} caps textColor="cA" margin={10}>
                    Classical OOP 
                </Heading>
                <Heading size={6} caps textColor="white" textAlign="left" margin={10}>
                    1) create Class as a blueprint 
                </Heading>
                <Heading size={6} caps textColor="white" textAlign="left" margin={10}>
                    2) one Class could inherit another 
                </Heading>
                <Heading size={6} caps textColor="white" textAlign="left" margin={10}>
                    3) create Object instances out of the class 
                </Heading>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={2} caps textColor="cA" margin={10}>
                    Prototypal OOP 
                </Heading>
                <Heading size={6} caps textColor="white" margin={30}>
                    Create Object based on (inheriting) another Object ( a.k.a. Prototype (Model) ) 
                </Heading>
                <Heading size={6} textColor="cY" margin={50}>
                    e.g. var b = createLike(a) 
                </Heading>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    6. HOW DO WE CREATE REAL OBJECTS (REVISITED)
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>object-creation-default-proto.js</Text>
                <List>
                    <Appear><ListItem>new Object() =>  default Model === Object.prototype</ListItem></Appear>
                    <Appear><ListItem>Object literal =>  default Model === Object.prototype</ListItem></Appear>
                    <Appear><ListItem>Object.create => no default Model, must be provided</ListItem></Appear>
                </List>                
            </Slide>

            <CodeSlide
                transition={[]}
                lang="js"
                code={require("../assets/confusion.js")}
                textSize="25"
                ranges={[
                    { loc: [0, 25], title: "Lets bring some confussion here..." },
                    { loc: [2, 3], note: "Create new object with Built-in function" },
                    { loc: [3, 4], note: "Factories are actually Constructor Functions. Remeber that typeof is working for functions." },
                    { loc: [4, 5], note: "instanceof works here as well" },                    
                    { loc: [6, 7], note: "Built-in factories ensures default models. Models are set to 'prototype' property of the constructor function." },
                    { loc: [7, 8], note: "Models are objects. As we said we create Objects based on Objects."},
                    { loc: [9, 12], note: "Constructor Functions are objects and we can add properties. Where is the Prototype/Model of Constructor Function?" },
                    { loc: [12, 13], note: "The Model of Array can be found in Function.prototype" },
                    { loc: [13, 14], note: "Wait the minute...the Model of Object is also Function.prototype. Are we sure?" },
                    { loc: [15, 21], note: "We can add properties (dynamically) to a Model that will be shared across all Objects based on this Model!!!" }                    

                ]}
            />

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={4} caps textColor="lime" margin={10}>
                    We create Objects using other Objects based on Objects. Changing Model Objects will affect the produced Objects. And on top of that some of these Objects are actually Functions?!?! 
                </Heading>
            </Slide>

            <Slide transition={["zoom", "spin"]} bgColor="black">
                <Interactive/>            
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={4} caps textColor="fileNameColor" margin={10}>
                    So who is the Architect?
                </Heading>
                <Appear><Text textColor="lime" textSize="1.3em" margin="20px 0px 0px" bold>Object.prototoype</Text></Appear>
                <Markdown>
                    {`![Markdown Logo](${images.matrix.replace("/", "")})`}
                </Markdown>                            
            </Slide>

            <Slide transition={["spin", "zoom"]} bgColor="tertiary">
                <Markdown>
                    {`![Markdown Logo](${images.oopproto.replace("/", "")})`}
                </Markdown>            
            </Slide>            

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    7. PROTOTYPAL INHERITANCE - THE TREE OBJECTS
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>model-factory-instance.js</Text>
                <List>
                    <Appear><ListItem>Instance Objects (IO) - created with Constructor Function, Object Literal, Object.create</ListItem></Appear>
                    <Appear><ListItem>Factory Object (FO) - accessed with IO.constructor</ListItem></Appear>
                    <Appear><ListItem>Prototype(Model) Object => accessed with IO.__proto__ and FO.prototype</ListItem></Appear>
                    <Appear><ListItem>NOTE: If we change __proto__ or prototype we will break the hierarchy unless we synchronize both of them again</ListItem></Appear>
                </List>                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    8. OBJECT CREATION EVOLUTION: ES3, ES5
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>real-world.js</Text>
                <List>
                    <Appear><ListItem>ES3: SHIM for Prototypal inheritance - difficult but ok if you have it in library</ListItem></Appear>
                    <Appear><ListItem>ES5: Native Prototypal inheritance with Object.create</ListItem></Appear>
                </List>                
            </Slide>

            <Slide transition={["spin", "zoom"]} bgColor="tertiary">
                <Markdown>
                    {`![Markdown Logo](${images.cpn.replace("/", "")})`}
                </Markdown>  
                <Text textColor="myGreen" textSize="0.8em" margin="20px 0px 0px" bold>Source: http://dmitrysoshnikov.com/ecmascript/javascript-the-core/</Text>          
            </Slide>            

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={6} caps textColor="cA">
                    HONESTLY, IS THIS SYNTAX FAMILIAR TO YOU?
                </Heading>
                <CodePane
                    textSize="15px"
                    lang="javascript"
                    source={require("../assets/class.js")}
                    margin="10px 10px"
                />                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={4} caps textColor="pingAudience" margin={10}>
                    Hello, ECMAScript 6!
                </Heading>
                <Markdown>
                    {`![Markdown Logo](${images.es6logo.replace("/", "")})`}
                </Markdown>                            
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    9. OBJECT CREATION EVOLUTION: ES6 and BEYOND
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>real-world.js</Text>
                <List>
                    <Appear><ListItem>ES6: Native Classical inheritance with "class" construct - Beware of huge amount of syntactic sugar. Prototypal inheritance is implementation detail.</ListItem></Appear>
                    <Appear><ListItem>Crockford Object Creational Pattern: Neither of above. It use the power of Node modules and closures to create and export immutable objects.</ListItem></Appear>
                </List>                
            </Slide>            

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    10. Using 'new' with Constructor Functions - the Two Objects 
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>function-roles.js</Text>
                <List>
                    <Appear><ListItem>JS engine creates 1) empty object and set it to FO.prototype</ListItem></Appear>
                    <Appear><ListItem>JS engine creates 2) instance object and set it to "this"</ListItem></Appear>
                </List>                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    11. The problem of 'this' 
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>this.js</Text>
                <List>
                    <Appear><ListItem>'this' is a.k.a. the context in which the function is running</ListItem></Appear>
                    <Appear><ListItem>the value of 'this' depends on the way the function is invoked</ListItem></Appear>
                    <Appear><ListItem>to understand what is the value of 'this' look before the '.'</ListItem></Appear>
                </List>                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    QUIZ
                </Heading>
                <CodePane
                    textSize="22px"
                    lang="javascript"
                    source={require("../assets/bca.js")}
                    margin="20px auto"
                />                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    12. Binding 'this' context - bind / call / apply 
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>this.js</Text>
                <List>
                    <Appear><ListItem>'this' is a.k.a. the context in which the function is running</ListItem></Appear>
                    <Appear><ListItem>the value of 'this' depends on the way the function is invoked</ListItem></Appear>
                    <Appear><ListItem>to understand what is the value of 'this' look before the '.'</ListItem></Appear>
                    <Appear><ListItem>use bind / call / apply to control the 'this' context</ListItem></Appear>
                </List>                
            </Slide>

            <Slide transition={["zoom"]} bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
              <BlockQuote>
                <Quote textColor="pingAudience" textSize="65">
                     The fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.
                </Quote>
                <Cite>https://developer.mozilla.org</Cite>
              </BlockQuote>
            </Slide>
            
            <Slide transition={["spin", "zoom"]} bgColor="tertiary">
                <Markdown>
                    {`![Markdown Logo](${images.scopeproto.replace("/", "")})`}
                </Markdown>  
            </Slide>            
            
            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    13. Inheritance Summary 
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>inheritance.js</Text>
                <List>
                    <Appear><ListItem>Classical: ES3/5 - Shim / ES6 - native support with Class construct</ListItem></Appear>
                    <Appear><ListItem>Prototypal: ES3 - Shim / ES5 and beyond - native support with Object.create</ListItem></Appear>
                    <Appear><ListItem>Pay attention to - __proto__ / prototype / constructor - properties</ListItem></Appear>
                </List>                
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    14. Encapsulation 
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>encapsulation.js</Text>
                <List>
                    <Appear><ListItem>Achieved with closures before ES6</ListItem></Appear>
                    <Appear><ListItem>Achieved with modifiers after ES6</ListItem></Appear>
                </List>
            </Slide>

            <Slide transition={["fade"]} textColor="white" bgImage={images.corporatebg.replace("/", "")} bgDarken={0.70}>
                <Heading size={5} caps textColor="cA" margin={10}>
                    15. Composition and Mixins
                </Heading>
                <Text textColor="myGreen" textSize="1.3em" margin="20px 0px 0px" bold>this.js</Text>
                <List>
                    <Appear><ListItem>Shims before ES5</ListItem></Appear>
                    <Appear><ListItem>Object.assign from ES5 and beyond</ListItem></Appear>
                </List>                
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

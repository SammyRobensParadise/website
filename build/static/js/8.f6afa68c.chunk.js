(this["webpackJsonpwebsite-container"]=this["webpackJsonpwebsite-container"]||[]).push([[8],{674:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(11),o=n(0),i=n.n(o),s=n(399),r=n(6),l=n(10);function c(){var e=Object(a.a)(["\npadding-block-start: 6vh;\n"]);return c=function(){return e},e}function d(){var e=Object(a.a)(["\n  width: auto;\n  height: 800px;\n  background: ",";\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: flex;\n  z-index: 2;\n"]);return d=function(){return e},e}function u(){var e=Object(a.a)(["\n  width: auto;\n  height: inherit;\n  background-size: cover;\n  background-repeat: no-repeat;\n  z-index: 1;\n"]);return u=function(){return e},e}var h=l.default.div(u()),m=l.default.div(d(),r.c.UIColors.white),p=l.default.div(c()),f=function(e){var t=e.children;return i.a.createElement(h,{className:"cover-image"},i.a.createElement(m,null,i.a.createElement(s.a,{disableGutters:!0},i.a.createElement(p,null,t))))}},675:function(e,t,n){"use strict";n.d(t,"h",(function(){return l})),n.d(t,"g",(function(){return c})),n.d(t,"f",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return h})),n.d(t,"i",(function(){return m})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"k",(function(){return g})),n.d(t,"a",(function(){return b})),n.d(t,"j",(function(){return w}));var a=n(0),o=n.n(a),i=n(68),s=n(16),r=n(25),l={section1:{title:"The Design",text:["Website Winter and Spring 2020 was unique in many senses. It used was designed with an a-traditional single page layout, and used a series of strong colour systems to convey a sense of boldness. The website featured many different hover and SVG animations designed and developed by me to as a sense of movement to to the webpage. The overall goal of the portfolio was to show off some animation and react features more than showcase other types of work."]},section2:{title:"The Code",text:["The website is built with react 16 and is hosted on firebase. It leverages a number of different modern javascript libraries to deliver a fast dynamic experience. One of my favourite features of the website is the usage of paper.js to create a custom dynamic css cursor. The website also uses anime.js to render svg animations and transition states. The website uses web pack\u2019s code splitting feature to provide dynamic browser rendering, and uses minimal state managed by redux. Check out the source code here!","One of the most interesting challenges of this website was that of accessible design. Making AA accessible websites become more challenging when dealing with designs that do not follow traditional web design patterns, especially in relation to DOM flow. This impacts keyboard navigation. To address this problem, I implemented react-axe a dynamic accessibility auditing tool to analyze the accessibility of HTML and css rendered to the browser. I was then able to make changes drastically increasing the accessibility of the portfolio, something often overlooked on websites experimenting with unique web design patterns."]}},c={section1:{title:"The Story",text:["I decided to explore the usage of a native app-like experience to display my design and development skillset in an attempt to ask users to spend more time on each page. The goal of the portfolio (2019) was to change the traditional format of a website to more of an experience. Rather than using large amounts of text, I decided to focus on illustrations. The dark theme used is intended to create a change of scenery and provoke a certain element of suspense with the user. It also encompasses space-like themes such as rockets, futuristic robots and illustrations of advanced technology.","The Website is built with react 16 and delivers a unique experience. The website contains a state management system, treating webpages as a stack, much the same as a web browser. The internal webpage history state management simplified loading animations but caused some challenges relating to managing the browser\u2019s history state in parallel. While this navigation experiment was interesting, for future projects I have opted to use a router system to manage webpage state in the interest of maintainability. Check out the source code here!"]}},d={section1:{title:"What it is\u2026",text:["Intensif-eye is a fully functioning mobile application that I, any 3 other engineers developed and designed as part of Dubhacks, a Hackathon at the University of Washington in October 2019. We placed second for use of Google Cloud AI, and 3rd place overall out of hundreds of teams. The accompanied designs were envisioned (by me) to product-ionize the application."]},section2:{title:"The Solution",text:["Intensif-eye at allows users to take images of text or hand writing and using Google\u2019s vision AI API, extracts the text from the image that can be rendered to a screen. My team and I saw this incredible potential to use this powerful technology to allow people who may be visually impared in some way to access information quickly without the use of glasses or other technology. We did this by extracting text from images and presenting it to users in a high contrast, and accessible fashion."]},section3:{title:"The Problem Space",text:["The American Foundation for the Blind estimates that over 26.9 million American adults experience some sort of vision loss, and about 41% of those people either don\u2019t have vision correction tools or don\u2019t have the correct prescription. The good news? over 81% of those people have smartphones! This means that a digital solution to address fixed point vision issues is statistically very accessible for many individuals, and presents a very high ROI. To ensure an adequate solution, we measured the average time it took to retrieve reading glasses, and decided to constrain ourselves to 30 seconds from the point of unreadable text is identified to the point where the user can read the rendered text (we exceeded our targets)."]},section4:{title:"The Design Process",text:["One of our team members was legally blind, and was not only our source of immense inspiration for the project, but also an amazing test user, we were able to iterate and change our preliminary designs on the fly to ensure we were factoring in issues like color blindness and contrast. For this particular project I took on the role of a developer and UX designer. Where I became responsible for optimizing the user flow of the application from launch to text identification, as well as developing the app in React Native. My featured extended design is intended to expand the feature set of the application, ready for a dev team to tackle, while retaining the original optimized flow. The app features easily accessible font-size and contrast settings, and retaining a simple color scheme of 5.94:1 contrast, exceeding W3C\u2019s AAA standard of 4.5:1."]},section5:{title:"Reflecting\u2026",text:["Intensif-eye (and my teammate) raised my awareness about the importance of accessible design. It is something that we learn about in school, and design courses all the time, but it changed my perspective to see the joy and freedom that my teammate showed when using the app, even in its POC state. My raised awareness and \u2014 now passion, for accessible design prompted me to take a leading role at Hootsuite leading an effort to bring better accessible design and development practices to the product and technology team, in addition to my traditional development work."]}},u={section1:{title:"What is Grape?",text:["I had the opportunity to work with two fellow engineers to conceptualize the proof of concept for a web service that would open-source code documentation and the learning of code. This is Grape. We were frustrated with the way software documentation was traditionally created and were equally frustrated with the lack of adequate and affordable solutions to help people learn to code, or learn about code. Whether it was an experienced developer learning the in\u2019s and out\u2019s of a new API, or a beginner attempting to master java for the first time, we found a field with fairly limited engagement-based education solutions."]},section2:{title:"My Role",text:[o.a.createElement(s.l,null,"I was brought onto the project to take control of the initial visual design, product design and UX design of Grape, as well as the design and software development of Grape\u2019s promotional website in react.js. As part of the website design, I created a number of illustrations conveying the sense of empowerment associated with user-directed learning. I used Procreate as well as Adobe illustrator and designed the web page layout in Adobe XD. Using Adobe XD\u2019s cloud features, I was able to quickly share designs with my teammates and iterate on designs. As part of the Proof of concept for Grape, I also developed and designed the Grape design system called Global-Winery.",o.a.createElement(i.Link,{to:"/global-winery"},"You can read about Global-Winery Here."))]},section3:{title:"Why Grape's Different",text:["The proof of concept for Grape was designed to show that if users were given the ability to create their own \u201cmodules\u201d where they can use a variety of tools such as virtual IDEs and terminals as well videos, text and images to teach a range of software tools to users. Essentially a blogging platform, both private and public where people can share \u201cmodules\u201d similar to articles that walk users through software tools. No other current product delivers a user-centered approach to learning where individuals can create immersive learning experiences for software. Our initial research shows that tools such as Grape have the potential to revolutionize the onboarding process for software developers who cited learning custom practices and systems as one of the most challenging aspects of starting a new job."]}},h={section1:{title:"A React Library",text:[o.a.createElement(s.l,null,"Global Winery is a front-end reach library built in react.js designed for"," ",o.a.createElement(i.Link,{to:"/grape"},"Grape"),". The package is bundled using rollup.js and is configured for use alongside styled-components. It can be installed"," ",o.a.createElement("a",{href:r.a},"here via npm"),". The library features a number of different dependency-free icons, buttons, text areas, color themes and dropdowns. Each one of these components are stateless functional components with a props-based interface. The components were designed with accessibility and keyboard functionality in mind. Another Interesting fact about global-winery is that it is dependency free with the one exception of"," ",o.a.createElement("code",null,"styled-components"),".You can check out the"," ",o.a.createElement("a",{href:r.b},"component sandbox here"),", where the interface for some components are described.")]},section2:{title:"Design & Motivation",text:[o.a.createElement(s.l,null,"My vision for Global winery was to create a simple component library that would allow other members of the development team to quickly prototype functional web components and show that the idea behind Grape was achievable, and that the technical skill and know-how was available on the team. It features both raised and flat components and uses a simple web-accessible font ",o.a.createElement("i",null,"Montserrat")," as well as a light green and deep purple color tone, as well as accented blue gradients. The colors were chosen for two reasons. The first would be their high contrasting ratio with white, black and one another. The second being that the colors represent a grape vine, a key symbol of the original product vision for Grape.")]}},m={section1:{title:"Rec'd",text:[o.a.createElement(s.l,null,"Rect is currently in progress. I am building Rec\u2019t with",o.a.createElement("a",{href:"https://www.linkedin.com/in/kira-w/"},"Kira Wadden"),", a peer of mine from the University of Waterloo. As music lovers, we found that there was no way to easily share the music that we love to listen to with our friends, or compile a selection of that music into a playlist for everyone to enjoy! Rec\u2019t will address this problem. It will serve as a social platform connected to a user\u2019s Spotify and Facebook account, allowing users to share the music they love, with the people they love! It will be a mobile application built in react native and served with a golang microservice-based backend and a mongoDB database.")]},section2:{title:"More to come\u2026",text:[]}},p={section1:{title:"Eunoia's Design",text:[o.a.createElement(s.l,null,"Eunoia is defined as the goodwill a speaker cultivates between themself and their audience, or a condition of receptivity. Eunoia, the design system, was created and is used to convey a sense of appreciation for traditional web design, while still maintaining and exploring innovating design methods and leveraging new technology. The system is designed, and developed by me, and is open sourced under an MIT licence, meaning anyone is welcome to use my design components. The design system is built with accessibility in mind and features high-contrast components. It is built on"," ",o.a.createElement("a",{href:r.q},"Google\u2019s material design")," system. I chose to do this for a number of reasons. Based on the design principle of Jakob\u2019s Law, which states that since users will on average spend most of their time (90%) on other sites, thus users would expect my site to work in a similar fashion. Leveraging best practices of material design ensures a higher sense of comfort amongst users using the site. You can explore the components in a"," ",o.a.createElement("a",{href:r.l},"live sandbox via storybook"),", or"," ",o.a.createElement("a",{href:r.k},"download it via npm"),".")]},section2:{title:"Eunoia's Code",text:[o.a.createElement(s.l,{padding:5,wide:!0},"Eunoia is written in typescript and uses strict type checking to ensure that component interfaces are used correctly. Components are built to react and are purely functional in nature meaning that you don\u2019t need to worry about managing the internal state of a component since it is determined simply by its props. The components are in part built using",o.a.createElement("code",null,"styled-components")," and thus are extensible and can have their styles overridden. The library is ",o.a.createElement("a",{href:r.k},"downloadable via npm"),", and components can be previewed via ",o.a.createElement("a",{href:r.l},"storybook"),". As I continue to grow my site, I will continue to maintain and update eunoia adding new components!")]}},f={section1:{title:"What it is",text:[o.a.createElement(s.l,null,"Github-contruibutions-counter is a node.js package that has a single interface function that allows users to easily get the Github contributions history for a user based on their username alone. It can be used on the server, or client-side. I created, and open-sourced the package because I wanted a way to share my contribution history on my website, and I felt that the library could be useful for other developers who wanted to access the contribution history for various users via a simple, single-function interface. The package allows you to get the contributions history for a user based on the last year, the total contributions of the user, or the contribution history categorized by year. You can"," ",o.a.createElement("a",{href:r.n},"download the package via NPM"),", or"," ",o.a.createElement("a",{href:r.m},"try it out via codebox"))]},section2:{title:"Development Process",text:[o.a.createElement(s.l,{padding:5,wide:!0},"The package is written in vanilla javascript and uses two external dependencies to extract data. Since github does not support contribution history via their API, the only option is to scrape a user\u2019s public github profile for their contributions history. The async package uses axios to make a simple get request to a users github profile, using a proxy for usage in the browser. It then parses the HTML retrieved from the get-request using"," ",o.a.createElement("code",null,"cheerio.js"),", creating a virtual DOM object, and accesses DOM attributes relating to contribution history. After some sanitizing, and cleanup, the results are returned asynchronously in the form of an array of objects containing contribution history for the user! You can ",o.a.createElement("a",{href:r.n},"download the package via NPM"),", or ",o.a.createElement("a",{href:r.m},"try it out via codebox"))]}},g={section1:{title:"What it is\u2026 a Thonk",text:[o.a.createElement(s.l,null,"Thonk can be described as the sound a sad, but cute thing makes when it plops. It can also be described as the emotion felt when something goes hilariously awry or the action of thinking strangely. Thonk.js is an open-source node.js package written by me (in materials chemistry class instead of actually doing chemistry) that uses natural language processing to replace all the appropriate words in a given string with either, thonk, thonked, or thonking. This is known as \u201cthonkifying the strings\u201d. You can also use the Chonk method provided in thonk.js to \u201cchonkify a string\u201d. A chonk refers to a large but cute animal, most commonly a cat. More surprisingly, after I open-sourced the package, it now has hundreds of downloads via npm. Want to join me on this absurd journey of natural language processing?",o.a.createElement("a",{href:r.w},"Download the package via npm"),", or"," ",o.a.createElement("a",{href:r.v},"contribute to the project on github!"))]},section2:{title:"User Testimonials",text:[o.a.createElement("div",null,o.a.createElement(s.l,{padding:5,wide:!0},o.a.createElement("quote",null,"\u201cWhat even\u2026\u201d ",o.a.createElement("i",null,"\u2014Kira Wadden"))),o.a.createElement(s.l,{padding:5,wide:!0},o.a.createElement("quote",null," ","\u201c",o.a.createElement("span",{role:"img","aria-label":"emoji-face-palm"},"\ud83e\udd26\u200d\u2640\ufe0f"),"\u201d ",o.a.createElement("i",null,"\u2014 Vanessa Seto")," ")),o.a.createElement(s.l,{padding:5,wide:!0},o.a.createElement("quote",null,"\u201cWhat the actual f#$%, this is hilarious\u201d ",o.a.createElement("i",null,"\u2014 A lot of people"))))]}},b={section1:{title:"Opening a Safe With Your Voice!",text:[o.a.createElement(s.l,null,"The arduino screaming safe is, yes, safe that will only open if you scream the correct combination. Arduino Screaming is a final project for SYDE 192. To open the safe you must \u201cscream\u201d at the safe at the correct times (in seconds) corresponding to the combination that you set. if the screaming times are correct, the safe will open! The safe uses an arduino uno, a liquid-crystal display, a sound sensor, a number of different buttons, potentiometers, and a step-motor to control the safe\u2019s open and closed states. The original prototype was constructed to fit inside a press-fit custom laser cut box.")]},section2:{title:"How Arduino Screaming Works",text:[o.a.createElement(s.l,{padding:5,wide:!0},"The safe contains an arduino board that is programmed to detect a signal sent from the sound sensor whenever a sound above a specific threshold is detected by the speaker. when a sound is detected a software interrupt ",o.a.createElement("code",null,"void sound()")," is triggered. In the interrupt the code checks if the current time corresponds to the internal timer scaled to 30 seconds using the",o.a.createElement("code",null," ISR(TIMER2_OVF_vect)")," interrupt. If the time matches, it will update the unlocked state. if all states are true then the safe will unlock by activating a servo motor. For more details about how the code works,"," ",o.a.createElement("a",{href:r.h},"check out the github"),"!")]}},w={section1:{title:"The Problem Space",text:[o.a.createElement(s.l,null,"It was time for a redesign. This website was born out of both user feedback from my previous portfolios and a need for a more practical, scalable website, where projects could be easily added or removed as my experience and portfolio grows. My previous websites were strong in some areas and weak in others. For example, while my latest portfolio was advanced from a development standpoint, and showed of my skill and ability to work with animations and experimental designs, it was \u201cquite experimental\u201d and was not designed to fill the role of a portfolio, it featured little actual work, and was a simple single-page application. From user testing and feedback, I discovered that my winter 2020 website polled well with developers, but poorly with designers. In addition to this, previous portfolios had complicated design structures or were written in vanilla javascript making scalability challenging. This website aims to confront the various design and infrastructure concerns by providing a stable, scalable and athestitically balanced website showcasing my design ","&"," ","development projects, as well as my industry experience.")]},section2:{title:"This Website",text:[o.a.createElement(s.l,{padding:5,wide:!0},"Built with React.js, this is my latest website ","&"," portfolio. It uses"," ",o.a.createElement(i.Link,{to:"/eunoia"},"eunoia"),", my open-source design system as it\u2019s infrastructure backbone, as well as Google\u2019s Material Design component library to deliver an accessible and simple user experience. The website\u2019s navigation system uses ",o.a.createElement("code",null,"react-router-dom")," ","and is built on stateless functional components allowing web pages and articles to be built in a matter of minutes. This holds many advantages, particularly when it comes to design changes, since a single design change will be automatically propagated throughout the website. Images are delivered via CDN to increase load times, and large asset imports are lazy-rendered. The website is deployed via github-actions and hosted on firebase.")]},section3:{title:"A History of Design & Development\u2026",text:[o.a.createElement(s.l,{padding:5,wide:!0},"It was a journey of ups and downs reaching this particular website. My first websites were hosted on github pages and were written in vanilla javascript using bootstrap. As I fell in love with react, I started experimenting with react single-page websites and my later websites and portfolio were built in react. As I began to get more comfortable with React I began using design tools such as Adobe XD, and development libraries like"," ",o.a.createElement("code",null,"styled-components"),"and anime.js to showcase clean user experiences on my website. Over time, my different websites have served as timestamps showing my growth as both a developer and designer, and remain as a symbol for where I have come from, and a spotlight for where I am going.")]}}},678:function(e,t,n){"use strict";n.r(t);var a=n(45),o=n(46),i=n(49),s=n(50),r=n(14),l=n(11),c=n(0),d=n.n(c),u=n(30),h=n(8),m=n(10),p=n(674),f=n(61),g=n(47),b=n(48),w=n(17),y=n(42),v=n(128),E=n(172),k=n(28),x=n(6),I=n(16),T=n(25),j=n(675);n(73),n(87);function C(){var e=Object(l.a)(["\n  margin-block-start: ",";\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  width: 100%;\n  object-fit: contain;\n  padding: 0px;\n  @media screen and (max-width: 960px) {\n    margin-block-start: 10vh;\n  }\n"]);return C=function(){return e},e}function A(){var e=Object(l.a)(["\n  margin-block-start: ",";\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  width: 85%;\n  padding: 0px;\n  @media screen and (max-width: 960px) {\n    margin-block-start: 10vh;\n  }\n"]);return A=function(){return e},e}function G(){var e=Object(l.a)(["\n  text-align: center;\n  background-color: ",";\n"]);return G=function(){return e},e}function W(){var e=Object(l.a)(["\n  text-align: center;\n"]);return W=function(){return e},e}var O=m.default.div(W()),M=m.default.div(G(),x.c.UIColors.darkGrey),D=m.default.img(A(),(function(e){return e.offsetTop?e.offsetTop:"20vh"})),P=m.default.img(C(),(function(e){return e.offsetTop?e.offsetTop:"20vh"})),z=d.a.createElement(u.a,{spacing:3},d.a.createElement(u.a,{item:!0},d.a.createElement(w.Link,{activeClass:"active",className:"about-scroller",to:"about-scroller",spy:!0,smooth:!0,duration:1e3},d.a.createElement(h.Button,{"aria-label":"Learn More"},"Learn More")),d.a.createElement("a",{href:T.e},d.a.createElement(I.g,null,d.a.createElement(I.b,{"aria-label":"View Project",transparent:!0,height:"66px"},d.a.createElement(I.d,{color:x.c.UIColors.black,scalingFactor:2,offset:"11px"}))),d.a.createElement(I.g,null,d.a.createElement(I.e,null,"View Project"))))),U=d.a.createElement("div",null,d.a.createElement(h.Menu,{config:x.b.config,options:x.b.options}),d.a.createElement(f.a,{title:"Intensif-Eye; Google Vision AI",subtitle:["A story about a hackathon project aiming for a more accessible world"],children:[z],story:!0,coverImageURL:"https://i.ibb.co/r2NBmKn/intensif-eye-render-shadow-4.png"})),q={shouldRender:!0,centerText:!0,fontOverride:"Georgia Regular",fontColor:x.c.UIColors.gold,fontSize:30,height:300,backgroundColor:x.c.UIColors.darkGrey},R=Object(r.a)({text:"Design",link:"/design"},q),S=Object(r.a)({text:"Code",link:"/code"},q),L=Object(r.a)({text:"Experience",link:"/experience"},q),F=d.a.createElement(k.a,{config:R,contentText:"Explore my design portfolio & case studies",children:d.a.createElement(I.c,{color:x.c.UIColors.white,scalingFactor:2,offset:"13px"})}),N=d.a.createElement(k.a,{config:S,contentText:"Breakdown the code behind my work & projects",children:d.a.createElement(I.c,{color:x.c.UIColors.white,scalingFactor:2,offset:"13px"})}),B=d.a.createElement(k.a,{config:L,contentText:"Internships in UX/UI design & development",children:d.a.createElement(I.c,{color:x.c.UIColors.white,scalingFactor:2,offset:"13px"})}),V=d.a.createElement(I.j,null,j.f.section1.title),Y=d.a.createElement(I.l,null,j.f.section1.text[0]),H=d.a.createElement(O,null,d.a.createElement(D,{src:"https://i.ibb.co/3SdZv0N/intensif-eye-render-4x.png",alt:"intensif-eye-render-4x",border:"0"})),X=d.a.createElement(I.j,{padding:5},j.f.section2.title),K=d.a.createElement(I.l,{padding:5,wide:!0},j.f.section2.text[0]),_=d.a.createElement(I.j,{padding:5},j.f.section3.title),J=d.a.createElement(I.l,{padding:5,wide:!0},j.f.section3.text[0]),Z=d.a.createElement(I.j,null,j.f.section4.title),$=d.a.createElement(I.l,null,j.f.section4.text[0]),Q=d.a.createElement(O,null,d.a.createElement(D,{src:"https://i.ibb.co/t2XYmnd/intensif-eye-render-single-4x.png",alt:"intensif-eye-render-single-4x",border:"0",offsetTop:"40vh"})),ee=d.a.createElement(I.j,{padding:5},j.f.section5.title),te=d.a.createElement(I.l,{padding:5,wide:!0},j.f.section5.text[0]),ne=[V,Y],ae=[H],oe=[X,K],ie=[_,J],se=[Z,$],re=[Q],le=[ee,te],ce=[d.a.createElement(M,null,d.a.createElement(P,{src:"https://i.ibb.co/CKxn8GP/intensif-eye-Board.png",alt:"intensif-eye-Board",border:"0"}))],de=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){w.Events.scrollEvent.register("begin"),w.Events.scrollEvent.register("end")}},{key:"componentWillUnmount",value:function(){w.Events.scrollEvent.remove("begin"),w.Events.scrollEvent.remove("end")}},{key:"render",value:function(){return d.a.createElement("div",{className:"Design-wrapper"},d.a.createElement(b.b,null),d.a.createElement(p.a,{children:U}),d.a.createElement(w.Element,{name:"about-scroller",className:"element"},d.a.createElement(E.b,{leftChildren:[d.a.createElement("div",null,ne.map((function(e){return d.a.createElement("div",null,e)})))],rightChildren:[d.a.createElement("div",null,ae.map((function(e){return d.a.createElement("div",null,e)})))]}),d.a.createElement(v.a,{middleChildren:[d.a.createElement("div",null,oe.map((function(e){return d.a.createElement("div",null,e)})))]}),d.a.createElement(v.a,{middleChildren:[d.a.createElement("div",null,ie.map((function(e){return d.a.createElement("div",null,e)})))]}),d.a.createElement(E.b,{leftChildren:[d.a.createElement("div",null,se.map((function(e){return d.a.createElement("div",null,e)})))],rightChildren:[d.a.createElement("div",null,re.map((function(e){return d.a.createElement("div",null,e)})))]}),d.a.createElement(v.a,{middleChildren:[d.a.createElement("div",null,le.map((function(e){return d.a.createElement("div",null,e)})))]}),d.a.createElement(v.a,{middleChildren:[d.a.createElement(O,null,d.a.createElement(h.Button,{"aria-label":"View Project",onClick:function(){return window.open(T.e,"_self")},onKeyPress:function(e){"Enter"===e.key&&window.open(T.e,"_self")}},"View Project"))]}),d.a.createElement(v.a,{middleChildren:[d.a.createElement("div",null,ce.map((function(e){return d.a.createElement("div",null,e)})))]})),d.a.createElement(y.a,{leftChildren:[F],middleChildren:[N],rightChildren:[B],noPadding:!0}),d.a.createElement(g.a,null))}}]),n}(d.a.PureComponent);t.default=de}}]);
//# sourceMappingURL=8.f6afa68c.chunk.js.map
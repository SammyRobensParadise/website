import React from 'react'

import { Link } from 'react-router-dom'
import { Text } from '../../constants/styles'
import {
  GlobalWineryNpmURL,
  GlobalWinerySandboxURL,
  eunoiaNpmURL,
  eunoiaStorybookURL,
  materialDesignURL,
  githubContributionsCounterCodeboxURL,
  githubContributionsCounterNpmURL,
  thonkJGithubURL,
  thonkJsNpmURL,
  arduinoScreamingGithubURL,
} from '../../constants/links'
export const PortfolioWinter2020Strings = {
  section1: {
    title: `The Design`,
    text: [
      `Website Winter and Spring 2020 was unique in many senses. It used was designed with an a-traditional single page layout, and used a series of strong colour systems to convey a sense of boldness. The website featured many different hover and SVG animations designed and developed by me to as a sense of movement to to the webpage. The overall goal of the portfolio was to show off some animation and react features more than showcase other types of work.`,
    ],
  },
  section2: {
    title: `The Code`,
    text: [
      `The website is built with react 16 and is hosted on firebase. It leverages a number of different modern javascript libraries to deliver a fast dynamic experience. One of my favourite features of the website is the usage of paper.js to create a custom dynamic css cursor. The website also uses anime.js to render svg animations and transition states. The website uses web pack’s code splitting feature to provide dynamic browser rendering, and uses minimal state managed by redux. Check out the source code here!`,
      `One of the most interesting challenges of this website was that of accessible design. Making AA accessible websites become more challenging when dealing with designs that do not follow traditional web design patterns, especially in relation to DOM flow. This impacts keyboard navigation. To address this problem, I implemented react-axe a dynamic accessibility auditing tool to analyze the accessibility of HTML and css rendered to the browser. I was then able to make changes drastically increasing the accessibility of the portfolio, something often overlooked on websites experimenting with unique web design patterns.`,
    ],
  },
}

export const PortfolioSummerFall2019Strings = {
  section1: {
    title: `The Story`,
    text: [
      `I decided to explore the usage of a native app-like experience to display my design and development skillset in an attempt to ask users to spend more time on each page. The goal of the portfolio (2019) was to change the traditional format of a website to more of an experience. Rather than using large amounts of text, I decided to focus on illustrations. The dark theme used is intended to create a change of scenery and provoke a certain element of suspense with the user. It also encompasses space-like themes such as rockets, futuristic robots and illustrations of advanced technology.`,
      `The Website is built with react 16 and delivers a unique experience. The website contains a state management system, treating webpages as a stack, much the same as a web browser. The internal webpage history state management simplified loading animations but caused some challenges relating to managing the browser’s history state in parallel. While this navigation experiment was interesting, for future projects I have opted to use a router system to manage webpage state in the interest of maintainability. Check out the source code here!`,
    ],
  },
}

export const IntensifEyeStrings = {
  section1: {
    title: `What it is…`,
    text: [
      `Intensif-eye is a fully functioning mobile application that I, any 3 other engineers developed and designed as part of Dubhacks, a Hackathon at the University of Washington in October 2019. We placed second for use of Google Cloud AI, and 3rd place overall out of hundreds of teams. The accompanied designs were envisioned (by me) to product-ionize the application.`,
    ],
  },
  section2: {
    title: `The Solution`,
    text: [
      `Intensif-eye at allows users to take images of text or hand writing and using Google’s vision AI API, extracts the text from the image that can be rendered to a screen. My team and I saw this incredible potential to use this powerful technology to allow people who may be visually impared in some way to access information quickly without the use of glasses or other technology. We did this by extracting text from images and presenting it to users in a high contrast, and accessible fashion.`,
    ],
  },
  section3: {
    title: `The Problem Space`,
    text: [
      `The American Foundation for the Blind estimates that over 26.9 million American adults experience some sort of vision loss, and about 41% of those people either don’t have vision correction tools or don’t have the correct prescription. The good news? over 81% of those people have smartphones! This means that a digital solution to address fixed point vision issues is statistically very accessible for many individuals, and presents a very high ROI. To ensure an adequate solution, we measured the average time it took to retrieve reading glasses, and decided to constrain ourselves to 30 seconds from the point of unreadable text is identified to the point where the user can read the rendered text (we exceeded our targets).`,
    ],
  },
  section4: {
    title: `The Design Process`,
    text: [
      `One of our team members was legally blind, and was not only our source of immense inspiration for the project, but also an amazing test user, we were able to iterate and change our preliminary designs on the fly to ensure we were factoring in issues like color blindness and contrast. For this particular project I took on the role of a developer and UX designer. Where I became responsible for optimizing the user flow of the application from launch to text identification, as well as developing the app in React Native. My featured extended design is intended to expand the feature set of the application, ready for a dev team to tackle, while retaining the original optimized flow. The app features easily accessible font-size and contrast settings, and retaining a simple color scheme of 5.94:1 contrast, exceeding W3C’s AAA standard of 4.5:1.`,
    ],
  },
  section5: {
    title: `Reflecting…`,
    text: [
      `Intensif-eye (and my teammate) raised my awareness about the importance of accessible design. It is something that we learn about in school, and design courses all the time, but it changed my perspective to see the joy and freedom that my teammate showed when using the app, even in its POC state. My raised awareness and — now passion, for accessible design prompted me to take a leading role at Hootsuite leading an effort to bring better accessible design and development practices to the product and technology team, in addition to my traditional development work.`,
    ],
  },
}

export const GrapeStrings = {
  section1: {
    title: `What is Grape?`,
    text: [
      `I had the opportunity to work with two fellow engineers to conceptualize the proof of concept for a web service that would open-source code documentation and the learning of code. This is Grape. We were frustrated with the way software documentation was traditionally created and were equally frustrated with the lack of adequate and affordable solutions to help people learn to code, or learn about code. Whether it was an experienced developer learning the in’s and out’s of a new API, or a beginner attempting to master java for the first time, we found a field with fairly limited engagement-based education solutions.`,
    ],
  },
  section2: {
    title: `My Role`,
    text: [
      <Text>
        I was brought onto the project to take control of the initial visual design, product design
        and UX design of Grape, as well as the design and software development of Grape’s
        promotional website in react.js. As part of the website design, I created a number of
        illustrations conveying the sense of empowerment associated with user-directed learning. I
        used Procreate as well as Adobe illustrator and designed the web page layout in Adobe XD.
        Using Adobe XD’s cloud features, I was able to quickly share designs with my teammates and
        iterate on designs. As part of the Proof of concept for Grape, I also developed and designed
        the Grape design system called Global-Winery.
        <Link to="/global-winery">You can read about Global-Winery Here.</Link>
      </Text>,
    ],
  },
  section3: {
    title: `Why Grape's Different`,
    text: [
      `The proof of concept for Grape was designed to show that if users were given the ability to create their own “modules” where they can use a variety of tools such as virtual IDEs and terminals as well videos, text and images to teach a range of software tools to users. Essentially a blogging platform, both private and public where people can share “modules” similar to articles that walk users through software tools. No other current product delivers a user-centered approach to learning where individuals can create immersive learning experiences for software. Our initial research shows that tools such as Grape have the potential to revolutionize the onboarding process for software developers who cited learning custom practices and systems as one of the most challenging aspects of starting a new job.`,
    ],
  },
}

export const GlobalWineryStrings = {
  section1: {
    title: `A React Library`,
    text: [
      <Text>
        Global Winery is a front-end reach library built in react.js designed for{' '}
        <Link to="/grape">Grape</Link>. The package is bundled using rollup.js and is configured for
        use alongside styled-components. It can be installed{' '}
        <a href={GlobalWineryNpmURL}>here via npm</a>. The library features a number of different
        dependency-free icons, buttons, text areas, color themes and dropdowns. Each one of these
        components are stateless functional components with a props-based interface. The components
        were designed with accessibility and keyboard functionality in mind. Another Interesting
        fact about global-winery is that it is dependency free with the one exception of{' '}
        <code>styled-components</code>.You can check out the{' '}
        <a href={GlobalWinerySandboxURL}>component sandbox here</a>, where the interface for some
        components are described.
      </Text>,
    ],
  },
  section2: {
    title: `Design & Motivation`,
    text: [
      <Text>
        My vision for Global winery was to create a simple component library that would allow other
        members of the development team to quickly prototype functional web components and show that
        the idea behind Grape was achievable, and that the technical skill and know-how was
        available on the team. It features both raised and flat components and uses a simple
        web-accessible font <i>Montserrat</i> as well as a light green and deep purple color tone,
        as well as accented blue gradients. The colors were chosen for two reasons. The first would
        be their high contrasting ratio with white, black and one another. The second being that the
        colors represent a grape vine, a key symbol of the original product vision for Grape.
      </Text>,
    ],
  },
}
export const RectStrings = {
  section1: {
    title: `Rec'd`,
    text: [
      <Text>
        Rect is currently in progress. I am building Rec’t with
        <a href="https://www.linkedin.com/in/kira-w/">Kira Wadden</a>, a peer of mine from the
        University of Waterloo. As music lovers, we found that there was no way to easily share the
        music that we love to listen to with our friends, or compile a selection of that music into
        a playlist for everyone to enjoy! Rec’t will address this problem. It will serve as a social
        platform connected to a user’s Spotify and Facebook account, allowing users to share the
        music they love, with the people they love! It will be a mobile application built in react
        native and served with a golang microservice-based backend and a mongoDB database.
      </Text>,
    ],
  },
  section2: {
    title: `More to come…`,
    text: [],
  },
}

export const EunoiaStrings = {
  section1: {
    title: `Eunoia's Design`,
    text: [
      <Text>
        Eunoia is defined as the goodwill a speaker cultivates between themself and their audience,
        or a condition of receptivity. Eunoia, the design system, was created and is used to convey
        a sense of appreciation for traditional web design, while still maintaining and exploring
        innovating design methods and leveraging new technology. The system is designed, and
        developed by me, and is open sourced under an MIT licence, meaning anyone is welcome to use
        my design components. The design system is built with accessibility in mind and features
        high-contrast components. It is built on{' '}
        <a href={materialDesignURL}>Google’s material design</a> system. I chose to do this for a
        number of reasons. Based on the design principle of Jakob’s Law, which states that since
        users will on average spend most of their time (90%) on other sites, thus users would expect
        my site to work in a similar fashion. Leveraging best practices of material design ensures a
        higher sense of comfort amongst users using the site. You can explore the components in a{' '}
        <a href={eunoiaStorybookURL}>live sandbox via storybook</a>, or{' '}
        <a href={eunoiaNpmURL}>download it via npm</a>.
      </Text>,
    ],
  },
  section2: {
    title: `Eunoia's Code`,
    text: [
      <Text padding={5} wide>
        Eunoia is written in typescript and uses strict type checking to ensure that component
        interfaces are used correctly. Components are built to react and are purely functional in
        nature meaning that you don’t need to worry about managing the internal state of a component
        since it is determined simply by its props. The components are in part built using
        <code>styled-components</code> and thus are extensible and can have their styles overridden.
        The library is <a href={eunoiaNpmURL}>downloadable via npm</a>, and components can be
        previewed via <a href={eunoiaStorybookURL}>storybook</a>. As I continue to grow my site, I
        will continue to maintain and update eunoia adding new components!
      </Text>,
    ],
  },
}

export const GithubContributionsCounterStrings = {
  section1: {
    title: `What it is`,
    text: [
      <Text>
        Github-contruibutions-counter is a node.js package that has a single interface function that
        allows users to easily get the Github contributions history for a user based on their
        username alone. It can be used on the server, or client-side. I created, and open-sourced
        the package because I wanted a way to share my contribution history on my website, and I
        felt that the library could be useful for other developers who wanted to access the
        contribution history for various users via a simple, single-function interface. The package
        allows you to get the contributions history for a user based on the last year, the total
        contributions of the user, or the contribution history categorized by year. You can{' '}
        <a href={githubContributionsCounterNpmURL}>download the package via NPM</a>, or{' '}
        <a href={githubContributionsCounterCodeboxURL}>try it out via codebox</a>
      </Text>,
    ],
  },
  section2: {
    title: `Development Process`,
    text: [
      <Text padding={5} wide>
        The package is written in vanilla javascript and uses two external dependencies to extract
        data. Since github does not support contribution history via their API, the only option is
        to scrape a user’s public github profile for their contributions history. The async package
        uses axios to make a simple get request to a users github profile, using a proxy for usage
        in the browser. It then parses the HTML retrieved from the get-request using{' '}
        <code>cheerio.js</code>, creating a virtual DOM object, and accesses DOM attributes relating
        to contribution history. After some sanitizing, and cleanup, the results are returned
        asynchronously in the form of an array of objects containing contribution history for the
        user! You can <a href={githubContributionsCounterNpmURL}>download the package via NPM</a>,
        or <a href={githubContributionsCounterCodeboxURL}>try it out via codebox</a>
      </Text>,
    ],
  },
}

export const ThonkJsStrings = {
  section1: {
    title: `What it is… a Thonk`,
    text: [
      <Text>
        Thonk can be described as the sound a sad, but cute thing makes when it plops. It can also
        be described as the emotion felt when something goes hilariously awry or the action of
        thinking strangely. Thonk.js is an open-source node.js package written by me (in materials
        chemistry class instead of actually doing chemistry) that uses natural language processing
        to replace all the appropriate words in a given string with either, thonk, thonked, or
        thonking. This is known as “thonkifying the strings”. You can also use the Chonk method
        provided in thonk.js to “chonkify a string”. A chonk refers to a large but cute animal, most
        commonly a cat. More surprisingly, after I open-sourced the package, it now has hundreds of
        downloads via npm. Want to join me on this absurd journey of natural language processing?
        <a href={thonkJsNpmURL}>Download the package via npm</a>, or{' '}
        <a href={thonkJGithubURL}>contribute to the project on github!</a>
      </Text>,
    ],
  },
  section2: {
    title: `User Testimonials`,
    text: [
      <div>
        <Text padding={5} wide>
          <quote>
            “What even…” <i>—Kira Wadden</i>
          </quote>
        </Text>
        <Text padding={5} wide>
          <quote>
            {' '}
            “
            <span role="img" aria-label="emoji-face-palm">
              🤦‍♀️
            </span>
            ” <i>— Vanessa Seto</i>{' '}
          </quote>
        </Text>
        <Text padding={5} wide>
          <quote>
            “What the actual f#$%, this is hilarious” <i>— A lot of people</i>
          </quote>
        </Text>
      </div>,
    ],
  },
}

export const ArduinoScreamingStrings = {
  section1: {
    title: `Opening a Safe With Your Voice!`,
    text: [
      <Text>
        The arduino screaming safe is, yes, safe that will only open if you scream the correct
        combination. Arduino Screaming is a final project for SYDE 192. To open the safe you must
        “scream” at the safe at the correct times (in seconds) corresponding to the combination that
        you set. if the screaming times are correct, the safe will open! The safe uses an arduino
        uno, a liquid-crystal display, a sound sensor, a number of different buttons,
        potentiometers, and a step-motor to control the safe’s open and closed states. The original
        prototype was constructed to fit inside a press-fit custom laser cut box.
      </Text>,
    ],
  },
  section2: {
    title: `How Arduino Screaming Works`,
    text: [
      <Text padding={5} wide>
        The safe contains an arduino board that is programmed to detect a signal sent from the sound
        sensor whenever a sound above a specific threshold is detected by the speaker. when a sound
        is detected a software interrupt <code>void sound()</code> is triggered. In the interrupt
        the code checks if the current time corresponds to the internal timer scaled to 30 seconds
        using the
        <code> ISR(TIMER2_OVF_vect)</code> interrupt. If the time matches, it will update the
        unlocked state. if all states are true then the safe will unlock by activating a servo
        motor. For more details about how the code works,{' '}
        <a href={arduinoScreamingGithubURL}>check out the github</a>!
      </Text>,
    ],
  },
}

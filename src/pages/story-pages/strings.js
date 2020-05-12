import React from 'react'

import { Link } from 'react-router-dom'
import { Text } from '../../constants/styles'
import { GlobalWineryNpmURL, GlobalWinerySandboxURL } from '../../constants/links'
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
        web-accessible font <i>Montserrat</i> as well as a light green and deep purple color tone, as well
        as accented blue gradients. The colors were chosen for two reasons. The first would be their
        high contrasting ratio with white, black and one another. The second being that the colors
        represent a grape vine, a key symbol of the original product vision for Grape.
      </Text>,
    ],
  },
}

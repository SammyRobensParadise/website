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

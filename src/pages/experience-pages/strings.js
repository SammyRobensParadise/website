import React, { Fragment } from 'react'

// import { Link } from 'react-router-dom'
import { Text } from '../../constants/styles'

export const HootsuiteStrings = {
  section1: {
    title: `My Role`,
    text: [
      <Text padding={5} wide>
        I was Full Stack Developer on the Plan {`&`} Create team at Hootsuite. As part of the Plan{' '}
        {`&`}
        Create team, I was responsible to onwing, maintaining and building all parts of Hootsuite
        that dealt with the scheduling, and creation of content, used by 18 million users, and
        shared with hundreds of millions of users across multiple social media platforms. I worked
        primarily with Hootsuite’s react-based frontend building features that enhanced user’s
        abilities to schedule content across multiple timezones. Much love for the team at
        Hootsuite!
      </Text>,
    ],
  },
  section2: {
    title: `Contributions`,
    text: [
      <Fragment>
        <Text padding={5} wide>
          I had the tremendous opportunity to work on multiple projects while at Hootsuite, and was
          able to contribute to all aspects of the software development lifecycle. I Implemented
          front-end calendar service redesign to meet marketing needs of Hootsuite’s global clients
          in react.js, allowing users to customize how they view a week’s content schedule.
        </Text>
        <Text padding={5} wide>
          I championed efforts along with a team of front-end developers to promote flat react
          architecture, reducing the number of render calls that reduced app TTI and degraded KPI
          conformance. I also led an initiative backed by 130 developers to create W3C AA
          accessibility implementation strategy at Hootsuite and developed accessibility CI/CD
          pipeline automation to ensure that developers were deploying code that met accessibility
          standards.
        </Text>
        <Text padding={5} wide>
          I also led an initiative backed by 130 developers to create W3C AA accessibility
          implementation strategy at Hootsuite and developed accessibility CI/CD pipeline automation
          to ensure that developers were deploying code that met accessibility standards.
        </Text>
      </Fragment>,
    ],
  },
}

export const FingerFoodATGStrings = {
  section1: {
    title: `My Role`,
    text: [
      <Text padding={5} wide>
        As a QA Lead and UX Developer at Finger Food Advanced Technology Group (now part of Unity
        Technologies). While I am unable to disclose the name of companies and specific projects I
        was part of due to non-disclosure agreements, I had the opportunity to work with some of the
        world’s leading companies in fashion, gaming and mining, developing and structuring
        everything from bluetooth connected experiences, to computer vision-guided mining software,
        and even XR mobile applications.
      </Text>,
    ],
  },
  section2: {
    title: `Contributions`,
    text: [
      <Fragment>
        <Text padding={5} wide>
          I designed and implemented data-driven UX analysis for a bluetooth connected experience
          app to quantify engagement growth potential. I was given the opportunity to work with an
          international design team to quantify core product design decisions based on the
          receptivity and understanding users showed during a series of user testing sessions. These
          sessions involved tree testing, as well as cognitive walkthroughs of the product
          prototypes.
        </Text>
        <Text padding={5} wide>
          I developed a system to quantify the accuracy of a computer vision system designed to
          automate mining processes. I wrote code to analyse hours of video recorded of automated
          gantry movement to determine if the tracking system could accurately determine the
          location of a target in 3D space over long periods of time
        </Text>
        <Text padding={5} wide>
          During my time at Finger Food ATG, in total, I led the QA Initiatives for more than 3
          projects from ideation through to product delivery working with all kinds of clients, and
          was able to reduce test infrastructure overhead by 50% for web-based projects!
        </Text>
      </Fragment>,
    ],
  },
}

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
    title: `Contrubutions`,
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

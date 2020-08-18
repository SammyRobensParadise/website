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

export const EnvCanadaStrings = {
  section1: {
    title: `My Role`,
    text: [
      <Text padding={5} wide>
        As a Software Engineer on the Data Team With Environment Canada, I worked closely with the
        Transportation Division. This Group is responsible for ensuring that transportation vehicles
        whether consumer cars, or luxury boats meet Canada’s environmental regulations. Importers
        and manufacturers are required to report emissions information for vehicles sold or imported
        into Canada, and as Canada moves to combat climate change, these regulations become critical
        to meeting national emissions goals. I was given the opportunity to help build and document
        infrastructure allowing auto manufacturers to better report emissions data and work to
        develop greener consumer vehicles.
      </Text>,
    ],
  },
  section2: {
    title: `Contributions`,
    text: [
      <Fragment>
        <Text padding={5} wide>
          I leveraged SQL and Microsoft SQL server to iteratively develop and deploy testing scripts
          for complex relational databases governing emissions data for thousands of vehicles
          models.
        </Text>
        <Text padding={5} wide>
          I developed SQL queries to test critical business rules governing data validation,
          ensuring that auto manufacturers could only enter data that meet specific requirements.
          This ensured that auto manufacturers could not submit erroneous or false data.
        </Text>
        <Text padding={5} wide>
          I also documented data projects for use by automotive industry stakeholders and key users
          to inform them of the added data reporting requirements and new regulations initiated by
          the federal government to meet emissions reduction targets.
        </Text>
      </Fragment>,
    ],
  },
}

export const PumaStrings = {
  section1: {
    title: `My Role`,
    text: [
      <Text padding={5} wide>
        As the leading designer and systems engineer at PUMA, my role is to continuously improve and
        innovate on the product development and user experience of PUMA, a complete utility
        monitoring studio, giving clients unparalleled insights into their energy usage. This allows
        them to improve and optimize their energy usage. I am responsible for user experience
        research, graphic and interface design, as well as systems design and implementation. My
        role takes me (atypically) to every part of the product design lifecycle to deliver maximum
        effectiveness and innovative strategies!
      </Text>,
    ],
  },
  section2: {
    title: `Contributions`,
    text: [
      <Text padding={5} wide>
        Working with a small team provided the opportunity to dive into each part of the software
        design lifecycle. I made a number of substantial contributions to the PUMA application on
        both the interface and user experience, as well as the operations and technical
        infrastructure level. Part of my portfolio was to capture and document the problems and
        challenges that the product was facing.{' '}
      </Text>,
    ],
  },
  section3: {
    title: `The Design System`,
    text: [
      <Text padding={5} wide>
        I conducted several design walkthroughs, card sorting and tree tests to identify areas where
        users struggled the greatest and the product experience was at its weakest. I worked closely
        with clients and stakeholders to create prototypes and mockups to improve the interface of
        PUMA. I designed a complete component design system and worked closely with PUMA’s marketing
        team to curate a new W3C AAA accessible color palette. On the development side, I also built
        a front-end component library to be used by PUMA to increase UI consistency of user-facing
        code, improve scalability, and improve accessibility throughout the product. The creation of
        the design system cut down 30,000 lines of code within the PUMA application.{' '}
      </Text>,
    ],
  },
  section4: {
    title: `Source Control Migration`,
    text: [
      <Text padding={5} wide>
        I championed the move of PUMA from Subversion (SVN) to Git, using GitHub. The move involved
        migrating 10 projects from a private server to GitHub, a cloud-based development platform. I
        wrote several Shell scripts to automate migrations and successfully transitioned all
        projects and their CI/CD pipelines over to GitHub with close to no disturbances to ongoing
        product development.
      </Text>,
    ],
  },
}

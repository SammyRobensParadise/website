import React from 'react'
import { Card, BannerCard } from 'eunoia'
import styled from 'styled-components'
import { IllustrationsBucketURL, PostersBucketURL } from './links'

// override the link styling
const A = styled.a`
  text-decoration: none;
`
const Wrapper = styled.div`
  padding-block-start: 6vh;
`
/**
 * Default cards config
 */
const defaultCardConfig = {
  fontOverride: 'Georgia Regular',
  fontSize: '18px',
  fontSizeTitle: '30px',
  shouldRender: true,
}

/**
 * Article cards
 */

export const IntensifEyeArticleCard = (
  <Wrapper>
    <Card
      config={{
        title: `Design: AI for better Vision`,
        content: `A story about a hackathon project aiming for a more accessible world`,
        imageURL: 'https://i.ibb.co/6m2hkqy/intensifeye-logo.png',
        imageAltText: `A story about a hackathon project aiming for a more accessible world`,
        link: '/#',
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

export const AccessibleReactAppCard = (
  <Wrapper>
    <Card
      config={{
        title: `Building Accessibility into your React App`,
        content: `How to setup react accessibility auditing with react-axe and best practices with a11y`,
        imageURL: 'https://i.ibb.co/MkgDf3r/a11y-logo.png',
        imageAltText: `How to setup react accessibility auditing with react-axe and best practices with a11y`,
        link: '/#',
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

/**
 * Design Cards
 */

export const IntensifEyeDesignCard = (
  <Wrapper>
    <Card
      config={{
        title: `Intensif-Eye; Google Vision AI, Design`,
        content: `A more accessible world throught AI`,
        imageURL: 'https://i.ibb.co/Kb6F9kF/intensif-eye-render-logo.png',
        link: '/intensif-eye',
        imageAltText: `A more accessible world throught AI`,
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

export const GrapeDesignCard = (
  <Wrapper>
    <Card
      config={{
        title: `Grape; Changing the way we learn code`,
        content: `The deisgn of a tool to open source learning`,
        imageURL: 'https://i.ibb.co/syVpZhf/grape-promo.png',
        imageAltText: `The deisgn of a tool to open source learning code`,
        link: '/grape',
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)
export const Portfolio2020Card = (
  <Wrapper>
    <Card
      config={{
        title: `Website: Winter & Spring 2020; Design`,
        content: `The motivation behind bold block colors and custom animations`,
        imageURL: 'https://i.ibb.co/6HhtjHZ/portfolio-winter-20-logo.png',
        imageAltText: `The motivation behind bold block colors and custom animations`,
        link: '/website-winter-2020',
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

export const Portfolio2019Card = (
  <Wrapper>
    <Card
      config={{
        title: `Website: Summer & Fall 2019; Design`,
        content: `The design thinking behind my first seasonal portfolio`,
        imageURL: 'https://i.ibb.co/mDP4djv/portfolio-spring-19-logo.png',
        imageAltText: `The design thinking behind my first seasonal portfolio`,
        link: '/website-summer-fall-2019',
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

export const BlanksDesignProblemCard = (
  <Wrapper>
    <Card
      config={{
        title: `Solving ____’s UX design problem`,
        content: `How I created a system for ___ to quantify the fun of their mobile app, and be the first of its kind to hit the market.`,
        imageURL: 'https://i.ibb.co/bLr6QtJ/blank-project-logo.png',
        imageAltText: `How I created a system for ___ to quantify the fun of their mobile app, and be the first of its kind to hit the market.`,
        link: '/#',
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

export const IllustrationsCard = (
  <Wrapper>
    <A href={IllustrationsBucketURL}>
      <Card
        config={{
          title: `Illustrations…`,
          content: `I draw things, check them out!`,
          imageURL: 'https://i.ibb.co/WkN8RtC/sammy-illustraions-logo.png',
          imageAltText: `Why I draw things, how I draw them and inspirations!`,
          ...defaultCardConfig,
        }}
      />
    </A>
  </Wrapper>
)

export const RecdCard = (
  <Wrapper>
    <Card
      config={{
        title: `Rec'd; collaborate on music sharing`,
        content: `A ongoing music app grown from friends and a love for music.`,
        imageURL: 'https://i.ibb.co/L9CkY6w/rect-logo.png',
        imageAltText: `A ongoing music app grown from friends and a love for music.`,
        link: '/recd',
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)
export const GlobalWineryDesignCard = (
  <Wrapper>
    <Card
      config={{
        title: `Global-Winery; The Design System`,
        content: `The proposed design system beind Grape`,
        imageURL: 'https://i.ibb.co/ynJR4TM/global-winery-logo.png',
        imageAltText: `The proposed design system beind Grape`,
        link: '/global-winery',
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

export const PostersDesignCard = (
  <Wrapper>
    <A href={PostersBucketURL}>
      <Card
        config={{
          title: `Posters… their process and quirks`,
          content: `A gallery of experiments`,
          imageURL: 'https://i.ibb.co/M86hP7B/posters-logo.png',
          imageAltText: `A gallery of experiments`,
          ...defaultCardConfig,
        }}
      />
    </A>
  </Wrapper>
)
/**
 * Code Cards
 */

export const EunoiaCodeCard = (
  <Wrapper>
    <Card
      config={{
        title: `Eunoia - εὔνοιᾰ: my simple open source react library`,
        content: `Discover my design system behind this website with thousands of downloads`,
        imageURL: 'https://i.ibb.co/sW4T3Bz/eunoia-logo.png',
        imageAltText: `Discover my design system behind this website with thousands of downloads`,
        link: '/eunoia',
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

export const GlobalWineryCodeCard = (
  <Wrapper>
    <Card
      config={{
        title: `Global-Winery: React Library`,
        content: `A front end react library designed by me used by grape 🍇and open sourced with ❤️ `,
        imageURL: 'https://i.ibb.co/ynJR4TM/global-winery-logo.png',
        imageAltText: `A front end react library designed by me used by grape 🍇and open sourced with ❤️`,
        link: '/global-winery',
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

export const Portfolio2020CodeCard = (
  <Wrapper>
    <Card
      config={{
        title: `Website: Winter & Spring 2020; React.js`,
        content: `A story about an experiment with svg animations redux and modern javascript framworks`,
        imageURL: 'https://i.ibb.co/6HhtjHZ/portfolio-winter-20-logo.png',
        imageAltText: `A story about an experiment with svg animations redux and modern javascript framworks`,
        link: '/website-winter-2020',
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

export const GithubContributionsCounterCodeCard = (
  <Wrapper>
    <Card
      config={{
        title: `Github Contributions Counter; node.js`,
        content: `A simple javascript API allowing users to get their contribution history based on their github username!`,
        imageURL: 'https://i.ibb.co/tq8VpG9/github-contributions-counter-logo.png',
        imageAltText: `A simple javascript API allowing users to get their contribution history based on their github username!`,
        link: '/github-contributions-counter',
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

export const ThonkJSCodeCard = (
  <Wrapper>
    <Card
      config={{
        title: `Thonk.js; node.js`,
        content: `Explore this gross misuse of AI and natural language processing to cause havoc on strings`,
        imageURL: 'https://i.ibb.co/BC6bxb5/thonk-js-logo.png',
        imageAltText: `Explore this gross misuse of AI and natural language processing to cause havoc on strings`,
        link: '/thonk-js',
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

export const IntensifEyeCodeCard = (
  <Wrapper>
    <Card
      config={{
        title: `Intensif-Eye; Google Vision AI, Design; React-Native`,
        content: `The code behind Intensif-Eye, a project to help those with visual impairments`,
        imageURL: 'https://i.ibb.co/6m2hkqy/intensifeye-logo.png',
        link: '/intensif-eye',
        imageAltText: `The code behind Intensif-Eye, a project to help those with visual impairments`,
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

export const ArduinoScreamingCodeCard = (
  <Wrapper>
    <Card
      config={{
        title: `Arduino-Screaming; C/C++`,
        content: `Have you ever wanted a safe that will only open if you scream correctly at it? well look no further!`,
        imageURL: 'https://i.ibb.co/DChmq4z/arduino-screaming-safe-logo.png',
        link: '/arduino-screaming',
        imageAltText: `Have you ever wanted a safe that will only open if you scream correctly at it? well look no further!`,
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

export const ThisWebsiteCodeCard = (
  <Wrapper>
    <Card
      config={{
        title: `This Website, the making, react.js`,
        content: `How I build react website using routers, styled-components, firebase and functional components`,
        imageURL: 'https://i.ibb.co/ZNRjyHq/this-website-making-logo.png',
        link: '/#',
        imageAltText: `How I build react website using routers, styled-components, firebase and functional components`,
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

export const Portfolio2019CodeCard = (
  <Wrapper>
    <Card
      config={{
        title: `Website: Summer & Fall 2019: React.js`,
        content: `The code behind my first seasonal portfolio`,
        imageURL: 'https://i.ibb.co/mDP4djv/portfolio-spring-19-logo.png',
        imageAltText: `The code behind my first seasonal portfolio`,
        link: '/website-summer-fall-2019',
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

/**
 * ExperienceCards
 */

export const HootsuiteExperienceCard = (
  <Wrapper>
    <BannerCard
      activeSection={null}
      config={{
        title: `Full Stack Software Developer, Hootsuite`,
        content: (
          <div>
            <p>
              <i>
                <h3>{`Sept 19 - Dec 19`}</h3>
              </i>
            </p>
            <p>{`Wrote and deployed code to 18 million users on a daily basis, driving product growth and an unparalleled tool belt to social media gurus.`}</p>
          </div>
        ),
        imageURL: 'https://i.ibb.co/C9rfP1T/hootsuite-logo.png',
        imageAltText: `Wrote and deployed code to 18 million users on a daily basis, driving product growth and an unparalleled tool belt to social media gurus.`,
        link: '/#',
        imageWidth: 300,
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

export const HootsuiteExperienceCardMobile = (
  <Wrapper>
    <Card
      activeSection={null}
      config={{
        title: `Full Stack Software Developer, Hootsuite`,
        content: (
          <div>
            <p>
              <i>
                <h3>{`Sept 19 - Dec 19`}</h3>
              </i>
            </p>
            <p>{`Wrote and deployed code to 18 million users on a daily basis, driving product growth and an unparalleled tool belt to social media gurus.`}</p>
          </div>
        ),
        imageURL: 'https://i.ibb.co/C9rfP1T/hootsuite-logo.png',
        imageAltText: `Wrote and deployed code to 18 million users on a daily basis, driving product growth and an unparalleled tool belt to social media gurus.`,
        link: '/#',
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

export const FingerFoodExperienceCard = (
  <Wrapper>
    <BannerCard
      activeSection={null}
      config={{
        title: `UX Developer & QA Lead, F.F.S, (Unity Technologies)`,
        content: (
          <div>
            <p>
              <i>
                <h3>{`Sept 18 - May 19`}</h3>
              </i>
            </p>
            <p>{`I developed a system to quantify UX for world class brands like LEGO, and led QA infrastructure development on bleeding edge mixed reality projects.`}</p>
          </div>
        ),
        imageURL: 'https://i.ibb.co/ypgHtCr/finger-food-experience-logo.png',
        imageAltText: `I developed a system to quantify UX for world class brands like LEGO, and led QA infrastructure development on bleeding edge mixed reality projects.`,
        link: '/#',
        imageWidth: 300,
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)
export const FingerFoodExperienceCardMobile = (
  <Wrapper>
    <Card
      activeSection={null}
      config={{
        title: `UX Developer & QA Lead, F.F.S, (Unity Technologies)`,
        content: (
          <div>
            <p>
              <i>
                <h3>{`Sept 18 - May 19`}</h3>
              </i>
            </p>
            <p>{`I developed a system to quantify UX for world class brands like LEGO, and led QA infrastructure development on bleeding edge mixed reality projects.`}</p>
          </div>
        ),
        imageURL: 'https://i.ibb.co/ypgHtCr/finger-food-experience-logo.png',
        imageAltText: `I developed a system to quantify UX for world class brands like LEGO, and led QA infrastructure development on bleeding edge mixed reality projects.`,
        link: '/#',
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

export const EnvironmentCannadaExperienceCard = (
  <Wrapper>
    <BannerCard
      activeSection={null}
      config={{
        title: `Software Engineer, Environment Canada`,
        content: (
          <div>
            <p>
              <i>
                <h3>{`Jan 18 - May 18`}</h3>
              </i>
            </p>
            <p>{`Worked with the transportation division to develop software engineering solutions assisting regulatory administration.`}</p>
          </div>
        ),
        imageURL: 'https://i.ibb.co/dtchLwB/env-logo.png',
        imageAltText: `Worked with the transportation division to develop software engineering solutions assisting regulatory administration.`,
        link: '/#',
        imageWidth: 300,
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)
export const EnvironmentCannadaExperienceCardMobile = (
  <Wrapper>
    <Card
      activeSection={null}
      config={{
        title: `Software Engineer, Environment Canada`,
        content: (
          <div>
            <p>
              <i>
                <h3>{`Jan 18 - May 18`}</h3>
              </i>
            </p>
            <p>{`Worked with the transportation division to develop software engineering solutions assisting regulatory administration.`}</p>
          </div>
        ),
        imageURL: 'https://i.ibb.co/dtchLwB/env-logo.png',
        imageAltText: `Worked with the transportation division to develop software engineering solutions assisting regulatory administration.`,
        link: '/#',
        imageWidth: 300,
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

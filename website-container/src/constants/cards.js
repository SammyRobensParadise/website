import React from 'react'
import { Card } from 'eunoia'
import styled from 'styled-components'

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
        imageURL: 'https://i.ibb.co/r2NBmKn/intensif-eye-render-shadow-4.png',
        link: '/#',
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
        content: `The deisgn of a tool to open source learning code`,
        imageURL: 'https://i.ibb.co/syVpZhf/grape-promo.png',
        imageAltText: `The deisgn of a tool to open source learning code`,
        link: '/#',
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
        link: '/#',
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
        link: '/#',
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
    <Card
      config={{
        title: `Illustrations… and their stories`,
        content: `Why I draw things, how I draw them and inspirations!`,
        imageURL: 'https://i.ibb.co/WkN8RtC/sammy-illustraions-logo.png',
        imageAltText: `Why I draw things, how I draw them and inspirations!`,
        link: '/#',
        ...defaultCardConfig,
      }}
    />
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
        link: '/#',
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
        link: '/#',
        ...defaultCardConfig,
      }}
    />
  </Wrapper>
)

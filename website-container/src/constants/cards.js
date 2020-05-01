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

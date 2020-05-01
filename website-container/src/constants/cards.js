import React from 'react'
import { Card } from 'eunoia'

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
  <Card
    config={{
      title: `Design: AI for better Vision`,
      content: `A story about a hackathon project aiming for a more accessible world`,
      link: '/#',
      ...defaultCardConfig,
    }}
  />
)

export const AccessibleReactAppCard = (
  <Card
    config={{
      title: `Building Accessibility into your React App`,
      content: `How to setup react accessibility auditing with react-axe and best practices with a11y`,
      link: '/#',
      ...defaultCardConfig,
    }}
  />
)

/**
 * Design Cards
 */

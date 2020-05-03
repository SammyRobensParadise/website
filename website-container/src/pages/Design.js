import React from 'react'
// components
import { Cover } from '../components/Cover'
import { SectionTitle } from '../components/SectionsTitle'
import { Footer } from '../components/Footer'
import { SocialButtons } from '../components/Social'
import { Menu } from 'eunoia'
import { Button } from 'eunoia'
import { TriSection } from '../components/TriSection'
// constants
import {
  IntensifEyeDesignCard,
  GrapeDesignCard,
  Portfolio2020Card,
  Portfolio2019Card,
  BlanksDesignProblemCard,
  IllustrationsCard,
  RectCard,
} from '../constants/cards'
import styled from 'styled-components'
import { MenuConfig } from '../constants/config'
// css
import '../css/styles/styles.css'
import '../css/styles/App.css'

// strings ****
const design = `Design`
const designSubtitle = `Bold and creative solutions`
const exploreMyWork = `Explore my work`
// components
const CoverChildren = (
  <div>
    <Menu config={MenuConfig.config} options={MenuConfig.options} />
    <SectionTitle
      title={design}
      subtitle={[designSubtitle]}
      children={[<Button transparent>{exploreMyWork}</Button>]}
    />
  </div>
)

// cards
const designCardsLeft = [Portfolio2020Card, Portfolio2019Card, BlanksDesignProblemCard]
const designCardsMiddle = [IntensifEyeDesignCard, GrapeDesignCard, IllustrationsCard]
const designCardsRight = [RectCard]
const ScrollArea = styled.div`
  height: 1000px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  padding-block-end: 6vh;
`

// class Definition
class Design extends React.PureComponent {
  render() {
    return (
      <div className="Design-wrapper">
        <SocialButtons />
        <Cover children={CoverChildren} />
        <TriSection
          leftChildren={[
            <ScrollArea>
              {designCardsLeft.map((e) => (
                <div>{e}</div>
              ))}
            </ScrollArea>,
          ]}
          middleChildren={[
            <ScrollArea>
              {designCardsMiddle.map((e) => (
                <div>{e}</div>
              ))}
            </ScrollArea>,
          ]}
          rightChildren={[
            <ScrollArea>
              {designCardsRight.map((e) => (
                <div>{e}</div>
              ))}
            </ScrollArea>,
          ]}
        />
        <Footer />
      </div>
    )
  }
}

export default Design

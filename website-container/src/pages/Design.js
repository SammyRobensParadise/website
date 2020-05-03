import React from 'react'
import { Cover } from '../components/Cover'
import { SectionTitle } from '../components/SectionsTitle'
import { Footer } from '../components/Footer'
import { SocialButtons } from '../components/Social'
import { Menu } from 'eunoia'
import { MenuConfig } from '../constants/config'
import { Button } from 'eunoia'
import { IntensifEyeDesignCard, GrapeDesignCard } from '../constants/cards'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import { UIStyle } from '../constants/config'

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
      children={[<Button transparent >{exploreMyWork}</Button>]}
    />
  </div>
)

const designCards = [IntensifEyeDesignCard, GrapeDesignCard]
const ScrollArea = styled.div`
  height: 700px;
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
        <Footer />
      </div>
    )
  }
}

export default Design

import React from 'react'
import { Cover } from '../components/Cover'

import { Footer } from '../components/Footer'
import { SocialButtons } from '../components/Social'
import { Menu, SectionHeader } from 'eunoia'
import { MenuConfig } from '../constants/config'
import {
  IntensifEyeArticleCard,
  AccessibleReactAppCard,
  IntensifEyeDesignCard,
  GrapeDesignCard,
  EunoiaCodeCard,
  GlobalWineryCodeCard,
} from '../constants/cards'
import { Grid } from '@material-ui/core'
import { Button, CircleButton, RightArrow, DownArrow } from 'eunoia'
import styled from 'styled-components'
import { UIStyle } from '../constants/config'

// css
import '../css/styles/styles.css'
import '../css/styles/App.css'

// components
const CoverChildren = (
  <div>
    <Menu config={MenuConfig.config} options={MenuConfig.options} />
  </div>
)
// strings ****

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

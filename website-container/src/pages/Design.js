import React from 'react'
import { Cover } from '../components/Cover'
import { TriSectionHeader } from '../components/TriSectionHeader'
import { MainTitle } from '../components/MainTitle'

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
// strings ****

const articleCards = [IntensifEyeArticleCard, AccessibleReactAppCard]
const designCards = [IntensifEyeDesignCard, GrapeDesignCard]
const codeCards = [EunoiaCodeCard, GlobalWineryCodeCard]
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
    {//    <Cover children={CoverChildren} />
    }

        <Footer />
      </div>
    )
  }
}

export default Design

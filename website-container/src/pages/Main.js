import React from 'react'
import '../css/styles/App.css'
import { Cover } from '../components/Cover'
import { MainTitle } from '../components/MainTitle'
import { Menu } from 'eunoia'
import { MenuConfig } from '../constants/config'
import { Grid } from '@material-ui/core'
import { Button, CircleButton, RightArrow } from 'eunoia'
import styled from 'styled-components'
import { UIStyle } from '../constants/config'
// css
import '../css/styles/styles.css'

// strings
const name = `Sammy Robens-Paradise`
const uxDesigner = `UX DESIGNER`
const Developer = `DEVELOPER`
const Resume = `Resume`
// components
const ActionButton = styled(Button)`
  margin: 0;
  text-align: left;
  font: Regular 52px/59px Georgia;
  letter-spacing: 0px;
  color: ${UIStyle.UIColors.white};
  opacity: 1 !important;
  font-weight: 100;
  width: 200px;
  text-align: center;
`
const ActionCircleButton = styled(CircleButton)`
  padding-top: 18px;
  display: inline-block;
  transform: translateY(20px);
`
const ActionRightArrow = styled(RightArrow)`
  margin-bottom: 1rem;
`
const ActionWrapper = styled.div`
  padding-left: 4rem;
  display: inline-block;

`
const CoverActionButtons = (
  <Grid spacing={3}>
    <Grid item>
      <ActionButton transparent>{Resume}</ActionButton>
      <ActionWrapper>
        <ActionCircleButton transparent height={'66px'}>
          <ActionRightArrow color={UIStyle.UIColors.white} scalingFactor={2.5} offset={'10px'} />
        </ActionCircleButton>
      </ActionWrapper>
    </Grid>
  </Grid>
)
const CoverChildren = (
  <div>
    <Menu config={MenuConfig.config} options={MenuConfig.options} />
    <MainTitle title={name} subtitle={[uxDesigner, Developer]} children={[CoverActionButtons]} />
  </div>
)
// class
class Main extends React.PureComponent {
  render() {
    return (
      <div>
        <Cover children={CoverChildren} />
      </div>
    )
  }
}

export default Main

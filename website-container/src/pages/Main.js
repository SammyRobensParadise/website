import React from 'react'
import '../css/styles/App.css'
import { Cover } from '../components/Cover'
import { MainTitle } from '../components/MainTitle'
import { MainExplainationGrid } from '../components/MainExplainationGrid'
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
const ExperienceAndProjects = `Experience & Projects`
const skipFluff = `Skip the fluff.`
const skipFlufftext = `I am Sammy Robens-Paradise from the University of Waterloo and I study the ways humans interface with technology. I have worked with companies like LEGO, Hootsuite, Kroger, and Lululemon to create beautiful products and experiences.`
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
  @media screen and (max-width: 770px) {
    padding-left: 0rem;
    display: block;
  }
`
const ActionExperienceAndProjectsText = styled.h4`
  display: inline-block;
  font-family: Helvetica Neue;
  letter-spacing: 0px;
  color: ${UIStyle.UIColors.white};
  font-weight: 400;
  font-size: 26px;
`
const SammyBikingImageStyle = styled.img`
  margin-block-start: 20vh;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: 100%;
  padding: 0px;
  @media screen and (max-width: 960px) {
    margin-block-start: 10vh;

  }
`
const SkipTheFluffStyle = styled.h2`
  margin-block-start: 20vh;
  font-family: Georgia Regular;
  text-align: left;
  font-size: 64px;
  letter-spacing: 0px;
  font-weight: 200;
  color: ${UIStyle.UIColors.black};
  padding-left: 20%;
  @media screen and (max-width: 960px) {
    padding-left: 10%;
    margin-block-start: 15vh;
  }
  @media screen and (max-width: 460px){
    font-size: 40px;
  }
`
const IntroTextStyle = styled.p`
  font-family: Helvetica Neue;
  letter-spacing: 0px;
  color: ${UIStyle.UIColors.black};
  font-weight: 400;
  font-size: 26px;
  text-align: left;
  width: 60%;
  line-height: 55px;
  padding-left: 20%;
  @media screen and (max-width: 1260px) {
    line-height: 40px;
    width: 70%;
  }
  @media screen and (max-width: 960px) {
    padding-left: 10%;
    width: 80%;
  }
  @media screen and (max-width: 460px){
    font-size: 18px;
  }
`
// components
/**
 * Cover
 */
const CoverActionButtons = (
  <Grid spacing={3}>
    <Grid item>
      <ActionButton transparent>{Resume}</ActionButton>
      <ActionWrapper>
        <ActionCircleButton transparent height={'66px'}>
          <ActionRightArrow color={UIStyle.UIColors.white} scalingFactor={2.5} offset={'10px'} />
        </ActionCircleButton>
      </ActionWrapper>
      <ActionWrapper>
        <ActionExperienceAndProjectsText>{ExperienceAndProjects}</ActionExperienceAndProjectsText>
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
/**
 * Explaination
 */
const SammyBikingImage = (
  <SammyBikingImageStyle
    src="https://i.ibb.co/XYv6cLy/Sammy-Biking-Grey.png"
    alt="Sammy-Biking-Grey"
    border="0"
  />
)
const IntroTextTitle = <SkipTheFluffStyle>{skipFluff}</SkipTheFluffStyle>
const IntroText = <IntroTextStyle>{skipFlufftext}</IntroTextStyle>
// class
class Main extends React.PureComponent {
  render() {
    return (
      <div className="main-wrapper">
        <Cover children={CoverChildren} />
        <MainExplainationGrid
          rightChildren={[SammyBikingImage]}
          leftChildren={[IntroTextTitle, IntroText]}
        />
      </div>
    )
  }
}

export default Main

import React from 'react'
import '../css/styles/App.css'
import { Cover } from '../components/Cover'
import { MainTitle } from '../components/MainTitle'
import { MainExplainationGrid } from '../components/MainExplainationGrid'
import { TriSectionHeader } from '../components/TriSectionHeader'
import { MainDoubleGrid } from '../components/MainDoubleSection'
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

// strings ****
// Cover ****
const name = `Sammy Robens-Paradise`
const uxDesigner = `UX DESIGNER`
const Developer = `DEVELOPER`
const Resume = `Resume`
const ExperienceAndProjects = `Experience & Projects`

// Section 1 ***Î
const skipFluff = `Skip the fluff.`
const skipFlufftext = `I am Sammy Robens-Paradise from the University of Waterloo and I study the ways humans interact with technology. I have worked with companies like LEGO, Hootsuite, Kroger, and Lululemon to create beautiful products and experiences.`

// Header 2 ***
const designContentText = `Explore my design portfolio & case studies`
const codeContentText = `Breakdown the code behind my work & projects`
const experienceContentText = `Internships in UX/UI design & development`

// Section 2 ***
const myPassion = `My Passion`
const myPassionText = `We have a responsability to use it to improve the lives of all people, and the environment. As someone who advocates optimized engineering solutions, I continue on my journey to find the most eloquent and beautiful solutions to the worlds most challenging problems. I have always taken an interest in the way humans interact with technology, and more specifically, the way it shapes our experiences.`
// styled-components ****
// Cover
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
const ActionDownArrow = styled(DownArrow)`
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
// section 1

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
  @media screen and (max-width: 460px) {
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
  @media screen and (max-width: 460px) {
    font-size: 18px;
  }
`
// header 2
const HeaderContent = styled.div`
  margin: 0 auto;
  height: inherit;
  font-weight: 100;
  padding-top: ${(p) => (p.isThree ? '8vh' : '6vh')};
  & {
    @media screen and (max-width: 800px) {
      padding-top: 3vh;
      font-size: 24px;
    }
    @media screen and (max-width: 400px) {
      padding-top: 2vh;
    }
  }
`
const HeaderContentText = styled.p`
  font-family: Helvetica Neue;
  letter-spacing: 0px;
  color: ${UIStyle.UIColors.white};
  font-weight: 300;
  font-size: 24px;
  text-align: center;
  width: 60%;
  margin: 0 auto;
  padding-block-start: 2vh;
  @media screen and (max-width: 1350px) {
    width: 80%;
    font-size: 18px;
  }
`
// section 2

const SammySkatingImageStyle = styled.img`
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: 100%;
  padding: 0px;
`
const MyPassion = styled.h2`
  margin-block-start: 20vh;
  font-family: Georgia Regular;
  text-align: left;
  font-size: 64px;
  letter-spacing: 0px;
  font-weight: 200;
  color: ${UIStyle.UIColors.black};
  padding-left: 10%;
  @media screen and (max-width: 960px) {
    padding-left: 5%;
    margin-block-start: 15vh;
  }
  @media screen and (max-width: 460px) {
    font-size: 40px;
  }
`
const MyPassionText = styled.p`
  font-family: Helvetica Neue;
  letter-spacing: 0px;
  color: ${UIStyle.UIColors.black};
  font-weight: 400;
  font-size: 26px;
  text-align: left;
  width: 82%;
  line-height: 55px;
  padding-left: 10%;
  @media screen and (max-width: 1260px) {
    line-height: 40px;
  }
  @media screen and (max-width: 960px) {
    padding-left: 5%;
  }
  @media screen and (max-width: 460px) {
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
          <ActionRightArrow color={UIStyle.UIColors.white} scalingFactor={2} offset={'11px'} />
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

/**
 * Section 2 Header
 */
const defaultHeaderConfig = {
  shouldRender: true,
  centerText: true,
  fontOverride: `Georgia Regular`,
  fontColor: UIStyle.UIColors.gold,
  fontSize: 30,
  height: 300,
  backgroundColor: UIStyle.UIColors.darkGrey,
}

const designHeaderConfig = {
  text: 'Design',
  ...defaultHeaderConfig,
}
const codeHeaderConfig = {
  text: 'Code',
  ...defaultHeaderConfig,
}

const experienceHeaderConfig = {
  text: 'Experience',
  ...defaultHeaderConfig,
}

const DesignHeader = (
  <SectionHeader config={designHeaderConfig}>
    <div className="-design-header">
      <HeaderContent>{designHeaderConfig.text}</HeaderContent>
      <HeaderContentText>{designContentText}</HeaderContentText>
      <ActionCircleButton transparent height={'66px'}>
        <ActionDownArrow color={UIStyle.UIColors.white} scalingFactor={2} offset={'13px'} />
      </ActionCircleButton>
    </div>
  </SectionHeader>
)
const CodeHeader = (
  <SectionHeader config={codeHeaderConfig}>
    <div className="-code-header">
      <HeaderContent>{codeHeaderConfig.text}</HeaderContent>
      <HeaderContentText>{codeContentText}</HeaderContentText>
      <ActionCircleButton transparent height={'66px'}>
        <ActionDownArrow color={UIStyle.UIColors.white} scalingFactor={2} offset={'13px'} />
      </ActionCircleButton>
    </div>
  </SectionHeader>
)
const ExperienceHeader = (
  <SectionHeader config={experienceHeaderConfig}>
    <div className="-experience-header">
      <HeaderContent>{experienceHeaderConfig.text}</HeaderContent>
      <HeaderContentText>{experienceContentText}</HeaderContentText>
      <ActionCircleButton transparent height={'66px'}>
        <ActionDownArrow color={UIStyle.UIColors.white} scalingFactor={2} offset={'13px'} />
      </ActionCircleButton>
    </div>
  </SectionHeader>
)

/**
 * Section 2
 */
const SammySkatingImage = (
  <SammySkatingImageStyle
    src="https://i.ibb.co/dBhMb8K/sammyskatingbw.png"
    alt="sammyskatingbw"
    border="0"
  />
)
const MyPassionTextTitle = <MyPassion>{myPassion}</MyPassion>
const MyPassionTextBody = <MyPassionText>{myPassionText}</MyPassionText>

/**
 * section 3 header
 */

const section3DefaultHeaderConfig = {
  shouldRender: true,
  centerText: true,
  fontOverride: `Georgia Regular`,
  fontColor: UIStyle.UIColors.gold,
  fontSize: 30,
  height: 150,
  backgroundColor: UIStyle.UIColors.darkGrey,
}
const section3ArticleHeaderConfig = {
  text: 'Articles',
  ...section3DefaultHeaderConfig,
}
const section3DesignHeaderConfig = {
  text: 'Design',
  ...section3DefaultHeaderConfig,
}

const section3CodeHeaderConfig = {
  text: 'Code',
  ...section3DefaultHeaderConfig,
}

const Design3Header = (
  <SectionHeader config={section3ArticleHeaderConfig}>
    <div className="-3-articles-header">
      <HeaderContent isThree>{section3ArticleHeaderConfig.text}</HeaderContent>
    </div>
  </SectionHeader>
)
const Code3Header = (
  <SectionHeader config={section3DesignHeaderConfig}>
    <div className="-3-design-header">
      <HeaderContent isThree>{section3DesignHeaderConfig.text}</HeaderContent>
    </div>
  </SectionHeader>
)
const Experience3Header = (
  <SectionHeader config={section3CodeHeaderConfig}>
    <div className="-3-code-header">
      <HeaderContent isThree>{section3CodeHeaderConfig.text}</HeaderContent>
    </div>
  </SectionHeader>
)

/**
 * Section 3
 */

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
class Main extends React.PureComponent {
  render() {
    return (
      <div className="main-wrapper">
        <SocialButtons />
        <Cover children={CoverChildren} />
        <MainExplainationGrid
          rightChildren={[SammyBikingImage]}
          leftChildren={[IntroTextTitle, IntroText]}
        />
        <TriSectionHeader
          leftChildren={[DesignHeader]}
          middleChildren={[CodeHeader]}
          rightChildren={[ExperienceHeader]}
        />
        <MainDoubleGrid
          rightChildren={[SammySkatingImage]}
          leftChildren={[MyPassionTextTitle, MyPassionTextBody]}
        />
        <TriSectionHeader
          leftChildren={[
            Design3Header,
            <ScrollArea>
              {articleCards.map((node) => (
                <div>{node}</div>
              ))}
            </ScrollArea>,
          ]}
          middleChildren={[
            Code3Header,
            <ScrollArea>
              {designCards.map((node) => (
                <div>{node}</div>
              ))}
            </ScrollArea>,
          ]}
          rightChildren={[
            Experience3Header,
            <ScrollArea>
              {codeCards.map((node) => (
                <div>{node}</div>
              ))}
            </ScrollArea>,
          ]}
        />
        <Footer />
      </div>
    )
  }
}

export default Main

// react
import React from 'react'
// components
import { Grid } from '@material-ui/core'
import { Menu, Button } from 'eunoia'
import { Link } from 'react-router-dom'
import { StoryCover } from '../components/StoryCover'
import { SectionTitle } from '../components/SectionsTitle'
import { Footer } from '../components/Footer'
import { StorySocialButtons } from '../components/Social'
import { TriSection } from '../components/TriSection'
import { Header } from '../components/Headers'
// constants
import { UIStyle, StoryMenuConfig } from '../constants/config'
import {
  ActionDownArrow,
  ActionWrapper,
  ActionCircleButton,
  ActionRightArrow,
  ActionText,
} from '../constants/styles'
import { emailLink } from '../constants/links'
// css
import '../css/styles/styles.css'
import '../css/styles/App.css'

// strings ****
const FourOFourTitle = `Uh Oh!`
const FourOFourSubtitle = `The webpage you are looking for doesn’t exist.`
const TakeMeHome = `Home`
const ReportAnIssue = `Report an Issue`

// tri section strings
const designContentText = `Explore my design portfolio & case studies`
const codeContentText = `Breakdown the code behind my work & projects`
const experienceContentText = `Internships in UX/UI design & development`

// styled-components
// components
// cover
const CoverActionButtons = (
  <Grid spacing={3}>
    <Grid item>
      <a href={emailLink}>
        <Button aria-label={ReportAnIssue}>{ReportAnIssue}</Button>
      </a>
      <Link to="/">
        <ActionWrapper>
          <ActionCircleButton transparent aria-label={TakeMeHome} height={'66px'}>
            <ActionRightArrow color={UIStyle.UIColors.black} scalingFactor={2} offset={'11px'} />
          </ActionCircleButton>
        </ActionWrapper>
        <ActionWrapper>
          <ActionText>{TakeMeHome}</ActionText>
        </ActionWrapper>
      </Link>
    </Grid>
  </Grid>
)

const CoverChildren = (
  <>
    <Menu config={StoryMenuConfig.config} options={StoryMenuConfig.options} />
    <SectionTitle
      title={FourOFourTitle}
      subtitle={[FourOFourSubtitle]}
      children={[CoverActionButtons]}
      story
      coverImageURL={'https://i.ibb.co/kJVG2Yz/404-4x-100.jpg'}
    />
  </>
)

// design bottom header section
const defaultHeaderConfigBottom = {
  shouldRender: true,
  centerText: true,
  fontOverride: `Georgia Regular`,
  fontColor: UIStyle.UIColors.gold,
  fontSize: 30,
  height: 300,
  backgroundColor: UIStyle.UIColors.darkGrey,
}

const designHeaderConfigBottom = {
  text: 'Design',
  link: '/design',
  ...defaultHeaderConfigBottom,
}
const codeHeaderConfigBottom = {
  text: 'Code',
  link: '/code',
  ...defaultHeaderConfigBottom,
}

const experienceHeaderConfigBottom = {
  text: 'Experience',
  link: '/experience',
  ...defaultHeaderConfigBottom,
}

const DesignHeader = (
  <Header
    config={designHeaderConfigBottom}
    contentText={designContentText}
    children={<ActionDownArrow color={UIStyle.UIColors.white} scalingFactor={2} offset={'13px'} />}
  />
)
const CodeHeader = (
  <Header
    config={codeHeaderConfigBottom}
    contentText={codeContentText}
    children={<ActionDownArrow color={UIStyle.UIColors.white} scalingFactor={2} offset={'13px'} />}
  />
)
const ExperienceHeader = (
  <Header
    config={experienceHeaderConfigBottom}
    contentText={experienceContentText}
    children={<ActionDownArrow color={UIStyle.UIColors.white} scalingFactor={2} offset={'13px'} />}
  />
)

// class Definition
class FourOFour extends React.PureComponent {
  render() {
    return (
      <div className="Design-wrapper">
        <StorySocialButtons />
        <StoryCover children={CoverChildren} />
        <TriSection
          leftChildren={[DesignHeader]}
          middleChildren={[CodeHeader]}
          rightChildren={[ExperienceHeader]}
        />
        <Footer />
      </div>
    )
  }
}

export default FourOFour

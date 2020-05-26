// react
import React, { Fragment } from 'react'
// components
import { Grid } from '@material-ui/core'
import { Menu, Button } from 'eunoia'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { StoryCover } from '../../components/StoryCover'
import { SectionTitle } from '../../components/SectionsTitle'
import { Footer } from '../../components/Footer'
import { StorySocialButtons } from '../../components/Social'
import { Link as ScrollLink, Element, Events } from 'react-scroll'
import { TriSection } from '../../components/TriSection'
import { UniSection } from '../../components/UniSection'
import { DoubleSection } from '../../components/DoubleSection'
import { Header } from '../../components/Headers'
// constants
import { UIStyle, StoryMenuConfig } from '../../constants/config'
import {
  ActionDownArrow,
  ActionWrapper,
  ActionCircleButton,
  ActionRightArrow,
  ActionText,
  HeaderT,
} from '../../constants/styles'
import { RecdFERepoLink } from '../../constants/links'
import { RectStrings } from './strings'
// css
import '../../css/styles/styles.css'
import '../../css/styles/App.css'

// strings ****
const RectTitle = `Rec’d; Mobile App in-progress`
const RectSubtitle = `An app to share the music you love, with the people you love!`
const viewProject = `View Progress`
const learnMore = `Learn More`

// tri section strings
const designContentText = `Explore my design portfolio & case studies`
const codeContentText = `Breakdown the code behind my work & projects`
const experienceContentText = `Internships in UX/UI design & development`

// styled-components

const StoryCenterWrapper = styled.div`
  text-align: center;
`
const StoryImageStyle = styled(LazyLoadImage)`
  margin-block-start: ${(p) => (p.offsetTop ? p.offsetTop : '20vh')};
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: 85%;
  padding: 0px;
  @media screen and (max-width: 960px) {
    margin-block-start: 10vh;
  }
`
const LargeBannerImageStyle = styled(LazyLoadImage)`
  margin-block-start: ${(p) => (p.offsetTop ? p.offsetTop : '20vh')};
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: 60%;
  object-fit: contain;
  padding: 0px;
  @media screen and (max-width: 960px) {
    margin-block-start: 10vh;
  }
`
// components
// cover
const CoverActionButtons = (
  <Grid spacing={3}>
    <Grid item>
      <ScrollLink
        activeClass="active"
        className="about-scroller"
        to="about-scroller"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <Button aria-label={learnMore}>{learnMore}</Button>
      </ScrollLink>
      <a href={RecdFERepoLink}>
        <ActionWrapper>
          <ActionCircleButton transparent aria-label={viewProject} height={'66px'}>
            <ActionRightArrow color={UIStyle.UIColors.black} scalingFactor={2} offset={'11px'} />
          </ActionCircleButton>
        </ActionWrapper>
        <ActionWrapper>
          <ActionText>{viewProject}</ActionText>
        </ActionWrapper>
      </a>
    </Grid>
  </Grid>
)

const CoverChildren = (
  <Fragment>
    <Menu config={StoryMenuConfig.config} options={StoryMenuConfig.options} />
    <SectionTitle
      title={RectTitle}
      subtitle={[RectSubtitle]}
      children={[CoverActionButtons]}
      story
      coverImageURL={'https://i.ibb.co/2dtcWqt/rect-logo-4x.png'}
    />
  </Fragment>
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
// section 1
const Header1 = <HeaderT first>{RectStrings.section1.title}</HeaderT>
const Paragraph1 = RectStrings.section1.text[0]
const Image1 = (
  <StoryCenterWrapper>
    <StoryImageStyle
      effect="blur"
      src="https://i.ibb.co/bgwN7Lg/rect-logo-1-4x.png"
      alt="rect-logo-1-4x"
      border="0"
      offsetTop={'30vh'}
    />
  </StoryCenterWrapper>
)
// section 2
const Header2 = <HeaderT padding={5}>{RectStrings.section2.title}</HeaderT>
const Image2 = (
  <StoryCenterWrapper>
    <LargeBannerImageStyle
      effect="blur"
      src="https://i.ibb.co/tms2K4v/under-construction-4x.png"
      alt="under-construction-4x"
      border="0"
      offsetTop={'0vh'}
    />
  </StoryCenterWrapper>
)
// section 3
// arrays mapped

const SideLeft = [Header1, Paragraph1]
const SideRight = [Image1]
const Sec2 = [Header2, Image2]
// class Definition
class Recd extends React.PureComponent {
  componentDidMount() {
    Events.scrollEvent.register('begin')

    Events.scrollEvent.register('end')
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }
  render() {
    return (
      <div className="Design-wrapper">
        <StorySocialButtons />
        <StoryCover children={CoverChildren} />
        <Element name="about-scroller" className="element">
          <DoubleSection
            leftChildren={[
              <Fragment>
                {SideLeft.map((e) => (
                  <Fragment>{e}</Fragment>
                ))}
              </Fragment>,
            ]}
            rightChildren={[
              <Fragment>
                {SideRight.map((e) => (
                  <Fragment>{e}</Fragment>
                ))}
              </Fragment>,
            ]}
          />
          <UniSection
            middleChildren={[
              <Fragment>
                {Sec2.map((e) => (
                  <Fragment>{e}</Fragment>
                ))}
              </Fragment>,
            ]}
          />
          <UniSection
            middleChildren={[
              <StoryCenterWrapper>
                <Button
                  aria-label={viewProject}
                  onClick={() => window.open(RecdFERepoLink, '_self')}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      window.open(RecdFERepoLink, '_self')
                    }
                  }}
                >
                  {viewProject}
                </Button>
              </StoryCenterWrapper>,
            ]}
          />
        </Element>
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

export default Recd

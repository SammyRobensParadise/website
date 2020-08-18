// react
import React, { Fragment } from 'react'
// components
import { Grid } from '@material-ui/core'
import { Menu, Button } from 'eunoia'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { StoryCover } from '../../components/StoryCover'
import { SectionTitle } from '../../components/SectionsTitle'
import { Footer } from '../../components/Footer'
import { DoubleSection } from '../../components/DoubleSection'
import { StorySocialButtons } from '../../components/Social'
import { Link as ScrollLink, Element, Events } from 'react-scroll'
import { TriSection } from '../../components/TriSection'
import { UniSection } from '../../components/UniSection'
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
import { PumaURL } from '../../constants/links'
import { PumaStrings } from './strings'
// css
import '../../css/styles/styles.css'
import '../../css/styles/App.css'

// strings ****
const PumaTitle = `UX/UI & Systems Design Engineer`
const PumaSubtitle = `PUMA Utility Monitoring`
const viewPuma = `View PUMA`
const learnMore = `Learn More`

// tri section strings
const designContentText = `Explore my design portfolio & case studies`
const codeContentText = `Breakdown the code behind my work & projects`
const experienceContentText = `Internships in UX/UI design & development`

// styled-components
const StoryCenterWrapper = styled.div`
  text-align: center;
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
      <a href={PumaURL}>
        <ActionWrapper>
          <ActionCircleButton transparent aria-label={viewPuma} height={'66px'}>
            <ActionRightArrow color={UIStyle.UIColors.black} scalingFactor={2} offset={'11px'} />
          </ActionCircleButton>
        </ActionWrapper>
        <ActionWrapper>
          <ActionText>{viewPuma}</ActionText>
        </ActionWrapper>
      </a>
    </Grid>
  </Grid>
)

const CoverChildren = (
  <Fragment>
    <Menu config={StoryMenuConfig.config} options={StoryMenuConfig.options} />
    <SectionTitle
      title={PumaTitle}
      subtitle={[PumaSubtitle]}
      children={[CoverActionButtons]}
      story
      coverImageURL={'https://i.ibb.co/h1Htvgz/puma-logo-4x-100.jpg'}
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
const Header1 = (
  <HeaderT padding={5} first>
    {PumaStrings.section1.title}
  </HeaderT>
)
const Paragraph1 = PumaStrings.section1.text[0]

// section 2
const Header2 = <HeaderT padding={5}>{PumaStrings.section2.title}</HeaderT>
const Paragraph2 = PumaStrings.section2.text[0]

// section3
const Header3 = <HeaderT>{PumaStrings.section3.title}</HeaderT>
const Paragraph3 = PumaStrings.section3.text[0]
const Image3 = (
  <StoryCenterWrapper>
    <StoryImageStyle
      effect="blur"
      src="https://i.ibb.co/p0y2ZKr/puma-2-system-4x.png"
      alt="puma-2-system-4x"
      border="0"
      offsetTop={'30vh'}
    />
  </StoryCenterWrapper>
)

//  section 4
const Image4 = (
  <StoryCenterWrapper>
    <LargeBannerImageStyle
      effect="blur"
      src="https://i.ibb.co/R9j1SSd/puma-3-system-4x.png"
      alt="puma-3-system-4x"
      border="0"
      title="PUMA Design System"
      offsetTop={'0vh'}
    />
  </StoryCenterWrapper>
)
const Image5 = (
  <StoryCenterWrapper>
    <LargeBannerImageStyle
      effect="blur"
      src="https://i.ibb.co/x5wpBJW/puma-4-system-4x.png"
      alt="puma-4-system-4x"
      border="0"
      title="PUMA Design System"
      offsetTop={'0vh'}
    />
  </StoryCenterWrapper>
)
// section 5
const Header5 = <HeaderT padding={5}>{PumaStrings.section4.title}</HeaderT>
const Paragraph5 = PumaStrings.section4.text[0]

// section6
const Image6 = (
  <StoryCenterWrapper>
    <LargeBannerImageStyle
      effect="blur"
      src="https://i.ibb.co/qkyJ8h2/puma-5-version-4x.png"
      alt="puma-5-version-4x"
      border="0"
      offsetTop={'0vh'}
    />
  </StoryCenterWrapper>
)
// arrays mapped
const Sec1 = [Header1, Paragraph1]
const Sec2 = [Header2, Paragraph2]
const SideLeft = [Header3, Paragraph3]
const SideRight = [Image3]
const Sec4 = [Image4, Image5]
const Sec5 = [Header5, Paragraph5]
const Sec6 = [Image6]
// class Definition
class Puma extends React.PureComponent {
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
          <UniSection
            middleChildren={[
              <Fragment>
                {Sec1.map((e) => (
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
                {Sec4.map((e) => (
                  <Fragment>{e}</Fragment>
                ))}
              </Fragment>,
            ]}
          />
          <UniSection
            middleChildren={[
              <Fragment>
                {Sec5.map((e) => (
                  <Fragment>{e}</Fragment>
                ))}
              </Fragment>,
            ]}
          />
          <UniSection
            middleChildren={[
              <Fragment>
                {Sec6.map((e) => (
                  <Fragment>{e}</Fragment>
                ))}
              </Fragment>,
            ]}
          />
          <UniSection
            middleChildren={[
              <StoryCenterWrapper>
                <Button
                  onClick={() => window.open(PumaURL, '_self')}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      window.open(PumaURL, '_self')
                    }
                  }}
                >
                  {viewPuma}
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

export default Puma

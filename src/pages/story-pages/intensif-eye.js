// react
import React from 'react'
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
  Text,
} from '../../constants/styles'
import { IntensifEyeURL } from '../../constants/links'
import { IntensifEyeStrings } from './strings'
// css
import '../../css/styles/styles.css'
import '../../css/styles/App.css'

// strings ****
const IntensifEyeTitle = `Intensif-Eye; Google Vision AI`
const IntensifEyeSubtitle = `A story about a hackathon project aiming for a more accessible world`
const viewProject = `View Project`
const learnMore = `Learn More`

// tri section strings
const designContentText = `Explore my design portfolio & case studies`
const codeContentText = `Breakdown the code behind my work & projects`
const experienceContentText = `Internships in UX/UI design & development`

// styled-components

const StoryCenterWrapper = styled.div`
  text-align: center;
`
const StoryCenterWrapperColor = styled.div`
  text-align: center;
  background-color: ${UIStyle.UIColors.darkGrey};
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
  width: 100%;
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
      <a href={IntensifEyeURL}>
        <ActionWrapper>
          <ActionCircleButton aria-label={viewProject} transparent height={'66px'}>
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
  <div>
    <Menu config={StoryMenuConfig.config} options={StoryMenuConfig.options} />
    <SectionTitle
      title={IntensifEyeTitle}
      subtitle={[IntensifEyeSubtitle]}
      children={[CoverActionButtons]}
      story
      coverImageURL={'https://i.ibb.co/r2NBmKn/intensif-eye-render-shadow-4.png'}
    />
  </div>
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
const Header1 = <HeaderT>{IntensifEyeStrings.section1.title}</HeaderT>
const Paragraph1 = <Text>{IntensifEyeStrings.section1.text[0]}</Text>
const Image1 = (
  <StoryCenterWrapper>
    <StoryImageStyle
      effect="blur"
      src="https://i.ibb.co/3SdZv0N/intensif-eye-render-4x.png"
      alt="intensif-eye-render-4x"
      border="0"
    />
  </StoryCenterWrapper>
)
// section 2
const Header2 = <HeaderT padding={5}>{IntensifEyeStrings.section2.title}</HeaderT>
const Paragraph2 = (
  <Text padding={5} wide>
    {IntensifEyeStrings.section2.text[0]}
  </Text>
)

// section 3
const Header3 = <HeaderT padding={5}>{IntensifEyeStrings.section3.title}</HeaderT>
const Paragraph3 = (
  <Text padding={5} wide>
    {IntensifEyeStrings.section3.text[0]}
  </Text>
)

// section 4
const Header4 = <HeaderT>{IntensifEyeStrings.section4.title}</HeaderT>
const Paragraph4 = <Text>{IntensifEyeStrings.section4.text[0]}</Text>
const Image4 = (
  <StoryCenterWrapper>
    <StoryImageStyle
      effect="blur"
      src="https://i.ibb.co/t2XYmnd/intensif-eye-render-single-4x.png"
      alt="intensif-eye-render-single-4x"
      border="0"
      offsetTop={'40vh'}
    />
  </StoryCenterWrapper>
)

// section 5
const Header5 = <HeaderT padding={5}>{IntensifEyeStrings.section5.title}</HeaderT>
const Paragraph5 = (
  <Text padding={5} wide>
    {IntensifEyeStrings.section5.text[0]}
  </Text>
)

// section 6
const Image6 = (
  <StoryCenterWrapperColor>
    <LargeBannerImageStyle
      effect="blur"
      src="https://i.ibb.co/CKxn8GP/intensif-eye-Board.png"
      alt="intensif-eye-Board"
      border="0"
    />
  </StoryCenterWrapperColor>
)
// arrays mapped

const SideLeft = [Header1, Paragraph1]
const SideRight = [Image1]
const Sec2 = [Header2, Paragraph2]
const Sec3 = [Header3, Paragraph3]
const Sec4Left = [Header4, Paragraph4]
const Sec4Right = [Image4]
const Sec5 = [Header5, Paragraph5]
const Sec6 = [Image6]
// class Definition
class IntensifEye extends React.PureComponent {
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
              <div>
                {SideLeft.map((e) => (
                  <div>{e}</div>
                ))}
              </div>,
            ]}
            rightChildren={[
              <div>
                {SideRight.map((e) => (
                  <div>{e}</div>
                ))}
              </div>,
            ]}
          />
          <UniSection
            middleChildren={[
              <div>
                {Sec2.map((e) => (
                  <div>{e}</div>
                ))}
              </div>,
            ]}
          />
          <UniSection
            middleChildren={[
              <div>
                {Sec3.map((e) => (
                  <div>{e}</div>
                ))}
              </div>,
            ]}
          />
          <DoubleSection
            leftChildren={[
              <div>
                {Sec4Left.map((e) => (
                  <div>{e}</div>
                ))}
              </div>,
            ]}
            rightChildren={[
              <div>
                {Sec4Right.map((e) => (
                  <div>{e}</div>
                ))}
              </div>,
            ]}
          />
          <UniSection
            middleChildren={[
              <div>
                {Sec5.map((e) => (
                  <div>{e}</div>
                ))}
              </div>,
            ]}
          />
          <UniSection
            middleChildren={[
              <StoryCenterWrapper>
                <Button
                  aria-label={viewProject}
                  onClick={() => window.open(IntensifEyeURL, '_self')}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      window.open(IntensifEyeURL, '_self')
                    }
                  }}
                >
                  {viewProject}
                </Button>
              </StoryCenterWrapper>,
            ]}
          />
          <UniSection
            middleChildren={[
              <div>
                {Sec6.map((e) => (
                  <div>{e}</div>
                ))}
              </div>,
            ]}
          />
        </Element>
        <TriSection
          leftChildren={[DesignHeader]}
          middleChildren={[CodeHeader]}
          rightChildren={[ExperienceHeader]}
          noPadding
        />
        <Footer />
      </div>
    )
  }
}

export default IntensifEye

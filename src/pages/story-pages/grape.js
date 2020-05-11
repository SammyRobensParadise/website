// react
import React from 'react'
// components
import { Grid } from '@material-ui/core'
import { Menu, Button } from 'eunoia'
import styled from 'styled-components'
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
import { GrapePromoURL } from '../../constants/links'
import { GrapeStrings } from './strings'
// css
import '../../css/styles/styles.css'
import '../../css/styles/App.css'

// strings ****
const GrapeTitle = `Grape; Changing they way we code`
const GrapeSubtitle = `The motivation behind Grape`
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
  background-color: ${UIStyle.UIColors.white};
`
const StoryImageStyle = styled.img`
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
const LargeBannerImageStyle = styled.img`
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
        <Button>{learnMore}</Button>
      </ScrollLink>
      <a href={GrapePromoURL}>
        <ActionWrapper>
          <ActionCircleButton transparent height={'66px'}>
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
      title={GrapeTitle}
      subtitle={[GrapeSubtitle]}
      children={[CoverActionButtons]}
      story
      coverImageURL={'https://i.ibb.co/BnxryXj/grape-cover-2x.png'}
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
const Header1 = <HeaderT>{GrapeStrings.section1.title}</HeaderT>
const Paragraph1 = <Text>{GrapeStrings.section1.text[0]}</Text>
const Image1 = (
  <StoryCenterWrapper>
    <StoryImageStyle
      src="https://i.ibb.co/jZRsy4g/grape-landing-2x.png"
      alt="grape-landing-2x"
      border="0"
      offsetTop={'30vh'}
    />
  </StoryCenterWrapper>
)
// section 2
const Header2 = <HeaderT>{GrapeStrings.section2.title}</HeaderT>
const Paragraph2 = GrapeStrings.section2.text[0]
const Image2 = (
  <StoryCenterWrapper>
    <StoryImageStyle
      src="https://i.ibb.co/hHHZDMG/grape-promo-2x.png"
      alt="grape-promo-2x"
      border="0"
      offsetTop={'30vh'}
    />
  </StoryCenterWrapper>
)
// section 3
const Header3 = <HeaderT>{GrapeStrings.section3.title}</HeaderT>
const Paragraph3 = <Text>{GrapeStrings.section3.text[0]}</Text>
const Image3 = (
  <StoryCenterWrapper>
    <StoryImageStyle
      src="https://i.ibb.co/3MtynPr/grape-editor-2x.png"
      alt="grape-editor-2x"
      border="0"
      offsetTop={'30vh'}
    />
  </StoryCenterWrapper>
)

const Image4 = (
  <StoryCenterWrapperColor>
    <LargeBannerImageStyle
      src="https://i.ibb.co/s2pb72n/grape-demo-4x.png"
      alt="grape-demo-4x"
      border="0"
      offsetTop={'0vh'}
    />
  </StoryCenterWrapperColor>
)
// arrays mapped

const SideLeft = [Header1, Paragraph1]
const SideRight = [Image1]
const Side2Left = [Header2, Paragraph2]
const Side2Right = [Image2]
const Side3Left = [Header3, Paragraph3]
const Side3Right = [Image3]
const Sec4 = [Image4]
// class Definition
class Grape extends React.PureComponent {
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
          <DoubleSection
            leftChildren={[
              <div>
                {Side2Left.map((e) => (
                  <div>{e}</div>
                ))}
              </div>,
            ]}
            rightChildren={[
              <div>
                {Side2Right.map((e) => (
                  <div>{e}</div>
                ))}
              </div>,
            ]}
          />
          <DoubleSection
            leftChildren={[
              <div>
                {Side3Left.map((e) => (
                  <div>{e}</div>
                ))}
              </div>,
            ]}
            rightChildren={[
              <div>
                {Side3Right.map((e) => (
                  <div>{e}</div>
                ))}
              </div>,
            ]}
          />
          <UniSection
            middleChildren={[
              <StoryCenterWrapper>
                <Button
                  onClick={() => window.open(GrapePromoURL, '_self')}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      window.open(GrapePromoURL, '_self')
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
                {Sec4.map((e) => (
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

export default Grape

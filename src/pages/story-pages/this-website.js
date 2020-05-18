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
} from '../../constants/styles'
import { websiteRepoURL } from '../../constants/links'
import { ThisWebsiteStrings } from './strings'
// css
import '../../css/styles/styles.css'
import '../../css/styles/App.css'

// strings ****
const thisWebsiteTitle = `The Making of This Website`
const thisWebsiteSubtitle = `A history of my websites & portfolios, and how I got here`
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
const CenterText = styled.h3`
  /* margin-block-start: 10vh; */
  font-family: Georgia Regular;
  text-align: center;
  font-size: 64px;
  letter-spacing: 0px;
  font-weight: 200;
  margin: 0px;
  transform: translateY(80px);
  color: ${UIStyle.UIColors.black};
  @media screen and (max-width: 460px) {
    font-size: 40px;
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
      <a href={websiteRepoURL}>
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
      title={thisWebsiteTitle}
      subtitle={[thisWebsiteSubtitle]}
      children={[CoverActionButtons]}
      story
      coverImageURL={'https://i.ibb.co/ZNRjyHq/this-website-making-logo.png'}
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
const Header1 = <HeaderT>{ThisWebsiteStrings.section1.title}</HeaderT>
const Paragraph1 = ThisWebsiteStrings.section1.text[0]
const Image1 = (
  <StoryCenterWrapper>
    <StoryImageStyle
      src="https://i.ibb.co/LvSLgsc/web-7-4x.png"
      alt="web-7-4x"
      border="0"
      offsetTop={'30vh'}
    />
  </StoryCenterWrapper>
)
const Image2 = (
  <StoryCenterWrapper>
    <StoryImageStyle
      src="https://i.ibb.co/QvQjhSg/web-8-4x.png"
      alt="web-8-4x"
      border="0"
      offsetTop={'0vh'}
    />
  </StoryCenterWrapper>
)
// section 2
const Header2 = <HeaderT padding={5}>{ThisWebsiteStrings.section2.title}</HeaderT>
const Paragraph2 = ThisWebsiteStrings.section2.text[0]

// section 3
const Header3 = <HeaderT padding={5}>{ThisWebsiteStrings.section3.title}</HeaderT>
const Paragraph3 = ThisWebsiteStrings.section3.text[0]

const Image3 = (
  <div>
    <CenterText>1 - Summer 2018</CenterText>
    <LargeBannerImageStyle
      src="https://i.ibb.co/zng6gxX/web-1-4x-100.jpg"
      alt="web-1-4x-100"
      border="0"
      offsetTop={'0vh'}
    />
  </div>
)
const Image4 = (
  <div>
    <CenterText>2 - Fall 2018</CenterText>
    <LargeBannerImageStyle
      src="https://i.ibb.co/FnCwqzV/web-2-4x-100.jpg"
      alt="web-2-4x-100"
      border="0"
      offsetTop={'0vh'}
    />
  </div>
)

const Image5 = (
  <div>
    <CenterText>3 - Spring 2019</CenterText>
    <LargeBannerImageStyle
      src="https://i.ibb.co/yFTYBZY/web-3-4x-100.jpg"
      alt="web-3-4x-100"
      border="0"
      offsetTop={'0vh'}
    />
  </div>
)

const Image6 = (
  <div>
    <CenterText>4 - Fall 2019</CenterText>
    <LargeBannerImageStyle
      src="https://i.ibb.co/wNGpmRL/web-4-4x-100.jpg"
      alt="web-4-4x-100"
      border="0"
      offsetTop={'0vh'}
    />
  </div>
)

const Image7 = (
  <div>
    <CenterText>5 - Winter 2020</CenterText>
    <LargeBannerImageStyle
      src="https://i.ibb.co/FsK06Bz/web-5-4x-100.jpg"
      alt="web-5-4x-100"
      border="0"
      offsetTop={'0vh'}
    />
  </div>
)

const Image8 = (
  <div>
    <CenterText>6 - Summer {`&`} Fall 2020</CenterText>
    <LargeBannerImageStyle
      src="https://i.ibb.co/y8wr8pN/web-6-4x-100.jpg"
      alt="web-6-4x-100"
      border="0"
      offsetTop={'0vh'}
    />
  </div>
)

// arrays mapped
const SideLeft = [Header1, Paragraph1]
const SideRight = [Image1, Image2]
const Sec2 = [Header2, Paragraph2]
const Sec3 = [Header3, Paragraph3]
const Sec4 = [Image3, Image4, Image5, Image6, Image7, Image8]
// class Definition
class ThisWebsite extends React.PureComponent {
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
          <UniSection
            middleChildren={[
              <div>
                {Sec4.map((e) => (
                  <div>{e}</div>
                ))}
              </div>,
            ]}
          />
          <UniSection
            middleChildren={[
              <StoryCenterWrapper>
                <Button
                  onClick={() => window.open(websiteRepoURL, '_self')}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      window.open(websiteRepoURL, '_self')
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

export default ThisWebsite

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
import { portfolioWinter2020URL } from '../../constants/links'
import { PortfolioWinter2020Strings } from './strings'
// css
import '../../css/styles/styles.css'
import '../../css/styles/App.css'

// strings ****
const WebsiteWinter2020title = `Website Summer & Fall 2019`
const WebsiteWinter2020subtitle = `The Process, Design and Code`
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
  margin-block-start: ${(p) => (p.isLongParagraph ? '10vh' : '30vh')};
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
        <Button>{learnMore}</Button>
      </ScrollLink>
      <a href={portfolioWinter2020URL}>
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
      title={WebsiteWinter2020title}
      subtitle={[WebsiteWinter2020subtitle]}
      children={[CoverActionButtons]}
      story
      coverImageURL={'https://i.ibb.co/9rLQtt3/portfolio-2020-webpage-render.png'}
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
const Header1 = <HeaderT>{PortfolioWinter2020Strings.section1.title}</HeaderT>
const Paragraph1 = <Text>{PortfolioWinter2020Strings.section1.text}</Text>
const Image1 = (
  <StoryCenterWrapper>
    <StoryImageStyle
      src="https://i.ibb.co/4jj7bTm/portfolio-2020-webpage.png"
      alt="portfolio-2020-webpage"
      border="0"
    />
  </StoryCenterWrapper>
)
// section 2
const Header2 = <HeaderT>{PortfolioWinter2020Strings.section2.title}</HeaderT>
const Paragraph2 = <Text>{PortfolioWinter2020Strings.section2.text[0]}</Text>
const Image2 = (
  <StoryCenterWrapper>
    <StoryImageStyle
      src="https://i.ibb.co/7p4wwN0/portfolio-2020-code.png"
      alt="portfolio-2020-code"
      border="0"
    />
  </StoryCenterWrapper>
)
// section 3

const Paragraph3 = <Text>{PortfolioWinter2020Strings.section2.text[1]}</Text>
const Image3 = (
  <StoryCenterWrapper>
    <StoryImageStyle
      src="https://i.ibb.co/FxYD2zk/portfolio-2020-code-2.png"
      alt="portfolio-2020-code-2"
      border="0"
      isLongParagraph
    />
  </StoryCenterWrapper>
)

// arrays mapped

const SideLeft = [Header1, Paragraph1]
const SideRight = [Image1]
const SideLeftSec2 = [Header2, Paragraph2]
const SideRightSec2 = [Image2]
const SideLeftSec3 = [Paragraph3]
const SideRightSec3 = [Image3]
// class Definition
class WebsiteSummerAndFall2019 extends React.PureComponent {
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
                {SideLeftSec2.map((e) => (
                  <div>{e}</div>
                ))}
              </div>,
            ]}
            rightChildren={[
              <div>
                {SideRightSec2.map((e) => (
                  <div>{e}</div>
                ))}
              </div>,
            ]}
          />
          <DoubleSection
            leftChildren={[
              <div>
                {SideLeftSec3.map((e) => (
                  <div>{e}</div>
                ))}
              </div>,
            ]}
            rightChildren={[
              <div>
                {SideRightSec3.map((e) => (
                  <div>{e}</div>
                ))}
              </div>,
            ]}
          />
        </Element>
        <UniSection
          middleChildren={[
            <StoryCenterWrapper>
              <Button
                onClick={() => window.open(portfolioWinter2020URL, '_self')}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    window.open(portfolioWinter2020URL, '_self')
                  }
                }}
              >{viewProject}</Button>
            </StoryCenterWrapper>,
          ]}
        />
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

export default WebsiteSummerAndFall2019

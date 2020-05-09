// react
import React from 'react'
// components
import { StoryCover } from '../../components/StoryCover'
import { SectionTitle } from '../../components/SectionsTitle'
import { Footer } from '../../components/Footer'
import { StorySocialButtons } from '../../components/Social'
import { Menu, Button } from 'eunoia'
import { Link as ScrollLink, Element, Events } from 'react-scroll'
import { TriSection } from '../../components/TriSection'
import { DoubleOffsetSection } from '../../components/DoubleSection'
import { Header } from '../../components/Headers'
// constants
import { UIStyle, StoryMenuConfig } from '../../constants/config'
import { ActionDownArrow } from '../../constants/styles'
import styled from 'styled-components'
// css
import '../../css/styles/styles.css'
import '../../css/styles/App.css'

// strings ****
const whoIam = `Who I am.`
const whoIamSubtite = (
  <div>
    I am Sammy - But you want a little <i>more</i> than that
  </div>
)
const theBackstory = `The Backstory`
const eduAndPassion = `Education & Passion`
const aLittelMore = `A Little More...`
const designContentText = `Explore my design portfolio & case studies`
const codeContentText = `Breakdown the code behind my work & projects`
const experienceContentText = `Internships in UX/UI design & development`

// styled-components
const EducationAndPassion = styled.h2`
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
const EducationAndPassionText = styled.p`
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
const EducationImageWrapper = styled.div`
  text-align: center;
`
const EducationImageStyle = styled.img`
  margin-block-start: 50vh;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: 60%;
  padding: 0px;
  @media screen and (max-width: 960px) {
    margin-block-start: 10vh;
  }
`
const HeadShotImageStyle = styled.img`
  margin-block-start: 30vh;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: 80%;
  padding: 0px;
  @media screen and (max-width: 960px) {
    margin-block-start: 10vh;
  }
`
// components
// cover
const CoverChildren = (
  <div>
    <Menu config={StoryMenuConfig.config} options={StoryMenuConfig.options} />
    <SectionTitle
      title={whoIam}
      subtitle={[whoIamSubtite]}
      children={[
        <ScrollLink
          activeClass="active"
          className="about-scroller"
          to="about-scroller"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <Button >{theBackstory}</Button>
        </ScrollLink>,
      ]}
      story
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


const mobileBreakpoint = window.innerWidth < 960
const SideLeft = []
const SideRight = []

const SideLeftSec2 = mobileBreakpoint ? [] : []
const SideRightSec2 = mobileBreakpoint ? [] : []
// class Definition
class WebsiteWinter2020 extends React.PureComponent {
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
          <DoubleOffsetSection
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
          <DoubleOffsetSection
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
            reverse
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

export default WebsiteWinter2020

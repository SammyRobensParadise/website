// react
import React from 'react'
// components
import { Cover } from '../components/Cover'
import { SectionTitle } from '../components/SectionsTitle'
import { Footer } from '../components/Footer'
import { SocialButtons } from '../components/Social'
import {
  Menu,
  Button,
} from 'eunoia'
import { Link as ScrollLink, Element, Events } from 'react-scroll'
import { TriSection } from '../components/TriSection'
import { Header } from '../components/Headers'
// constants
import { UIStyle, MenuConfig } from '../constants/config'
import { ScrollArea, ActionDownArrow, ActionUpArrow } from '../constants/styles'
// css
import '../css/styles/styles.css'
import '../css/styles/App.css'

// strings ****
const whoIam = `Who I am.`
const whoIamSubtite = (
  <div>
    I am Sammy - But you want a little <i>more</i> than that
  </div>
)
const theBackstory = `The Backstory`
const designContentText = `Explore my design portfolio & case studies`
const codeContentText = `Breakdown the code behind my work & projects`
const experienceContentText = `Internships in UX/UI design & development`
// configs
const defaultHeaderConfig = {
  shouldRender: true,
  centerText: true,
  fontOverride: `Georgia Regular`,
  fontColor: UIStyle.UIColors.gold,
  fontSize: 30,
  height: 150,
  backgroundColor: UIStyle.UIColors.darkGrey,
}
// components
// cover
const CoverChildren = (
  <div>
    <Menu config={MenuConfig.config} options={MenuConfig.options} />
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
          <Button transparent>{theBackstory}</Button>
        </ScrollLink>,
      ]}
    />
  </div>
)

// design botton header section
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
    children={<ActionUpArrow color={UIStyle.UIColors.white} scalingFactor={2} offset={'13px'} />}
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

// cards
const designCardsLeft = []
const designCardsMiddle = []
const designCardsRight = []

// class Definition
class About extends React.PureComponent {
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
        <SocialButtons />
        <Cover children={CoverChildren} />
        <Element name="about-scroller" className="element">
          <TriSection
            leftChildren={[
              <ScrollArea height={'1000px'}>
                {designCardsLeft.map((e) => (
                  <div>{e}</div>
                ))}
              </ScrollArea>,
            ]}
            middleChildren={[
              <ScrollArea height={'1000px'}>
                {designCardsMiddle.map((e) => (
                  <div>{e}</div>
                ))}
              </ScrollArea>,
            ]}
            rightChildren={[
              <ScrollArea height={'1000px'}>
                {designCardsRight.map((e) => (
                  <div>{e}</div>
                ))}
              </ScrollArea>,
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

export default About

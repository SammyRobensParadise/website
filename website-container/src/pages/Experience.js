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
  SectionHeader,
  JiraIcon,
  GithubIndustryIcon,
  BitbucketIcon,
  ConfluenceIcon,
  GoogleAnalyticsIcon,
  GoogleCloudIcon,
  AWSIcon,
  InvisionIndustryIcon,
  SlackIcon,
  MicrosoftIcon,
} from 'eunoia'
import {
  HootsuiteExperienceCard,
  HootsuiteExperienceCardMobile,
  FingerFoodExperienceCard,
  FingerFoodExperienceCardMobile,
  EnvironmentCannadaExperienceCard,
  EnvironmentCannadaExperienceCardMobile,
} from '../constants/cards'
import { Link as ScrollLink, Element, Events } from 'react-scroll'
import { TriSection } from '../components/TriSection'
import { Tools } from '../components/Tools'
import { Header } from '../components/Headers'
import { UniSection } from '../components/UniSection'
// constants
import { UIStyle, MenuConfig } from '../constants/config'
import { HeaderContent, ScrollArea, ActionDownArrow, ActionUpArrow } from '../constants/styles'

// css
import '../css/styles/styles.css'
import '../css/styles/App.css'
import '../css/styles/spinners.css'
// strings ****
const experience = `Experience`
const experienceSubtitle = `Product, Design, Development`
const learnMore = `Leard more`
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
const CodeSectionHeaderConfig = {
  text: `My Industry Tools`,
  ...defaultHeaderConfig,
}
// components
// cover
const CoverChildren = (
  <div>
    <Menu config={MenuConfig.config} options={MenuConfig.options} />
    <SectionTitle
      title={experience}
      subtitle={[experienceSubtitle]}
      children={[
        <ScrollLink
          activeClass="active"
          className="experience-work"
          to="experience-work"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <Button transparent>{learnMore}</Button>
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
    children={<ActionUpArrow color={UIStyle.UIColors.white} scalingFactor={2} offset={'13px'} />}
  />
)

// cards
// if the window is less than 700, then render a traditionl card
const mobileBreakpoint = window.innerWidth < 700

const experienceCardsMiddle = mobileBreakpoint
  ? [
      HootsuiteExperienceCardMobile,
      FingerFoodExperienceCardMobile,
      EnvironmentCannadaExperienceCardMobile,
    ]
  : [HootsuiteExperienceCard, FingerFoodExperienceCard, EnvironmentCannadaExperienceCard]

// class Definition
class Experience extends React.PureComponent {
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
      <div className="code-wrapper">
        <SocialButtons />
        <Cover children={CoverChildren} />
        <Element name="experience-work" className="element">
          <UniSection
            middleChildren={[
              <ScrollArea height={'900px'}>
                {experienceCardsMiddle.map((e) => (
                  <div>{e}</div>
                ))}
              </ScrollArea>,
            ]}
          />
        </Element>
        <SectionHeader config={CodeSectionHeaderConfig}>
          <HeaderContent>{CodeSectionHeaderConfig.text}</HeaderContent>
        </SectionHeader>
        <Tools
          tools={[
            <JiraIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
            <GithubIndustryIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
            <BitbucketIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
            <ConfluenceIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
            <GoogleAnalyticsIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
            <GoogleCloudIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
            <AWSIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
            <InvisionIndustryIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
            <SlackIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
            <MicrosoftIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
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

export default Experience

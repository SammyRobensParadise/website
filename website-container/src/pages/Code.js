// react
import React, { useState } from 'react'
// components
import { Cover } from '../components/Cover'
import { SectionTitle } from '../components/SectionsTitle'
import { Footer } from '../components/Footer'
import { SocialButtons } from '../components/Social'
import {
  Menu,
  Button,
  SectionHeader,
  PhotoshopIcon,
  IllustratorIcon,
  ExperienceDesignerIcon,
  FigmaIcon,
  SketchIcon,
  InvisionIcon,
  AftereffectsIcon,
  IndesignIcon,
  MaterialDesignIcon,
  CreativecloudIcon,
} from 'eunoia'
import { Link as ScrollLink, Element, Events } from 'react-scroll'
import {getGitHubContributionsHistory} from 'github-contributions-counter'
import { TriSection } from '../components/TriSection'
import { Tools } from '../components/Tools'
import { Header } from '../components/Headers'
// constants
import { UIStyle, MenuConfig } from '../constants/config'
import { HeaderContent, ScrollArea, ActionDownArrow, ActionUpArrow } from '../constants/styles'
import {
  IntensifEyeDesignCard,
  GrapeDesignCard,
  Portfolio2020Card,
  Portfolio2019Card,
  BlanksDesignProblemCard,
  IllustrationsCard,
  RectCard,
  GlobalWineryDesignCard,
  PostersDesignCard,
} from '../constants/cards'
// css
import '../css/styles/styles.css'
import '../css/styles/App.css'

// strings ****
const code = `Code`
const codeSubtitle = `...`
const exploreMyWork = `Explore my work`
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
const DesignSectionHeaderConfig = {
  text: `My Design Tools`,
  ...defaultHeaderConfig,
}
// components
// cover
const CoverChildren = () => {
  const [contributionsString, getContributions] = useState(codeSubtitle);
  getGitHubContributionsHistory('SammyRobensParadise').then((response) => {
    console.log(response)
  })
  return (
    <div>
      <Menu config={MenuConfig.config} options={MenuConfig.options} />
      <SectionTitle
        title={code}
        subtitle={[contributionsString]}
        children={[
          <ScrollLink
            activeClass="active"
            className="design-work"
            to="design-work"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <Button transparent>{exploreMyWork}</Button>
          </ScrollLink>,
        ]}
      />
    </div>
  )
}

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
const designCardsLeft = [Portfolio2020Card, Portfolio2019Card, BlanksDesignProblemCard]
const designCardsMiddle = [IntensifEyeDesignCard, GrapeDesignCard, IllustrationsCard]
const designCardsRight = [RectCard, GlobalWineryDesignCard, PostersDesignCard]

// class Definition
class Code extends React.PureComponent {
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
        <Cover children={<CoverChildren />} />
        <Element name="design-work" className="element">
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
        <SectionHeader config={DesignSectionHeaderConfig}>
          <HeaderContent>{DesignSectionHeaderConfig.text}</HeaderContent>
        </SectionHeader>
        <Tools
          tools={[
            <PhotoshopIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
            <IllustratorIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
            <ExperienceDesignerIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
            <FigmaIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
            <SketchIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
            <InvisionIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
            <AftereffectsIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
            <IndesignIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
            <MaterialDesignIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
            <CreativecloudIcon color={UIStyle.UIColors.black} scalingFactor={1} />,
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

export default Code

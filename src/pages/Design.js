// react
import React, { Fragment } from 'react'
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
  /*BlanksDesignProblemCard, */
  IllustrationsCard,
  RecdCard,
  GlobalWineryDesignCard,
  PostersDesignCard,
  JunestreatCard,
  NyubCard,
} from '../constants/cards'
// css
import '../css/styles/styles.css'
import '../css/styles/App.css'

// strings ****
const design = `Design`
const designSubtitle = `Bold and creative solutions`
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
const CoverChildren = (
  <Fragment>
    <Menu config={MenuConfig.config} options={MenuConfig.options} />
    <SectionTitle
      title={design}
      subtitle={[designSubtitle]}
      children={[
        <ScrollLink
          activeClass="active"
          className="design-work"
          to="design-work"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <Button aria-label="explore my work" transparent>
            {exploreMyWork}
          </Button>
        </ScrollLink>,
      ]}
    />
  </Fragment>
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
const designCardsLeft = [Portfolio2020Card, Portfolio2019Card, JunestreatCard]
const designCardsMiddle = [IntensifEyeDesignCard, GrapeDesignCard, IllustrationsCard, NyubCard]
const designCardsRight = [RecdCard, GlobalWineryDesignCard, PostersDesignCard]

// class Definition
class Design extends React.PureComponent {
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
        <Element name="design-work" className="element">
          <TriSection
            leftChildren={[
              <ScrollArea height={'1000px'}>
                {designCardsLeft.map((e) => (
                  <Fragment>{e}</Fragment>
                ))}
              </ScrollArea>,
            ]}
            middleChildren={[
              <ScrollArea height={'1000px'}>
                {designCardsMiddle.map((e) => (
                  <Fragment>{e}</Fragment>
                ))}
              </ScrollArea>,
            ]}
            rightChildren={[
              <ScrollArea height={'1000px'}>
                {designCardsRight.map((e) => (
                  <Fragment>{e}</Fragment>
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
            <PhotoshopIcon
              color={UIStyle.UIColors.black}
              name="Photoshop"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <IllustratorIcon
              color={UIStyle.UIColors.black}
              name="Illustrator"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <ExperienceDesignerIcon
              color={UIStyle.UIColors.black}
              name="Adobe XD"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <FigmaIcon
              color={UIStyle.UIColors.black}
              name="Figma"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <SketchIcon
              color={UIStyle.UIColors.black}
              name="Sketch"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <InvisionIcon
              color={UIStyle.UIColors.black}
              name="Invision"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <AftereffectsIcon
              color={UIStyle.UIColors.black}
              name="After Effects"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <IndesignIcon
              color={UIStyle.UIColors.black}
              name="Indesign"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <MaterialDesignIcon
              color={UIStyle.UIColors.black}
              name="Material Design"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <CreativecloudIcon
              color={UIStyle.UIColors.black}
              name="Creative Cloud"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
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

export default Design

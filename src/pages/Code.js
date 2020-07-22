// react
import React, { useState, Fragment } from 'react'
// components
import { Cover } from '../components/Cover'
import { SectionTitle } from '../components/SectionsTitle'
import { Footer } from '../components/Footer'
import { SocialButtons } from '../components/Social'
import {
  Menu,
  Button,
  SectionHeader,
  ReactIcon,
  PythonIcon,
  WebpackIcon,
  NodeIcon,
  PHPIcon,
  JSIcon,
  GitLargeIcon,
  JenkinsIcon,
  K8sIcon,
  DockerIcon,
  SassIcon,
  CssIcon,
  HtmlIcon,
  YarnIcon,
  NpmIcon,
  UbuntuIcon,
  MySQLIcon,
  FirebaseIcon,
  JQueryIcon,
  CppIcon,
  TsIcon,
} from 'eunoia'
import { getGitHubContributionsHistory } from 'github-contributions-counter'
import { Link as ScrollLink, Element, Events } from 'react-scroll'
// import { getGitHubContributionsHistory } from 'github-contributions-counter'
import { TriSection } from '../components/TriSection'
import { Tools } from '../components/Tools'
import { Header } from '../components/Headers'
// constants
import { UIStyle, MenuConfig } from '../constants/config'
import { HeaderContent, ScrollArea, ActionDownArrow, ActionUpArrow } from '../constants/styles'
import {
  EunoiaCodeCard,
  GlobalWineryCodeCard,
  Portfolio2020CodeCard,
  GithubContributionsCounterCodeCard,
  ThonkJSCodeCard,
  IntensifEyeCodeCard,
  ArduinoScreamingCodeCard,
  ThisWebsiteCodeCard,
  Portfolio2019CodeCard,
} from '../constants/cards'
// css
import '../css/styles/styles.css'
import '../css/styles/App.css'
import '../css/styles/spinners.css'

// strings ****
const code = `Code`
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
const CodeSectionHeaderConfig = {
  text: `My Development Tools`,
  ...defaultHeaderConfig,
}
// components
// cover

const CoverChildren = () => {
  const [contributionsString, getContributions] = useState(<div className="spinner"></div>)
  getGitHubContributionsHistory('SammyRobensParadise', { proxy: true }).then((response) => {
    if (response[0].error) {
      getContributions(`Thousands contributions this year`)
    } else {
      // add code to support PUMA account contributions
      getGitHubContributionsHistory('SammyRP', { proxy: true }).then((secondResponse) => {
        if (secondResponse[0].error) {
          getContributions(`Thousands contributions this year`)
        } else {
          let totalContributions =
            parseInt(response[0].annualContributions, 10) +
            parseInt(secondResponse[0].annualContributions, 10)
          totalContributions = totalContributions.toString()
          getContributions(
            `${totalContributions.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} contributions this year`,
          )
        }
      })
    }
  })
  return (
    <Fragment>
      <Menu config={MenuConfig.config} options={MenuConfig.options} />
      <SectionTitle
        title={code}
        subtitle={[contributionsString]}
        children={[
          <ScrollLink
            activeClass="active"
            className="code-work"
            to="code-work"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <Button aria-label="explore my code" transparent>
              {exploreMyWork}
            </Button>
          </ScrollLink>,
        ]}
      />
    </Fragment>
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
    children={<ActionDownArrow color={UIStyle.UIColors.white} scalingFactor={2} offset={'13px'} />}
  />
)
const CodeHeader = (
  <Header
    config={codeHeaderConfigBottom}
    contentText={codeContentText}
    children={<ActionUpArrow color={UIStyle.UIColors.white} scalingFactor={2} offset={'13px'} />}
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
const codeCardsLeft = [EunoiaCodeCard, GlobalWineryCodeCard, Portfolio2020CodeCard]
const codeCardsMiddle = [GithubContributionsCounterCodeCard, ThonkJSCodeCard, IntensifEyeCodeCard]
const codeCardsRight = [ArduinoScreamingCodeCard, ThisWebsiteCodeCard, Portfolio2019CodeCard]

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
      <div className="code-wrapper">
        <SocialButtons />
        <Cover children={<CoverChildren />} />
        <Element name="code-work" className="element">
          <TriSection
            leftChildren={[
              <ScrollArea height={'1000px'}>
                {codeCardsLeft.map((e) => (
                  <Fragment>{e}</Fragment>
                ))}
              </ScrollArea>,
            ]}
            middleChildren={[
              <ScrollArea height={'1000px'}>
                {codeCardsMiddle.map((e) => (
                  <Fragment>{e}</Fragment>
                ))}
              </ScrollArea>,
            ]}
            rightChildren={[
              <ScrollArea height={'1000px'}>
                {codeCardsRight.map((e) => (
                  <Fragment>{e}</Fragment>
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
            <ReactIcon
              color={UIStyle.UIColors.black}
              name="React.js"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <PythonIcon
              color={UIStyle.UIColors.black}
              name="Python"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <WebpackIcon
              color={UIStyle.UIColors.black}
              name="Webpack"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <NodeIcon
              color={UIStyle.UIColors.black}
              name="Node.js"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <PHPIcon
              color={UIStyle.UIColors.black}
              name="PHP"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <JSIcon
              color={UIStyle.UIColors.black}
              name="JavaScript"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <TsIcon
              color={UIStyle.UIColors.black}
              name="TypeScript"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <GitLargeIcon
              color={UIStyle.UIColors.black}
              name="Git"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <JenkinsIcon
              color={UIStyle.UIColors.black}
              name="Jenkins"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <K8sIcon
              color={UIStyle.UIColors.black}
              name="Kubernetes"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <DockerIcon
              color={UIStyle.UIColors.black}
              name="Docker"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <SassIcon
              color={UIStyle.UIColors.black}
              name="Sass"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <CssIcon
              color={UIStyle.UIColors.black}
              name="CSS"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <HtmlIcon
              color={UIStyle.UIColors.black}
              name="HTML"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <YarnIcon
              color={UIStyle.UIColors.black}
              name="Yarn"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <NpmIcon
              color={UIStyle.UIColors.black}
              name="NPM"
              font="Helvetica Neue"
              scalingFactor={window.innerWidth < 780 ? 0.6 : 1}
            />,
            <UbuntuIcon
              color={UIStyle.UIColors.black}
              name="Ubuntu"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <MySQLIcon
              color={UIStyle.UIColors.black}
              name="MS SQL Server"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <FirebaseIcon
              color={UIStyle.UIColors.black}
              name="Firebase"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <JQueryIcon
              color={UIStyle.UIColors.black}
              name="JQuery"
              font="Helvetica Neue"
              scalingFactor={1}
            />,
            <CppIcon
              color={UIStyle.UIColors.black}
              name="C++"
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

export default Code

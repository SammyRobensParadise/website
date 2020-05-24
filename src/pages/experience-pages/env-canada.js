// react
import React, { Fragment } from 'react'
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
import { EnvCanadaURL } from '../../constants/links'
import { EnvCanadaStrings } from './strings'
// css
import '../../css/styles/styles.css'
import '../../css/styles/App.css'

// strings ****
const envCanadaTitle = `Data Software Engineer`
const envCanadaSubtitle = `Environment & Climate Change Canada`
const viewEnvironmentCanada = `View Environment Canada`
const learnMore = `Learn More`

// tri section strings
const designContentText = `Explore my design portfolio & case studies`
const codeContentText = `Breakdown the code behind my work & projects`
const experienceContentText = `Internships in UX/UI design & development`

// styled-components
const StoryCenterWrapper = styled.div`
  text-align: center;
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
      <a href={EnvCanadaURL}>
        <ActionWrapper>
          <ActionCircleButton transparent aria-label={viewEnvironmentCanada} height={'66px'}>
            <ActionRightArrow color={UIStyle.UIColors.black} scalingFactor={2} offset={'11px'} />
          </ActionCircleButton>
        </ActionWrapper>
        <ActionWrapper>
          <ActionText>{viewEnvironmentCanada}</ActionText>
        </ActionWrapper>
      </a>
    </Grid>
  </Grid>
)

const CoverChildren = (
  <Fragment>
    <Menu config={StoryMenuConfig.config} options={StoryMenuConfig.options} />
    <SectionTitle
      title={envCanadaTitle}
      subtitle={[envCanadaSubtitle]}
      children={[CoverActionButtons]}
      story
      coverImageURL={'https://i.ibb.co/t2f1rR8/env-can-logo-4x-100.jpg'}
    />
  </Fragment>
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
const Header1 = <HeaderT padding={5}>{EnvCanadaStrings.section1.title}</HeaderT>
const Paragraph1 = EnvCanadaStrings.section1.text[0]

// section 2
const Header2 = <HeaderT padding={5}>{EnvCanadaStrings.section2.title}</HeaderT>
const Paragraph2 = EnvCanadaStrings.section2.text[0]

// arrays mapped
const Sec1 = [Header1, Paragraph1]
const Sec2 = [Header2, Paragraph2]
// class Definition
class EnvCanada extends React.PureComponent {
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
          <UniSection
            middleChildren={[
              <Fragment>
                {Sec1.map((e) => (
                  <Fragment>{e}</Fragment>
                ))}
              </Fragment>,
            ]}
          />
          <UniSection
            middleChildren={[
              <Fragment>
                {Sec2.map((e) => (
                  <Fragment>{e}</Fragment>
                ))}
              </Fragment>,
            ]}
          />
          <UniSection
            middleChildren={[
              <StoryCenterWrapper>
                <Button
                  onClick={() => window.open(EnvCanadaURL, '_self')}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      window.open(EnvCanadaURL, '_self')
                    }
                  }}
                >
                  {viewEnvironmentCanada}
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

export default EnvCanada

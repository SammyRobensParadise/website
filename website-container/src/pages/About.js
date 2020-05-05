// react
import React from 'react'
// components
import { Cover } from '../components/Cover'
import { SectionTitle } from '../components/SectionsTitle'
import { Footer } from '../components/Footer'
import { SocialButtons } from '../components/Social'
import { Menu, Button } from 'eunoia'
import { Link as ScrollLink, Element, Events } from 'react-scroll'
import { TriSection } from '../components/TriSection'
import { DoubleOffsetSection } from '../components/DoubleSection'
import { Header } from '../components/Headers'
// constants
import { UIStyle, MenuConfig } from '../constants/config'
import { ActionDownArrow } from '../constants/styles'
import styled from 'styled-components'
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

// component render lists
/**
 * Section 1
 */
const EducationAndPassionTitle = <EducationAndPassion>{eduAndPassion}</EducationAndPassion>
const EducationAndPassionBody = (
  <EducationAndPassionText>
    {
      <div>
        <p>
          I study Systems Design Engineering at the University of Waterloo (Grad. 2023). If you are
          thinking “what <i>even</i> is Systems Design Engineering” You are not alone. Systems
          Design Engineering is that we must create problem-based solutions to complex systems level
          problems using principles of UX/UI and ergonomic design, engineering and creativity.
        </p>
        <p>
          {
            'I chose to study Systems Design at Canada’s top engineering school because I have a long standing passion for the way humans interact with technology, especially those who suffer from a disability or mental illness (over 20% of Americans), As part of my degree I hope to pursue a specialization in accessible design.'
          }
        </p>
      </div>
    }
  </EducationAndPassionText>
)
const EducationImage = (
  <EducationImageWrapper>
    <EducationImageStyle
      src="https://i.ibb.co/8gKFvJx/education-logo.png"
      alt="education-logo"
      border="0"
    />
  </EducationImageWrapper>
)

/**
 * Section 2
 */
const ALittleMore = <EducationAndPassion>{aLittelMore}</EducationAndPassion>
const ALittleMoreText = (
  <EducationAndPassionText>
    {
      <div>
        <p>
          {
            'Growing up in East Vancouver, BC I developed a love and appreciation for nature and our environment . As a result, I am very passionate about sustainable engineering solutions to some of the worlds most challenging problems. I believe that designing a solution extends far beyond the immediate result.'
          }
        </p>
        <p>
          {
            'What about the non-engineering stuff… I love music, playing guitar, soccer, snowboarding and travelling, drawing painting, backpacking and exploring! I will never say no to a concert, or a good hike with my dog!'
          }
        </p>
      </div>
    }
  </EducationAndPassionText>
)

const HeadShotImage = (
  <EducationImageWrapper>
    <HeadShotImageStyle
      src="https://i.ibb.co/8gtRtBJ/headshot-copy.png"
      alt="headshot-copy"
      border="0"
    />
  </EducationImageWrapper>
)

const mobileBreakpoint = window.innerWidth < 960
const SideLeft = [EducationAndPassionTitle, EducationAndPassionBody]
const SideRight = [EducationImage]

const SideLeftSec2 = mobileBreakpoint ? [ALittleMore, ALittleMoreText] : [HeadShotImage]
const SideRightSec2 = mobileBreakpoint ? [HeadShotImage] : [ALittleMore, ALittleMoreText]
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

export default About

// react
import React from 'react'
// components
import { Cover } from '../components/Cover'
import { SectionTitle } from '../components/SectionsTitle'
import { Footer } from '../components/Footer'
import { SocialButtons } from '../components/Social'
import { Menu, Button } from 'eunoia'
import { Link as ScrollLink, Element, Events } from 'react-scroll'
import { UniSection } from '../components/UniSection'
// constants
import { UIStyle, MenuConfig } from '../constants/config'
import { ScrollArea } from '../constants/styles'
import styled from 'styled-components'
// css
import '../css/styles/styles.css'
import '../css/styles/App.css'
// strings ****
let d = new Date()
const policy = `Policy`
const policySubtitle = `© ${d.getFullYear()} Sam my  Robens-Paradise`
const learnMore = `Policy`

// components
const PolicyText = styled.div`
  font-family: Helvetica Neue;
  letter-spacing: 0px;
  color: ${UIStyle.UIColors.black};
  font-weight: 400;
  font-size: 22px;
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
// cover
const CoverChildren = (
  <div>
    <Menu config={MenuConfig.config} options={MenuConfig.options} />
    <SectionTitle
      title={policy}
      subtitle={[policySubtitle]}
      children={[
        <ScrollLink
          activeClass="active"
          className="experience-work"
          to="experience-work"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <Button aria-label={learnMore} transparent>{learnMore}</Button>
        </ScrollLink>,
      ]}
    />
  </div>
)

// design botton header section

// cards
const PolicyWriteup = (
  <PolicyText>
    <h1>Welcome to my Privacy Policy</h1>
    <h3>Your privacy is critically important to us.</h3>
    <p>
      It is Sam my  Robens-Paradise's policy to respect your privacy regarding any information we may
      collect while operating my website. This Privacy Policy applies to
      <a href={window.origin}> {window.origin}</a> (hereinafter, "us", "we", or
      "https://sam my .world"). We respect your privacy and are committed to protecting personally
      identifiable information you may provide us through the Website. We have adopted this privacy
      policy ("Privacy Policy") to explain what information may be collected on my Website, how we
      use this information, and under what circumstances we may disclose the information to third
      parties. This Privacy Policy applies only to information we collect through the Website and
      does not apply to my collection of information from other sources.
    </p>
    <p>
      This Privacy Policy, together with the Terms and conditions posted on my Website, set forth
      the general rules and policies governing your use of  my  Website. Depending on your activities
      when visiting my Website, you may be required to agree to additional terms and conditions.
    </p>
    <h2>Cookies</h2>
    <p>
      To enrich and perfect your online experience, Sam my  Robens-Paradise uses "Cookies", similar
      technologies and services provided by others to display personalized content, appropriate
      advertising and store your preferences on your computer.
    </p>
    <p>
      A cookie is a string of information that a website stores on a visitor's computer, and that
      the visitor's browser provides to the website each time the visitor returns. Sam my 
      Robens-Paradise uses cookies to help Sam my  Robens-Paradise identify and track visitors, their
      usage of https://sam my .world, and their website access preferences. Sam my  Robens-Paradise
      visitors who do not wish to have cookies placed on their computers should set their browsers
      to refuse cookies before using Sam my  Robens-Paradise's websites, with the drawback that
      certain features of Sam my  Robens-Paradise's websites may not function properly without the aid
      of cookies.
    </p>
    <p>
      By continuing to navigate my website without changing your cookie settings, you hereby
      acknowledge and agree to Sam my  Robens-Paradise's use of cookies.
    </p>
    <h2>{policySubtitle}</h2>
    <p>Thank you.</p>
    <h2>{'Credit & Contact Information'}</h2>
    <p>
      If you have any questions about this Privacy Policy, please contact us via{' '}
      <a href="mailto:srobensparadise@gmail.com">email</a> or <a href="tel:7788879189">phone</a>.
    </p>
  </PolicyText>
)

const policyCardsMiddle = [PolicyWriteup]

// class Definition
class Policy extends React.PureComponent {
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
      <div className="ppolicy-wrapper">
        <SocialButtons />
        <Cover children={CoverChildren} />
        <Element name="experience-work" className="element">
          <UniSection
            middleChildren={[
              <ScrollArea height={'900px'}>
                {policyCardsMiddle.map((e) => (
                  <div>{e}</div>
                ))}
              </ScrollArea>,
            ]}
          />
        </Element>

        <Footer />
      </div>
    )
  }
}

export default Policy

import React from "react"
import "../css/styles/App.css"
import { Cover } from "../components/Cover"
import { MainTitle } from "../components/MainTitle"
import { MainExplainationGrid } from "../components/MainExplainationGrid"
import { TriSection } from "../components/TriSection"
import { MainDoubleGrid } from "../components/MainDoubleSection"
import { Footer } from "../components/Footer"
import { SocialButtons } from "../components/Social"
import { Menu, SectionHeader } from "eunoia"
import { Header } from "../components/Headers"
import { UniSection } from "../components/UniSection"
import { Grid } from "@material-ui/core"
import styled from "styled-components"
import { Link as ScrollLink, Element, Events } from "react-scroll"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { Link } from "react-router-dom"
// constants
import { MenuConfig } from "../constants/config"
import { resumeLink } from "../constants/links"
import {
    ActionButton,
    ActionCircleButton,
    ActionRightArrow,
    ActionDownArrow,
    ScrollArea,
    HeaderContent,
    ActionWrapper
} from "../constants/styles"
import {
    IntensifEyeArticleCard,
    AccessibleReactAppCard,
    IntensifEyeDesignCard,
    GrapeDesignCard,
    EunoiaCodeCard,
    GlobalWineryCodeCard
} from "../constants/cards"

import { UIStyle } from "../constants/config"
// css
import "../css/styles/styles.css"

// strings ****
// Cover ****
const name = `Sammy Robens-Paradise`
const uxDesigner = `UX DESIGNER`
const Developer = `DEVELOPER`
const Resume = `Resume`
const ExperienceAndProjects = `Experience & Projects`

// Section 1 ***Î
const skipFluff = `Skip the fluff.`
const skipFlufftext = `I am Sammy Robens-Paradise from the University of Waterloo and I study the ways humans interact with technology. I have worked with world-famous companies to create beautiful products and experiences.`

// Header 2 ***
const designContentText = `Explore my design portfolio & case studies`
const codeContentText = `Breakdown the code behind my work & projects`
const experienceContentText = `Internships in UX/UI design & development`

// Section 2 ***
const myPassion = `My Passion`
const myPassionText = `We have a responsability to use it to improve the lives of all people, and the environment. As someone who advocates optimized engineering solutions, I continue on my journey to find the most eloquent and beautiful solutions to the worlds most challenging problems. I have always taken an interest in the way humans interact with technology, and more specifically, the way it shapes our experiences.`
// styled-components ****
// Cover

const ActionExperienceAndProjectsText = styled.h4`
    display: inline-block;
    font-family: Helvetica Neue;
    letter-spacing: 0px;
    color: ${UIStyle.UIColors.white};
    font-weight: 400;
    font-size: 18px;
`
// section 1

const SammyBikingImageStyle = styled(LazyLoadImage)`
    margin-block-start: 20vh;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    width: 100%;
    padding: 0px;
    height: 20rem;
    width: auto;
`
const SkipTheFluffStyle = styled.h2`
    margin-block-start: 20vh;
    font-family: Georgia Regular;
    text-align: left;
    font-size: 64px;
    letter-spacing: 0px;
    font-weight: 200;
    color: ${UIStyle.UIColors.black};
    padding-left: 20%;
    @media screen and (max-width: 960px) {
        padding-left: 10%;
        margin-block-start: 15vh;
    }
    @media screen and (max-width: 820px) {
        padding-left: 10%;
        margin-block-start: 24vh;
    }
    @media screen and (max-width: 705px) {
        padding-left: 10%;
        margin-block-start: 30vh;
    }
    @media screen and (max-width: 600px) {
        margin-block-start: 60vh;
    }
    @media screen and (max-width: 460px) {
        font-size: 40px;
    }
    @media screen and (max-width: 440px) {
        margin-block-start: 70vh;
    }
`
const IntroTextStyle = styled.p`
    font-family: Helvetica Neue;
    letter-spacing: 0px;
    color: ${UIStyle.UIColors.black};
    font-weight: 400;
    font-size: 18px;
    text-align: left;
    width: 60%;
    line-height: 28px;
    padding-left: 20%;
    @media screen and (max-width: 1260px) {
        line-height: 28px;
        width: 70%;
    }
    @media screen and (max-width: 960px) {
        padding-left: 10%;
        width: 80%;
    }
`
// header 2

// section 2

const SammySkatingImageStyle = styled(LazyLoadImage)`
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    width: 100%;
    padding: 0px;
    height: 20rem;
    width: auto;
`
const MyPassion = styled.h2`
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
const MyPassionText = styled.p`
    font-family: Helvetica Neue;
    letter-spacing: 0px;
    color: ${UIStyle.UIColors.black};
    font-weight: 400;
    font-size: 18px;
    text-align: left;
    width: 82%;
    line-height: 28px;
    padding-left: 10%;
    @media screen and (max-width: 1260px) {
        line-height: 24px;
    }
    @media screen and (max-width: 960px) {
        padding-left: 5%;
    }
`

const Quote = styled.p`
    padding-top: 60px;
    font-family: Helvetica Neue;
    letter-spacing: 0px;
    color: ${UIStyle.UIColors.black};
    font-weight: 200;
    font-size: 18px;
    text-align: left;
    width: ${(p) => (p.wide ? "88%" : "82%")};
    line-height: 28px;
    font-style: italic;
    padding-left: ${(p) => (p.padding ? `${p.padding}%` : `10%`)};
    @media screen and (max-width: 1260px) {
        line-height: 28px;
    }
    @media screen and (max-width: 960px) {
        width: 80%;
        padding-left: 10%;
    }
    @media screen and (max-width: 460px) {
        font-size: 18px;
    }
    @media screen and (min-width: 2200px) {
        text-align: center;
    }
`
const QuoteName = styled.p`
    font-family: Helvetica Neue;
    letter-spacing: 0px;
    color: ${UIStyle.UIColors.black};
    font-weight: 200;
    font-size: 18px;
    text-align: right;
    padding-right: 10px;
    width: ${(p) => (p.wide ? "88%" : "82%")};
    line-height: 28px;
    font-style: italic;
    padding-left: ${(p) => (p.padding ? `${p.padding}%` : `2%`)};
    @media screen and (max-width: 1260px) {
        line-height: 28px;
    }
    @media screen and (max-width: 960px) {
        width: 80%;
        padding-left: 10%;
    }
    @media screen and (max-width: 460px) {
        font-size: 18px;
    }
    @media screen and (min-width: 2200px) {
        text-align: center;
        padding-left: 10%;
    }
`
// components
/**
 * Cover
 */
const CoverActionButtons = (
    <Grid spacing={3}>
        <Grid item>
            <ActionButton
                aria-label="view resume"
                onClick={() => window.open(resumeLink, "_self")}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        window.open(resumeLink, "_self")
                    }
                }}
                transparent
            >
                {Resume}
            </ActionButton>
            <ScrollLink
                activeClass="active"
                className="explore-sections"
                to="explore-sections"
                spy={true}
                smooth={true}
                duration={1000}
                style={{ cursor: "pointer" }}
            >
                <ActionWrapper>
                    <ActionExperienceAndProjectsText
                        style={{ cursor: "pointer" }}
                    >
                        {ExperienceAndProjects}
                    </ActionExperienceAndProjectsText>
                </ActionWrapper>
                <ActionWrapper style={{ paddingLeft: "2rem" }}>
                    <ActionCircleButton
                        aria-label="view projects"
                        transparent
                        height={"66px"}
                    >
                        <ActionRightArrow
                            color={UIStyle.UIColors.white}
                            scalingFactor={2}
                            offset={"11px"}
                        />
                    </ActionCircleButton>
                </ActionWrapper>
            </ScrollLink>
        </Grid>
    </Grid>
)
const CoverChildren = (
    <>
        <Menu config={MenuConfig.config} options={MenuConfig.options} />
        <MainTitle
            title={name}
            subtitle={[uxDesigner, Developer]}
            children={[CoverActionButtons]}
        />
    </>
)
/**
 * Explaination
 */
const SammyBikingImage = (
    <SammyBikingImageStyle
        effect="blur"
        src="https://i.ibb.co/GtVgcdv/Sammy-Biking-Grey.png"
        alt="Sammy-Biking-Grey"
        border="0"
    />
)
const IntroTextTitle = <SkipTheFluffStyle>{skipFluff}</SkipTheFluffStyle>
const IntroText = <IntroTextStyle>{skipFlufftext}</IntroTextStyle>

/**
 * Section 2 Header
 */
const defaultHeaderConfig = {
    shouldRender: true,
    centerText: true,
    fontOverride: `Georgia Regular`,
    fontColor: UIStyle.UIColors.compGold,
    fontSize: 30,
    height: 300,
    backgroundColor: UIStyle.UIColors.primary
}

const designHeaderConfig = {
    text: "Design",
    link: "/design",
    ...defaultHeaderConfig
}
const codeHeaderConfig = {
    text: "Code",
    link: "/code",
    ...defaultHeaderConfig
}

const experienceHeaderConfig = {
    text: "Experience",
    link: "/experience",
    ...defaultHeaderConfig
}

const DesignHeader = (
    <Header
        config={designHeaderConfig}
        contentText={designContentText}
        children={
            <ActionDownArrow
                aria-label="design"
                color={UIStyle.UIColors.white}
                scalingFactor={2}
                offset={"13px"}
            />
        }
    />
)
const CodeHeader = (
    <Header
        config={codeHeaderConfig}
        contentText={codeContentText}
        children={
            <ActionDownArrow
                aria-label="code"
                color={UIStyle.UIColors.white}
                scalingFactor={2}
                offset={"13px"}
            />
        }
    />
)
const ExperienceHeader = (
    <Header
        config={experienceHeaderConfig}
        contentText={experienceContentText}
        children={
            <ActionDownArrow
                aria-label="experience"
                color={UIStyle.UIColors.white}
                scalingFactor={2}
                offset={"13px"}
            />
        }
    />
)

/**
 * Section 2
 */
const SammySkatingImage = (
    <SammySkatingImageStyle
        effect="blur"
        src="https://i.ibb.co/vjhSpKz/sammyskatingbw-removebg.png"
        alt="sammyskatingbw"
        border="0"
    />
)
const MyPassionTextTitle = <MyPassion>{myPassion}</MyPassion>
const MyPassionTextBody = <MyPassionText>{myPassionText}</MyPassionText>

/**
 * section 3 header
 */

const section3DefaultHeaderConfig = {
    shouldRender: true,
    centerText: true,
    fontOverride: `Georgia Regular`,
    fontColor: UIStyle.UIColors.compGold,
    fontSize: 30,
    height: 125,
    backgroundColor: UIStyle.UIColors.primary
}
const section3ArticleHeaderConfig = {
    text: "Articles",
    ...section3DefaultHeaderConfig
}
const section3DesignHeaderConfig = {
    text: "Design",
    ...section3DefaultHeaderConfig
}

const section3CodeHeaderConfig = {
    text: "Code",
    ...section3DefaultHeaderConfig
}

const Design3Header = (
    <SectionHeader config={section3ArticleHeaderConfig}>
        <div className="-3-articles-header">
            <HeaderContent isThree>
                {section3ArticleHeaderConfig.text}
            </HeaderContent>
        </div>
    </SectionHeader>
)
const Code3Header = (
    <SectionHeader config={section3DesignHeaderConfig}>
        <div className="-3-design-header">
            <HeaderContent isThree>
                {section3DesignHeaderConfig.text}
            </HeaderContent>
        </div>
    </SectionHeader>
)
const Experience3Header = (
    <SectionHeader config={section3CodeHeaderConfig}>
        <div className="-3-code-header">
            <HeaderContent isThree>
                {section3CodeHeaderConfig.text}
            </HeaderContent>
        </div>
    </SectionHeader>
)

const EvelinaQuote = `"Sammy inspired me beyond the logo design for my brand, Bringing amazing energy to the product and a helpful attitude that catered to the specific needs of myself and the project."`
const EvelinaName = `- Evelina Edwardsson, Founder of Junestreat`
const QuoteSections = <Quote>{EvelinaQuote}</Quote>
const QuoteNameE = <QuoteName>{EvelinaName}</QuoteName>
const QuoteLink = (
    <QuoteName>
        <Link to="/junestreat">Read the story.</Link>
    </QuoteName>
)

const RobKQuote = `"Sammy developed with a systems-level perspective towards improving products in sustainable ways and used engineering ingenuity to overcome obstacles encountered, modify designs and propose additional projects & features. Sammy introduced new architectural software components and championed our transition to a more modern version control development platform – two foundational contributions that will be used well into the future."`
const RobKName = `- Rob Kraft, P. Eng., MASc. President of PUMA`
const QuoteRK = <Quote>{RobKQuote}</Quote>
const QuoteNameR = <QuoteName>{RobKName}</QuoteName>
const QuoteLinkR = (
    <QuoteName>
        <Link to="/puma">Read the story.</Link>
    </QuoteName>
)

/**
 * Section 3
 */

const articleCards = [IntensifEyeArticleCard, AccessibleReactAppCard]
const designCards = [IntensifEyeDesignCard, GrapeDesignCard]
const codeCards = [EunoiaCodeCard, GlobalWineryCodeCard]
const Sec4 = [QuoteSections, QuoteNameE, QuoteLink]
const Sec5 = [QuoteRK, QuoteNameR, QuoteLinkR]
// class Definition
class Main extends React.PureComponent {
    componentDidMount() {
        Events.scrollEvent.register("begin")

        Events.scrollEvent.register("end")
    }
    componentWillUnmount() {
        Events.scrollEvent.remove("begin")
        Events.scrollEvent.remove("end")
    }
    render() {
        return (
            <div className="main-wrapper">
                <SocialButtons />
                <Cover children={CoverChildren} />
                <MainExplainationGrid
                    rightChildren={[SammyBikingImage]}
                    leftChildren={[IntroTextTitle, IntroText]}
                />
                <UniSection
                    middleChildren={[
                        <>
                            {Sec4.map((e) => (
                                <>{e}</>
                            ))}
                        </>
                    ]}
                />
                <UniSection
                    middleChildren={[
                        <>
                            {Sec5.map((e) => (
                                <>{e}</>
                            ))}
                        </>
                    ]}
                />
                <TriSection
                    leftChildren={[DesignHeader]}
                    middleChildren={[CodeHeader]}
                    rightChildren={[ExperienceHeader]}
                />
                <MainDoubleGrid
                    rightChildren={[SammySkatingImage]}
                    leftChildren={[MyPassionTextTitle, MyPassionTextBody]}
                />
                <Element name="explore-sections" className="element">
                    <TriSection
                        leftChildren={[
                            Design3Header,
                            <ScrollArea>
                                {articleCards.map((node) => (
                                    <>{node}</>
                                ))}
                            </ScrollArea>
                        ]}
                        middleChildren={[
                            Code3Header,
                            <ScrollArea>
                                {designCards.map((node) => (
                                    <>{node}</>
                                ))}
                            </ScrollArea>
                        ]}
                        rightChildren={[
                            Experience3Header,
                            <ScrollArea>
                                {codeCards.map((node) => (
                                    <>{node}</>
                                ))}
                            </ScrollArea>
                        ]}
                    />
                </Element>
                <Footer />
            </div>
        )
    }
}

export default Main

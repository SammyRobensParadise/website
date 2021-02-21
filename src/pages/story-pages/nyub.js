// react
import React from "react"
// components
import { Grid } from "@material-ui/core"
import { Menu, Button } from "eunoia"
import styled from "styled-components"
import "react-lazy-load-image-component/src/effects/blur.css"
import { StoryCover } from "../../components/StoryCover"
import { SectionTitle } from "../../components/SectionsTitle"
import { Footer } from "../../components/Footer"
import { StorySocialButtons } from "../../components/Social"
import { Link as ScrollLink, Element, Events } from "react-scroll"
import { TriSection } from "../../components/TriSection"
import { UniSection } from "../../components/UniSection"
import { Header } from "../../components/Headers"
import { AdobeDesignChallengeURL } from "../../constants/links"
// constants
import { UIStyle, StoryMenuConfig } from "../../constants/config"
import {
    ActionDownArrow,
    ActionWrapper,
    ActionCircleButton,
    ActionRightArrow,
    ActionText,
    HeaderT
} from "../../constants/styles"
import { AdobeDesignChallengeStrings } from "./strings"
// css
import "../../css/styles/styles.css"
import "../../css/styles/App.css"

// strings ****
const nyubTitle = `Adobe Design Challenge`
const nyubSubtitle = `Adobe XD and Activision design challenge for modern gaming`
const viewProject = `View Project`
const learnMore = `Learn More`

// tri section strings
const designContentText = `Explore my design portfolio & case studies`
const codeContentText = `Breakdown the code behind my work & projects`
const experienceContentText = `Internships in UX/UI design & development`

// styled-components

const StoryCenterWrapper = styled.div`
    text-align: center;
`
const PhoneIFrame = styled.iframe`
    @media screen and (max-width: 1000px) {
        margin-block-start: 100px;
    }
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
                <Button
                    style={{ backgroundColor: UIStyle.UIColors.white }}
                    aria-label={learnMore}
                >
                    {learnMore}
                </Button>
            </ScrollLink>
            <a href={AdobeDesignChallengeURL}>
                <ActionWrapper>
                    <ActionCircleButton
                        transparent
                        aria-label={viewProject}
                        height={"66px"}
                    >
                        <ActionRightArrow
                            color={UIStyle.UIColors.black}
                            scalingFactor={2}
                            offset={"11px"}
                        />
                    </ActionCircleButton>
                </ActionWrapper>
                <ActionWrapper>
                    <ActionText>{viewProject}</ActionText>
                </ActionWrapper>
            </a>
        </Grid>
    </Grid>
)

const CoverChildren = (
    <>
        <Menu
            config={StoryMenuConfig.config}
            options={StoryMenuConfig.options}
        />
        <SectionTitle
            title={nyubTitle}
            subtitle={[nyubSubtitle]}
            children={[CoverActionButtons]}
            story
            coverImageURL={"https://i.ibb.co/XS82cCc/nyub-1-4x.png"}
        />
    </>
)

// design bottom header section
const defaultHeaderConfigBottom = {
    shouldRender: true,
    centerText: true,
    fontOverride: `Georgia Regular`,
    fontColor: UIStyle.UIColors.compGold,
    fontSize: 30,
    height: 300,
    backgroundColor: UIStyle.UIColors.primary
}

const designHeaderConfigBottom = {
    text: "Design",
    link: "/design",
    ...defaultHeaderConfigBottom
}
const codeHeaderConfigBottom = {
    text: "Code",
    link: "/code",
    ...defaultHeaderConfigBottom
}

const experienceHeaderConfigBottom = {
    text: "Experience",
    link: "/experience",
    ...defaultHeaderConfigBottom
}

const DesignHeader = (
    <Header
        config={designHeaderConfigBottom}
        contentText={designContentText}
        children={
            <ActionDownArrow
                color={UIStyle.UIColors.white}
                scalingFactor={2}
                offset={"13px"}
            />
        }
    />
)
const CodeHeader = (
    <Header
        config={codeHeaderConfigBottom}
        contentText={codeContentText}
        children={
            <ActionDownArrow
                color={UIStyle.UIColors.white}
                scalingFactor={2}
                offset={"13px"}
            />
        }
    />
)
const ExperienceHeader = (
    <Header
        config={experienceHeaderConfigBottom}
        contentText={experienceContentText}
        children={
            <ActionDownArrow
                color={UIStyle.UIColors.white}
                scalingFactor={2}
                offset={"13px"}
            />
        }
    />
)

const Image1 = (
    <StoryCenterWrapper>
        <div class="iphone-x">
            <div class="side">
                <div class="screen">
                    <PhoneIFrame
                        title="nyub"
                        src="https://xd.adobe.com/embed/73c0dc30-90e5-4089-99d1-7a9890c02c31-2693/?fullscreen"
                        frameborder="0"
                        allowfullscreen
                    ></PhoneIFrame>{" "}
                </div>
            </div>
            <div class="line"></div>
            <div class="header">
                <div class="sensor-1"></div>
                <div class="sensor-2"></div>
                <div class="sensor-3"></div>
            </div>
            <div class="volume-button"></div>
            <div class="power-button"></div>
        </div>
    </StoryCenterWrapper>
)

// section 2
const Header2 = (
    <HeaderT padding={5}>{AdobeDesignChallengeStrings.section2.title}</HeaderT>
)
const Paragraph2 = AdobeDesignChallengeStrings.section2.text[0]

// arrays mapped
const Sec1 = [Image1]
const Sec2 = [Header2, Paragraph2]

// class Definition
class ThisWebsite extends React.PureComponent {
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
            <div className="Design-wrapper">
                <StorySocialButtons />
                <StoryCover children={CoverChildren} />
                <Element name="about-scroller" className="element">
                    <UniSection
                        middleChildren={[
                            <>
                                {Sec1.map((e) => (
                                    <>{e}</>
                                ))}
                            </>
                        ]}
                    />
                    <UniSection
                        middleChildren={[
                            <>
                                {Sec2.map((e) => (
                                    <>{e}</>
                                ))}
                            </>
                        ]}
                    />
                    <UniSection
                        middleChildren={[
                            <StoryCenterWrapper>
                                <Button
                                    style={{
                                        backgroundColor: UIStyle.UIColors.white
                                    }}
                                    aria-label={viewProject}
                                    onClick={() =>
                                        window.open(
                                            AdobeDesignChallengeURL,
                                            "_self"
                                        )
                                    }
                                    onKeyPress={(e) => {
                                        if (e.key === "Enter") {
                                            window.open(
                                                AdobeDesignChallengeURL,
                                                "_self"
                                            )
                                        }
                                    }}
                                >
                                    {viewProject}
                                </Button>
                            </StoryCenterWrapper>
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

export default ThisWebsite

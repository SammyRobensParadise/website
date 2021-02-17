// react
import React from "react"
// components
import { Grid } from "@material-ui/core"
import { Menu, Button } from "eunoia"
import styled from "styled-components"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { StoryCover } from "../../components/StoryCover"
import { SectionTitle } from "../../components/SectionsTitle"
import { Footer } from "../../components/Footer"
import { StorySocialButtons } from "../../components/Social"
import { Link as ScrollLink, Element, Events } from "react-scroll"
import { TriSection } from "../../components/TriSection"
import { UniSection } from "../../components/UniSection"
import { DoubleSection } from "../../components/DoubleSection"
import { Header } from "../../components/Headers"
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
import { GrapePromoURL } from "../../constants/links"
import { GlobalWineryStrings } from "./strings"
// css
import "../../css/styles/styles.css"
import "../../css/styles/App.css"

// strings ****
const GlobalWineryTitle = `Global-Winery; React Library`
const GlobalWinerySubtitle = `The design system behind the Grape proof of concept`
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
const StoryImageStyle = styled(LazyLoadImage)`
    margin-block-start: ${(p) => (p.offsetTop ? p.offsetTop : "20vh")};
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    width: 85%;
    padding: 0px;
    @media screen and (max-width: 960px) {
        margin-block-start: 10vh;
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
            <a href={GrapePromoURL}>
                <ActionWrapper>
                    <ActionCircleButton
                        aria-label={viewProject}
                        transparent
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
            title={GlobalWineryTitle}
            subtitle={[GlobalWinerySubtitle]}
            children={[CoverActionButtons]}
            story
            coverImageURL={"https://i.ibb.co/YtrDKHT/grape-wine-render.png"}
        />
    </>
)

// design bottom header section
const defaultHeaderConfigBottom = {
    shouldRender: true,
    centerText: true,
    fontOverride: `Georgia Regular`,
    fontColor: UIStyle.UIColors.gold,
    fontSize: 30,
    height: 300,
    backgroundColor: UIStyle.UIColors.darkGrey
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
// section 1
const Header1 = <HeaderT first>{GlobalWineryStrings.section1.title}</HeaderT>
const Paragraph1 = GlobalWineryStrings.section1.text[0]
const Image1 = (
    <StoryCenterWrapper>
        <StoryImageStyle
            effect="blur"
            src="https://i.ibb.co/WFhk1cv/global-winery-display-4x.png"
            alt="global-winery-display-4x"
            border="0"
            offsetTop={"30vh"}
        />
    </StoryCenterWrapper>
)
// section 2
const Header2 = <HeaderT>{GlobalWineryStrings.section2.title}</HeaderT>
const Paragraph2 = GlobalWineryStrings.section2.text[0]
const Image2 = (
    <StoryCenterWrapper>
        <StoryImageStyle
            effect="blur"
            src="https://i.ibb.co/Byzjr7h/global-winery-style-4x.png"
            alt="global-winery-style-4x"
            border="0"
            offsetTop={"30vh"}
        />
    </StoryCenterWrapper>
)
// section 3
// arrays mapped

const SideLeft = [Header1, Paragraph1]
const SideRight = [Image1]
const Side2Left = [Header2, Paragraph2]
const Side2Right = [Image2]
// class Definition
class GlobalWinery extends React.PureComponent {
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
                    <DoubleSection
                        leftChildren={[
                            <>
                                {SideLeft.map((e) => (
                                    <>{e}</>
                                ))}
                            </>
                        ]}
                        rightChildren={[
                            <>
                                {SideRight.map((e) => (
                                    <>{e}</>
                                ))}
                            </>
                        ]}
                    />
                    <DoubleSection
                        leftChildren={[
                            <>
                                {Side2Left.map((e) => (
                                    <>{e}</>
                                ))}
                            </>
                        ]}
                        rightChildren={[
                            <>
                                {Side2Right.map((e) => (
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
                                        window.open(GrapePromoURL, "_self")
                                    }
                                    onKeyPress={(e) => {
                                        if (e.key === "Enter") {
                                            window.open(GrapePromoURL, "_self")
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

export default GlobalWinery

// react
import React from "react"
// components
import { Grid } from "@material-ui/core"
import { Menu, Button } from "eunoia"
import styled from "styled-components"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { StoryCover } from "../../components/StoryCover"
import { SectionTitle } from "../../components/SectionsTitle"
import { Footer } from "../../components/Footer"
import { StorySocialButtons } from "../../components/Social"
import { Link as ScrollLink, Element, Events } from "react-scroll"
import { TriSection } from "../../components/TriSection"
import { UniSection } from "../../components/UniSection"
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
import { JournalURL } from "../../constants/links"
import { JournalStrings } from "./strings"
// css
import "../../css/styles/styles.css"
import "../../css/styles/App.css"

// strings ****
const JournalTitle = `Product Designer & Developer`
const JournalSubtitle = `Journal Technologies`
const viewJournal = `View Journal`
const learnMore = `Learn More`

// tri section strings
const designContentText = `Explore my design portfolio & case studies`
const codeContentText = `Breakdown the code behind my work & projects`
const experienceContentText = `Internships in UX/UI design & development`

// styled-components
const StoryCenterWrapper = styled.div`
    text-align: center;
`
const LargeBannerImageStyle = styled(LazyLoadImage)`
    margin-block-start: ${(p) => (p.offsetTop ? p.offsetTop : "20vh")};
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    width: 60%;
    object-fit: contain;
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
            <a href={JournalURL}>
                <ActionWrapper>
                    <ActionCircleButton
                        transparent
                        aria-label={viewJournal}
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
                    <ActionText>{viewJournal}</ActionText>
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
            title={JournalTitle}
            subtitle={[JournalSubtitle]}
            children={[CoverActionButtons]}
            story
            coverImageURL={"https://i.ibb.co/LQZDcsb/Journal-App-Label.jpg"}
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
const Header1 = (
    <HeaderT padding={5} first>
        {JournalStrings.section1.title}
    </HeaderT>
)
const Paragraph1 = JournalStrings.section1.text[0]

// section 2
const Header2 = <HeaderT padding={5}>{JournalStrings.section2.title}</HeaderT>
const Paragraph2 = JournalStrings.section2.text[0]

const Image2 = (
    <StoryCenterWrapper>
        <LargeBannerImageStyle
            effect="blur"
            src="https://i.ibb.co/GvLkbWp/completed-receipt-uploads-art-4x-1.jpg"
            alt="completed-receipt-uploads-art-4x-1"
            border="0"
            offsetTop={"0vh"}
        />
    </StoryCenterWrapper>
)

const Image3 = (
    <StoryCenterWrapper>
        <LargeBannerImageStyle
            effect="blur"
            src="https://i.ibb.co/1vXLqcX/Card-Options-Art2.jpg"
            alt="Card-Options-Art2"
            border="0"
            offsetTop={"0vh"}
        />
    </StoryCenterWrapper>
)

// arrays mapped
const Sec1 = [Header1, Paragraph1]
const Sec2 = [Header2, Paragraph2]
const Sec3 = [Image2]
const Sec4 = [Image3]

// class Definition
class Journal extends React.PureComponent {
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
                                {Sec3.map((e) => (
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
                            <>
                                {Sec4.map((e) => (
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
                                    onClick={() =>
                                        window.open(JournalURL, "_self")
                                    }
                                    onKeyPress={(e) => {
                                        if (e.key === "Enter") {
                                            window.open(JournalURL, "_self")
                                        }
                                    }}
                                >
                                    {viewJournal}
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

export default Journal

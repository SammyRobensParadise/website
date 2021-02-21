// imports
import { mediumURL } from "./links"

/**
 * `constants`
 */

/**
 * UI Style config
 */
export const UIStyle = {
    UIColors: {
        white: "#f3f3f3",
        black: "#232B2B",
        primary: "#0049B7",
        secondary: "#f75990",
        tertiary: "#fff685",
        compBlue: "#00DDFF",
        compPink: "#ff1d58",
        compGold: "#fbaf08"
    },
    Shadows: {
        boxShadow: "0px 6px 6px #00000029",
        boxShadowDeep: "0px 12px 1px #00000029",
        boxShadowImage: "0px 12px 12px #00000029"
    }
}

/**
 * Menu Config
 */
export const MenuConfig = {
    config: {
        fontColor: UIStyle.UIColors.white,
        activeSection: "Home",
        hideOnMobile: true,
        DisableMobile: false,
        fontOverride: "Helvetica Neue",
        boldText: false,
        spacing: 0,
        row: true,
        fontSize: "18px",
        mobileBreakpoint: 850,
        breakpoints: { xs: true }
    },
    options: [
        {
            title: "Home",
            link: "/",
            newTab: false,
            main: true,
            exRef: `${window.location.origin}`
        },
        {
            title: "About",
            link: "/about",
            newTab: false,
            exRef: `${window.location.origin}/about`
        },
        { title: "Articles", link: "/#", newTab: false, exRef: mediumURL },
        {
            title: "Design",
            link: "/design",
            newTab: false,
            exRef: `${window.location.origin}/design`
        },
        {
            title: "Code",
            link: "/code",
            newTab: false,
            exRef: `${window.location.origin}/code`
        },
        {
            title: "Experience",
            link: "/experience",
            newTab: false,
            exRef: `${window.location.origin}/experience`
        }
    ]
}

export const StoryMenuConfig = {
    config: {
        fontColor: UIStyle.UIColors.black,
        activeSection: "Home",
        hideOnMobile: true,
        DisableMobile: false,
        fontOverride: "Helvetica Neue",
        boldText: false,
        spacing: 0,
        row: true,
        fontSize: "18px",
        mobileBreakpoint: 850,
        breakpoints: { xs: true }
    },
    options: MenuConfig.options
}

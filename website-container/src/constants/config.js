/**
 * `constants`
 */

 /**
  * UI Style config
  */
export const UIStyle = {
  UIColors: {
    white: '#FFFFFF',
    lightGrey: '#00000029',
    black: '#000000',
    gold: '#E1A87A',
    darkGrey: '#212121',
    mediumGrey: '#5D5D5D',
  },
  Shadows: {
    boxShadow: '0px 6px 6px #00000029',
    boxShadowDeep: '0px 12px 1px #00000029',
    boxShadowImage: '0px 12px 12px #00000029',
  },
}

/**
 * Menu Config
 */
export const MenuConfig = {
  config: {
    fontColor: UIStyle.UIColors.white,
    activeSection: 'Home',
    hideOnMobile: true,
    DisableMobile: false,
    fontOverride: 'Helvetica Neue',
    boldText: false,
    spacing: 0,
    row: true,
    fontSize: '18px',
    mobileBreakpoint: 850,
    breakpoints: { xs: true },
  },
  options: [
    {
      title: 'Home',
      link: '/#',
      newTab: false,
      main: true,
    },
    { title: 'About', link: '/#', newTab: false },
    { title: 'Articles', link: '/#', newTab: false },
    { title: 'Design', link: '/#', newTab: false },
    { title: 'Development', link: '/#', newTab: false },
    { title: 'Experience', link: '/#', newTab: false },
  ],
}

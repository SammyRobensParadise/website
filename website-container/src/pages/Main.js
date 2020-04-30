import React from 'react'
import '../css/styles/App.css'
import { Cover } from '../components/Cover'
import { Menu } from 'eunoia'
import { UIStyle } from '../constants/config'
const config = {
  fontColor: UIStyle.UIColors.white,
  activeSection: 'Home',
  hideOnMobile: true,
  DisableMobile: false,
  fontOverride: 'Helvetica Neue',
  boldText: false,
  spacing: 0,
  row: true,
  mobileBreakpoint: 850,
  breakpoints: { xs: true },
}
const options = [
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
]
const AppMenu = <Menu config={config} options={options}  />
class Main extends React.PureComponent {

  render() {
    return (
      <div>
        <Cover children={AppMenu} />
      </div>
    )
  }
}

export default Main

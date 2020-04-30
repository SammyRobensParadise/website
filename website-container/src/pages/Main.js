import React from 'react'
import '../css/styles/App.css'
import { Cover } from '../components/Cover'
import { MainTitle } from '../components/MainTitle'
import { Menu } from 'eunoia'
import { MenuConfig } from '../constants/config'

// css
import '../css/styles/styles.css'

// strings
const name = `Sammy Robens-Paradise`
const uxDesigner = `UX DESIGNER`
const Developer = `DEVELOPER`
// components
const CoverChildren = (
  <div>
    <Menu config={MenuConfig.config} options={MenuConfig.options} />
    <MainTitle title={name} subtitle={[uxDesigner, Developer]} />
  </div>
)
// class
class Main extends React.PureComponent {
  render() {
    return (
      <div>
        <Cover children={CoverChildren} />
      </div>
    )
  }
}

export default Main

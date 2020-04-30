import React from 'react'
import '../css/styles/App.css'
import { Cover } from '../components/Cover'
import { Menu } from 'eunoia'
import { MenuConfig } from '../constants/config'

const AppMenu = <Menu config={MenuConfig.config} options={MenuConfig.options} />
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

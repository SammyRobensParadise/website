import React from 'react'
import '../css/styles/App.css'
import { Button } from 'eunoia'
import { Cover } from '../components/Cover'

class Main extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Cover />
      </div>
    )
  }
}

export default Main

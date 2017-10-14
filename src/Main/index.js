import React, { Component } from 'react'
import { Window, Text } from 'react-desktop/macOs'

class Main extends Component {
  render () {
    return (
      <Window
        chrome
        height="100%"
        padding="10px"
      >
        <Text>Hello from React</Text>
      </Window>
    )
  }
}

export default Main

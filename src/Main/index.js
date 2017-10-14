import React, { Component } from 'react'
import { View } from 'react-desktop/macOs'
import Radium from 'radium'

import Header from '../Header'
import styles from './styles'

class Main extends Component {
  render () {
    return (
      <View style={styles.window}>
        <Header />
      </View>
    )
  }
}

export default Radium(Main)

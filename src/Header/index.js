import React, { Component } from 'react'
import { Text, View } from 'react-desktop/macOs'
import Radium from 'radium'

import styles from './styles'

const Header = () => (
  <View style={styles.header}>
    <img style={styles.flag} src="http://placehold.it/22x22" width="22" height="22" />
    <img style={styles.avatar} src="http://placehold.it/28x28" width="28" height="28" />
    <Text style={styles.username}>Samdankjewel</Text>
  </View>
)

export default Radium(Header)

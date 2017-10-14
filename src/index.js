import React from 'react'
import { render } from 'react-dom'
import Main from './Main'

if (window.require) { // Check this so we can view app in browser
  const {ipcRenderer} = window.require('electron')

  document.addEventListener('DOMContentLoaded', () => {
    let n = new Notification('You did it!', {
      body: 'Nice work.'
    })

    // Tell the notification to show the menubar popup window on click
    n.onclick = () => { ipcRenderer.send('show-window') }
  })
}

render(<Main />, document.querySelector('#main'))

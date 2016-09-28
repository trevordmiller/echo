import React from 'react'
import { isLocalStorageSupported } from '../utils/features'
import {
  screenSizes,
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  animationSpeeds,
} from '../data/styleGuide'
import Header from './Header'
import Main from './Main'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hasSeenAnimation: isLocalStorageSupported && !!localStorage.getItem('visited'),
    }
    this.handleIntroEnd = this.handleIntroEnd.bind(this)
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this)
    this.handleMainMount = this.handleMainMount.bind(this)
  }

  handleIntroEnd() {
    if (this.state.hasSeenAnimation) return null

    if (isLocalStorageSupported) {
      localStorage.setItem('visited', true)
    }

    this.setState({
      hasSeenAnimation: true,
    })
  }

  handleTransitionEnd() {
    if (window.location.hash !== '') {
      const el = document.querySelector(window.location.hash)
      if (el) {
        el.scrollIntoView()
      }
    }
  }

  handleMainMount(el) {
    if (el) {
      el.addEventListener('transitionend', this.handleTransitionEnd, false)
    }
  }

  render() {
    return (
      <div style={{
        background: colors.normal.black,
        color: colors.bright.black,
        fontFamily: fontFamilies.primary,
        fontSize: fontSizes.medium,
        fontWeight: fontWeights.normal,
        lineHeight: lineHeights.medium,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        height: this.state.hasSeenAnimation ? 'auto' : '100vh',
        overflowY: this.state.hasSeenAnimation ? 'auto' : 'hidden',
      }}>
      <div style={{
        maxWidth: screenSizes.large,
      }}>
      <div style={{
        willChange: this.state.hasSeenAnimation ? 'auto' : 'margin',
        transition: `margin ${animationSpeeds.fast}s ease`,
        ...this.state.hasSeenAnimation
        ? {}
        : {marginTop: '30vh'}
      }}>
      <Header onIntroEnd={this.handleIntroEnd} hasSeenAnimation={this.state.hasSeenAnimation} />
    </div>
    <div style={{
      willChange: this.state.hasSeenAnimation ? 'auto' : 'opacity',
      transition: `opacity ${animationSpeeds.medium}s ease`,
      opacity: this.state.hasSeenAnimation ? 1 : 0,
    }} ref={this.handleMainMount}>
    <Main>
      { this.state.hasSeenAnimation ? this.props.children : null }
    </Main>
  </div>
</div>
      </div>
    )
  }
}

export default App

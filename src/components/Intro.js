import React from 'react'
import Typist from 'react-typist'
import about from '../data/about'
import Heading from './Heading'

const pauses = {
  short: 60,
  medium: 200,
  long: 750,
}

const cursor = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: pauses.short,
}

class Intro extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hasLogoEnded: false,
    }
    this.handleLogoEnd = this.handleLogoEnd.bind(this)
  }

  handleLogoEnd() {
    this.setState({
      hasLogoEnded: true,
    })
  }

  render() {
    return (
      <div>
        <Heading level={1}>
          {this.props.hasSeenAnimation ? about.title
            : <Typist
              cursor={cursor}
              startDelay={pauses.long}
              avgTypingDelay={pauses.medium}
              onTypingDone={this.handleLogoEnd}
            >
              {about.title}
            </Typist>
          }
        </Heading>
        <Heading level={2}>
          {this.state.hasLogoEnded || this.props.hasSeenAnimation
            ? <Typist
                cursor={cursor}
                startDelay={pauses.medium}
                avgTypingDelay={pauses.short}
                onTypingDone={this.props.onIntroEnd}
              >
                {about.description}
              </Typist>
            : null
          }
        </Heading>
      </div>
    )
  }
}

Intro.propTypes = {
  onIntroEnd: React.PropTypes.func.isRequired,
  hasSeenAnimation: React.PropTypes.bool.isRequired,
}

export default Intro

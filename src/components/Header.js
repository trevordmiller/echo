import React from 'react'
import {spacing} from '../data/styleGuide'
import Intro from './Intro'

const Header = ({onIntroEnd, hasSeenAnimation}) => (
  <div style={{
    paddingLeft: spacing.large,
    paddingRight: spacing.large,
  }}>
    <header>
      <Intro onIntroEnd={onIntroEnd} hasSeenAnimation={hasSeenAnimation}/>
    </header>
  </div>
)

export default Header

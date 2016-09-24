import React from 'react'
import faq from '../../data/faq'
import {spacing} from '../../data/styleGuide'
import Heading from '../Heading'

const Faq = () => (
  <div>
    {faq.map((item, index) => (
      <div
        key={index}
        style={{
          marginBottom: (index + 1 < faq.length)
            ? spacing.medium
            : 0,
        }}
      >
        <Heading level={4}>
          {item.question}
        </Heading>
        <div>
          {item.answer}
        </div>
      </div>
    ))}
  </div>
)

export default Faq

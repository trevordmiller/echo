import React from 'react'
import Section from '../Section'
import Contributors from './Contributors'
import ExampleCode from './ExampleCode'
import Colors from './Colors'
import Characteristics from './Characteristics'
import Platforms from './Platforms'
import Contributing from './Contributing'
import Faq from './Faq'

const sections = [
  {
    elements: <Contributors />,
  },
  {
    elements: <Colors />,
  },
  {
    elements: <ExampleCode />,
  },
  {
    title: 'Characteristics',
    elements: <Characteristics />,
  },
  {
    elements: <Platforms />,
  },
  {
    title: 'Frequently Asked Questions',
    elements: <Faq />,
  },
  {
    title: 'Contributing',
    elements: <Contributing />,
  },
]

const Home = () => (
  <div>
    {sections.map((section, index) => (
      <Section
        key={index}
        title={section.title}
      >
        {section.elements}
      </Section>
    ))}
  </div>
)

export default Home

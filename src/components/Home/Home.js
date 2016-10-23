import React from 'react'
import Section from '../Section'
import Contributors from './Contributors'
import ExampleCode from './ExampleCode'
import Colors from './Colors'
import Characteristics from './Characteristics'
import Plugins from './Plugins'
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
    title: 'Plugins',
    elements: <Plugins />,
  },
  {
    title: 'Frequently Asked Questions',
    elements: <Faq />,
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

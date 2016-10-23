import React from 'react'
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs'
Tabs.setUseDefaultStyles(false)
import plugins from '../../data/plugins'
import {
  colors,
  spacing,
  borderSizes,
  borderRadii,
} from '../../data/styleGuide'
import Heading from '../Heading'
import Icon from '../Icon'
import List from '../List'
import Link from '../Link'
import Image from '../Image'

const tabBorder = `${borderSizes.medium}px solid ${colors.decoration.medium}`;

class Platforms extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeTab: 0,
    }
  }

  handleTabClick(clickedTabIndex) {
    this.setState({
      activeTab: clickedTabIndex,
    })
  }

  render() {
    return (
      <Tabs>
        <TabList style={{
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: tabBorder,
          borderRight: tabBorder,
          borderLeft: tabBorder,
          borderTopRightRadius: borderRadii.large,
          borderTopLeftRadius: borderRadii.large,
        }}>
          {plugins.map((plugin, index) => (
            <Tab
              key={index}
              onClick={this.handleTabClick.bind(this, index)}
              style={{
                background: index === this.state.activeTab
                  ? colors.normal.black
                  : colors.decoration.medium,
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2%',
                lineHeight: 0,
                cursor: 'pointer',
              }}
            >
              <div style={{
                width: '60%',
              }}>
                <Icon
                  type={plugin.icon}
                  fill={
                    index === this.state.activeTab
                      ? colors.normal.cyan
                      : colors.normal.black
                  }
                />
              </div>
            </Tab>
          ))}
        </TabList>
        {plugins.map((plugin, index) => (
          <TabPanel
            key={index}
            style={{
              borderRight: tabBorder,
              borderBottom: tabBorder,
              borderLeft: tabBorder,
              borderBottomRightRadius: borderRadii.large,
              borderBottomLeftRadius: borderRadii.large,
              paddingTop: spacing.large,
              paddingRight: spacing.medium,
              paddingBottom: spacing.medium,
              paddingLeft: spacing.medium,
            }}
          >
            <Heading level={4}>
              {plugin.title}
            </Heading>
            <div style={{
              marginTop: spacing.large,
            }}>
              {plugin.screenshot
                ? <div style={{
                    marginBottom: spacing.medium,
                  }}>
                    <Image
                      src={plugin.screenshot}
                      quiet={true}
                    />
                  </div>
                : null
              }
              {plugin.steps
                ? <div style={{
                    marginBottom: (plugin.notes || plugin.links)
                      ? spacing.medium
                      : 0,
                  }}>
                    <Heading level={3}>
                      Instructions
                    </Heading>
                    <List
                      items={plugin.steps}
                      type='number'
                    />
                  </div>
                : null
              }
              {plugin.notes
                ? <div style={{
                    marginBottom: (plugin.links)
                      ? spacing.medium
                      : 0,
                  }}>
                    <Heading level={3}>
                      Notes
                    </Heading>
                    <List items={plugin.notes} />
                  </div>
                : null
              }
              {plugin.links
                ? <div>
                    <Heading level={3}>
                      Links
                    </Heading>
                    <List
                      items={plugin.links.map(link => (
                        <Link
                          href={link.url}
                          inline={true}
                        >
                          {link.title}
                        </Link>
                      ))}
                      type='link'
                    />
                  </div>
                : null
              }
            </div>
          </TabPanel>
        ))}
      </Tabs>
    )
  }
}

export default Platforms

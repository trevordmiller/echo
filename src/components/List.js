import React from 'react'
import {colors, spacing, fontSizes} from '../data/styleGuide'
import Icon from './Icon'

const symbolColor = colors.normal.green

const List = ({
  items,
  type = 'bullet',
}) => (
  <div>
    {items.map((item, index) => (
      <div
        key={index}
        style={{
          marginBottom: (index + 1 < items.length) ? spacing.xsmall : 0,
        }}
      >
        <span style={{
          color: symbolColor,
          marginRight: spacing.xsmall,
        }}>
          {type === 'number'
            ? `${index + 1})`
            : <Icon
                type={type}
                fill={symbolColor}
                size={type === 'bullet' ? fontSizes.small : fontSizes.medium}
              />
          }
        </span>
        {item}
      </div>
    ))}
  </div>
)

List.propTypes = {
  items: React.PropTypes.array.isRequired,
  ordered: React.PropTypes.string,
}

export default List

import React from 'react'
import { Select, Icon } from 'antd'
import { useIcon } from './Icon'

const { Option } = Select

export const AppSelect = ({ selectItems }) => {
  const sortMax = useIcon('sortMax')
  const sortMin = useIcon('sortMin')
  return (
    <Select
      labelInValue
      defaultValue = {{key: '1'}}
      style={{ marginLeft: 16}}
    >
      {selectItems.map(({key, title, icon }) => (
          <Option key={key} value={key}>
            <Icon component={icon === 'sortMax' ? sortMax : sortMin} />   {title}
          </Option>
        ))

      }
    </Select>
  )
}
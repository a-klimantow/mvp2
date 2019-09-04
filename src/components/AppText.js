import React from 'react'
import { Typography, Icon } from 'antd'
import { useIcon } from './Icon'

const { Title, Text } = Typography

export const AppText = ({ children, header, weight, size, styles, icon, rotate, ...rest }) => {
  const svgIcon = useIcon(icon)

  const Tag = header ? Title : Text

  return (
    <>
      {icon && <Icon 
                component={svgIcon} 
                style={{marginRight: 8}}
                
              />}
      <Tag 
      {...rest}
      style={{
        fontWeight: weight, 
        fontSize: size ? format[size][0] : 14,
        lineHeight: size ? `${format[size][1]}px` : "22px",
        ...styles
      }}
      >
        {children}
      </Tag>
    </>
  )
}

const format = {
  xl: [38, 46],
  l: [30, 38],
  m: [24, 32],
  s: [20, 28],
  xs: [16, 24],
  xxs: [12, 20]
}
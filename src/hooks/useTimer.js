import React from 'react'
import { Statistic } from 'antd'

const { Countdown } = Statistic

export const useTimer = (data) => {
  const deadline = new Date(data).getTime()
  const time = (deadline - Date.now()) / 1000 >> 0
  const day = 24 * 60 * 60
  const hour = 60 * 60
  let format = 'DDд HHч'

  if (time < day) {
    format = 'HHч mmмин'
  } else if (time < hour) {
    format = 'mmмин ssсек'
  }

  return (
    <Countdown 
      value={deadline} 
      format={`Ослалось: ${format}`}  
      valueStyle={{fontSize: 'inherit', color: 'inherit'}}
    />
  )
}
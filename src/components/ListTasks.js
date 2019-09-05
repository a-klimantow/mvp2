import React from 'react'
import { List, Row, Statistic } from 'antd';
import { AppText } from './AppText';
import { useTimer, useDate } from '../hooks'

const { Countdown } = Statistic

export const ListTasks = ({dataSource, history}) => {
  
  return (
    <List
    dataSource={dataSource}
    itemLayout="horizontal"
    renderItem={item => <ListItem {...item} history={history} />}
    />
    )
  }
  
  const ListItem = ({ id, number, name, history }) => {
    const timer = useTimer("2019-09-07T09:36:42.533Z")
    const { fullDate }  = useDate("2019-09-07T09:36:42.533Z")
  
  
  return (
    <List.Item style={{flexFlow: 'column'}} onClick={() => history.push(`/task/detail/${id}`)}>
      <Row
        type="flex"
        align="middle"
        style={{width: '100%'}}
      > 
        <AppText
          header
          size='s'
          styles={{margin: 0}}
        >
          Участие в комиссии
        </AppText>
        <div style={{marginLeft: 'auto'}}>
          <AppText 
            icon="calendar"
            styles={{marginRight: 24}}
          >
            {fullDate}
          </AppText>
          <AppText icon="number">
            {number}
          </AppText>
        </div>
      </Row>
      <Row
        type="flex"
        align="middle"
        style={{width: '100%'}}
      >
        <AppText styles={{marginRight: 24}}>
          Неполадки с ОДПУ
        </AppText>
        <AppText icon="timer" styles={{marginRight: 'auto'}}>
          {timer}
        </AppText>
        <AppText styles={{marginRight: 24}}>
          ВКТ-1234567
        </AppText>
        <AppText icon="map">
          Нижнекамск, Чишмале 3
        </AppText>
      </Row>
    </List.Item>
  )
}
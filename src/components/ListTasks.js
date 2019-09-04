import React from 'react'
import { List, Row } from 'antd';
import { AppText } from './AppText';

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
            data
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
          Осталось: 14д 12ч
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
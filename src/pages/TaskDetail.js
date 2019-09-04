import React from 'react'
import { Row, Col, Button, Icon } from 'antd';
import { Paper, AppText, AppTable } from '../components';
import { useIcon } from '../components/Icon'

export const TaskDetail = () => {
  return (
    <>
      <Button type="link" icon="left" style={{marginBottom: 24}}>В задачи</Button>
      
      <Row
        type="flex"
        justify="space-between"
        align="middle"
      >
        <AppText
          header
          level={1}
          weight={300}
          size="m"
        >
          Подтверждение участия в комиссии
        </AppText>
        <Button type="primary">Взять в работу</Button>
      </Row>
      <Row 
        type="flex"
        align="middle"
        style={{marginBottom: 24}}
      >
        <AppText
          weight={300}
          styles={{marginRight: 'auto'}}
        >
          Неполадки с ОДПУ
        </AppText>
        <AppText icon="timer">
          timer
        </AppText>  
      </Row>
      

      <Paper styles={{marginBottom: 16}}>
        <Row 
          type="flex"
          justify="space-between"
          style={{marginBottom: 16}}
        >
          <AppText 
            size="s"
            header
            level={2}
            weight={400}
          >
            Комментарий к задаче
          </AppText>
          <Button>
            <Icon component={useIcon('comment')} />
            Добавить комментарий
          </Button>
        </Row>
        <Row 
          type="flex"
          align="middle"
        >
          <AppText
            size="xxs"
            weight={600}
            styles={{marginRight: 8}}
            icon="username"
          >
            Константинопольский К.К
          </AppText>
          <AppText
            size="xxs"
          >
            Комиссия состоится в пятницу, в 16:30
          </AppText>
          <AppText
            size="xxs"
            styles={{marginLeft: 'auto'}}
          >
            16.08.2019 20:48
          </AppText>
        </Row>
      </Paper>

      <Row
        gutter={16}
      >
        <Col span={16}>
          <Paper>
            <AppTable title="Информация о задаче" data={[1, 2]}/>
          </Paper>
        </Col>
        <Col span={8}>
          <Paper>
            text
          </Paper>
        </Col>
      </Row>
    </>
  )
}
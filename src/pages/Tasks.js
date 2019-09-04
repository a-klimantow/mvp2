import React, { useEffect, useState } from 'react'
import { Tabs, Row, Input, List } from 'antd'
import { useRequest } from '../hooks'
import { Paper, AppText, ListTasks } from '../components';
import { AppSelect } from '../components/AppSelect';

const { TabPane } = Tabs
const { Search } = Input

const selectItems = [
  {key: '1', title: 'дате создания', icon: 'sortMax'},
  {key: '2', title: 'дате создaния', icon: 'sortMin'},
  {key: '3', title: 'времени на задачу', icon: 'sortMax'},
  {key: '4', title: 'времени на задачу', icon: 'sortMin'},
]

export const Tasks = ({ history }) => {
  const [tasks, setTasks] = useState([])

  const { getData } = useRequest()

  useEffect(() => {
    getData('/Tasks', setTasks)
  },[])

  console.log(tasks);
  
  return (
    <>
      <AppText 
        header 
        size="xl" 
        level={1} 
        weight={300}
      >
        Задачи
      </AppText>
      
      <Paper>
        <Tabs>
          <TabPane tab="Активные" key="1" />
          <TabPane tab="Архив" key="2" />
        </Tabs>
        <Row
          type="flex"
          align="middle"
          justify="space-between" 
          style={{margin: "16px 0 8px"}}
        >
          <Search 
            placeholder="Введите номер задачи или адрес"
            style={{width: 456}}
          />
          <div>
            <AppText type="secondary">
              Сортировать по: 
              <AppSelect selectItems={selectItems}/> 
            </AppText>
          </div>
        </Row>
        <ListTasks dataSource={tasks} history={history} />
      </Paper>
    </>
  )
}
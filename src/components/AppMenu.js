import React from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import { useIcon } from './Icon'

const { Sider } = Layout
const { SubMenu } = Menu

export const AppMenu = withRouter( ({ history, location }) =>  {
    
    const hangleClick = (e) => {
      history.push(`${e.key}`)
    }

    return (
      <Sider theme="light">
        <div style={{height: 56}}>logo</div>
        <Menu
          style={{
            position: "relative",
            borderRight: "none"
          }}
          mode="inline"
          defaultSelectedKeys={[`${location.pathname}`]}
          onClick={hangleClick}
        >
          <Menu.Divider />
          <Menu.Item key="/">
            <Icon component={useIcon("monitoring")} />
            <span>Мониторинг</span>
          </Menu.Item>

          <Menu.Item key="/tasks">
            <Icon component={useIcon("task")} />
            <span>Задачи</span>
          </Menu.Item>
            
          <Menu.Item key="/object">
            <Icon component={useIcon("object")} />
            <span>Объекты</span>
          </Menu.Item>

          <SubMenu
            style={{
              position: "absolute", 
              top: "70vh"
            }}
            title={
              <span style={{marginRight: 45}}>
                <Icon component={useIcon("username")} />
                <span>Username</span>
              </span>
            }
          >
            <Menu.Item key="/profile">
              <span>Профиль</span>
            </Menu.Item>
            <Menu.Item key="/login">
              <span>Выход</span>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>

    )
  }
)

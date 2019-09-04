import React from 'react'
import { Layout } from 'antd'
import { AppMenu } from './AppMenu'

const { Content } = Layout

export const AppLayout = ({ children }) => {
  return (
    <Layout style={{height: "100vh"}}>
      <AppMenu />
      <Content style={{padding: '16px 56px'}}>
        {children}
      </Content>
    </Layout>
  )
}
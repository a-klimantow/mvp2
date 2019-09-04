import React from 'react'
import { Typography } from 'antd'
import { LoginForm } from '../components'

const { Title } = Typography

export const Login = (props) => {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{width: 320}}>
        <Title level={1} style={{fontWeight: "normal", marginBottom: 32}}>Вход в систему</Title>
        <LoginForm {...props}/>
      </div>
    </div>
  )
}
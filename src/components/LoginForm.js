import React, { useState, useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { useRequest } from '../hooks'


export const LoginForm = Form.create()( ({ form, history }) => {
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = form 

  const { auth } = useRequest()

  useEffect(() => {
    form.validateFields();
  }, [])

  const usernameError = isFieldTouched('username') && getFieldError('username')
  const passwordError = isFieldTouched('password') && getFieldError('password')

  const  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
    form.validateFields((err, data) => {
      if (!err) {
        // console.log(data)
        data = {password: data.password, email: data.username}
        auth(data, () => history.push('/'))
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item
        label="Логин"
        required={false} 
        validateStatus={usernameError ? 'error' : ''} 
        help={usernameError || ''}
      >
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }]
        })(
          <Input 
            type="username" 
            placeholder="Username"
            name="username"
          />
        )}
      </Form.Item>
      <Form.Item
        label="Пароль"
        required={false} 
        validateStatus={passwordError ? 'error' : ''} 
        help={usernameError || ''}
      >
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your password!' }]
        })(
          <Input.Password
            type="password" 
            placeholder="xxxxxxxxxx"
            name="password"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())} block>
          Вход в систему
        </Button>
      </Form.Item>
    </Form>
  )
})
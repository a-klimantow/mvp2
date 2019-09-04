import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AppLayout } from './components'
import { Tasks, TaskDetail, Login } from './pages'

export const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route>
            <AppLayout>
              <Route path="/tasks" component={Tasks} />
              <Route path="/task/detail/:id" component={TaskDetail} />
            </AppLayout>
          </Route>      
        </Switch>
      </div>
    </BrowserRouter>
  )
}



import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { App } from '../App';//1 ponto a mais para sair da pasta

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <App/>
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>    
      </Switch>
  </BrowserRouter>
  )
}
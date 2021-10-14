import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { App } from '../App';//1 ponto a mais para sair da pasta

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" />
        <App/>
      </Switch>
  </BrowserRouter>
  )
}

export default Routes

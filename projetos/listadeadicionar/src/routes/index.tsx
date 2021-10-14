import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
//import { App } from '../App';//1 ponto a mais para sair da pasta
import { Home } from '../pages/Home';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>    
      </Switch>
  </BrowserRouter>
  )
}
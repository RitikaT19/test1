import React from 'react'
import Registration from '../src/pages/Registration'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () =>{
  return(
    <>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Registration}/>
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;
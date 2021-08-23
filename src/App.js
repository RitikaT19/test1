//import './App.css'
//import Form from '../src/pages/Form'
import React from 'react'
import Form from './pages/Form'
import Login from './pages/login/login'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App(){
  return(
    <>
      <BrowserRouter> 
        <Switch>
          <Route path='/register' component={Form}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default App;


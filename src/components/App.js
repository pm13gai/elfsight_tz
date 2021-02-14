import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import  UsersContainer  from '../containers/UsersContainer'
import  AlbumsContainer  from '../containers/AlbumsContainer'
import  PhotosContainer  from '../containers/PhotosContainer'
import  NotFound  from '../components/NotFound'

export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Switch>
          <Route  exact path='/users' component={UsersContainer} />
          <Route  path='/users/:userId/:albumId' component={PhotosContainer} />
          <Route  path='/users/:userId' component={AlbumsContainer} />       
          <Redirect exact from= '/' to='/users' />
          <Route  component={NotFound} />
        </Switch>
      </div>
    )
  }
}

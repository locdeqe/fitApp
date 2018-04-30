import React from 'react'
import {Route, Switch} from 'react-router-dom'
import DashBoard from '../DashBoard'
import TrainingList from '../TrainingList'
import CaloriesCalsComponent from '../CaloriesCalsComponent'

class WorkingSpace extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path = "/" component={DashBoard}></Route>
        <Route path = "/diet" component={CaloriesCalsComponent}></Route>
        <Route path = "/training" component={TrainingList}></Route>
      </Switch>
    )
  }
}

export default WorkingSpace

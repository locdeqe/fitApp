import React from 'react'
import {Route, Switch} from 'react-router-dom'
import DashBoard from '../DashBoard'
import TrainingList from '../TrainingList'

class WorkingSpace extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path = "/" component={DashBoard}></Route>
        <Route path = "/point1" component={TrainingList}></Route>
      </Switch>
    )
  }
}

export default WorkingSpace

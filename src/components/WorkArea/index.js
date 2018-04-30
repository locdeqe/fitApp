import React from 'react'
//import {Route, Switch} from 'react-router-dom'
import TopBar from '../TopBar'
import WorkingSpace from '../WorkingSpace'
import './style.css'

class WorkArea extends React.Component {
  render () {
    return (
      <div className = 'workArea'>
        <TopBar/>
        <WorkingSpace/>
      </div>
    )
  }
}

export default WorkArea

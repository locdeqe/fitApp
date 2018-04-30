import React from 'react'
import {Link} from "react-router-dom"
import MenuSnippet from '../MenuSnippet'
import TrainingSnippet from '../TrainingSnippet'
import BodyWeightSnippet from '../BodyWeightSnippet'
import './style.css'

class DashBoard extends React.PureComponent {
  userData = {
    menu: {
      calories: {
        currenCalories: 1600,
        totalCalories: 2000
      }
    },
    trainingDays: {
      0: '04/20/2018',
      1: '04/23/2018',
      2: '04/24/2018'
    },
    results: {
      '04/20/2018': [90, 90.2, 90.5, 90],
      '04/21/2018': [89.2, 88.6, 89],
      '04/22/2018': [89.1, 88.7, 88.2, 88],
      '04/23/2018': [87.4, 88, 88.5],
      '04/24/2018': [88.3, 87.7, 87.3],
      '04/25/2018': [86.9, 86.4, 86.9],
      '04/26/2018': [87.2, 86.8, 86]
    }
  }

  render () {
    return (
      <div className="dashBoard">
        <Link to = '/diet'>
          <MenuSnippet title = 'Calories' calories={this.userData.menu.calories}/>
        </Link>
        <Link to = "/trainig">
          <TrainingSnippet title = 'Next Training' days={this.userData.trainingDays}/>
        </Link>
        <Link to = "/results">
          <BodyWeightSnippet title = 'Body Weight Dynamic' results={this.userData.results}/>
        </Link>
      </div>
    )
  }
}

export default DashBoard

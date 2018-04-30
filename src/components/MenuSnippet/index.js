import React from 'react'
import ProgressBar from '../ProgressBar'
import './style.css'

class MenuSnippet extends React.Component {
  data = this.props.calories

  render() {
    const counter = <div>{`${this.data.currenCalories}/${this.data.totalCalories}`}</div>
    return (
      <div className="card">
        <h2 className="card-title">{this.props.title}</h2>
        <div className="menuSnippet__counter">
          {counter}
          <div className="menuSnippet__progressBar">
            <ProgressBar currentVal = {this.data.currenCalories} totalVal = {this.data.totalCalories}/>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuSnippet

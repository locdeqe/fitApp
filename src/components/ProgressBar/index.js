import React from 'react'
import './style.css'

class ProgressBar extends React.Component {
    state = {
        currentVal: this.props.currentVal,
        totalVal: this.props.totalVal
    }

    progress = this.state.currentVal / this.state.totalVal

    render () {
        return (
            <div className="proggresBar">
                <div className="progressBar__succsess" style={{flex: this.progress}}></div>
            </div>
        )
    }
}

export default ProgressBar
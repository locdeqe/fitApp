import React from 'react'
import './style.css'

class TrainingSnippet extends React.PureComponent {
    

    nextTraining = this.getNextTraining(this.props.days)

    getNextTraining(data) {
        let dayFull = new Date()
        let dayPlaint = dayFull.getDate() + '.' + dayFull.getMonth() + '.' + dayFull.getFullYear()

        for (let index in data) {
            let currentDate = new Date(data[index])
            let parsedDate = currentDate.getDate() + '.' + currentDate.getMonth() 
                                                  + '.' + currentDate.getFullYear()

            if (dayPlaint === parsedDate) {
                dayPlaint = 'Today'
                break
            }

            if (dayPlaint < parsedDate) {
                dayPlaint = currentDate.getDate() + '.' + currentDate.getMonth()
                break
            }
        }
        
        return dayPlaint
    }

    render() {
        return (
            <div className="card">
                <h2 className="card-title">{this.props.title}</h2>
                <div className = "nextTraining">
                    {this.nextTraining}
                </div>
            </div>
        )
    }
}

export default TrainingSnippet
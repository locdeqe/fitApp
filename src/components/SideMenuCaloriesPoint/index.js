import React from 'react'

class SideMenuCaloriesPoint extends React.Component {
    render() {
        const list =  this.props.elements.map((elem) => (
                <li className="list-group-item">
                    <div className = "sideBar__point sideBar__point-calories ">
                        <div className = "sideBar__name">
                            {elem.name}
                        </div>
                        <div className = "sideBar__totalCals">
                            {elem.totalCal}
                        </div>
                        <div className = "sideBar__carbs">
                            {elem.carbs}
                        </div>
                        <div className = "sideBar__fats">
                            {elem.fats}
                        </div>
                        <div className = "sideBar__prots">
                            {elem.prots}
                        </div>
                    </div>
                </li>
        ))
        return (
            <ul className="list-group">
               {list}
            </ul>
        )
    }
}

export default SideMenuCaloriesPoint
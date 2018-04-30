import React from 'react'
import SideMenu from '../SideMenu'

class CaloriesCalsComponent extends React.Component {
    data = {
        menuList: {
            fish: {
                title: "fish",
                menu: [
                    {
                        name: 'fried fish',
                        totalCal: 300,
                        carbs: 100,
                        fats: 100,
                        prots: 100
                    },
                   {
                        name: 'steamed fish',
                        totalCal: 300,
                        carbs: 100,
                        fats: 100,
                        prots: 100
                    }
                ]
            },
            chicken: {
                title: 'chicken',
                menu: [
                    {
                        name: 'fried chicken',
                        totalCal: 300,
                        carbs: 100,
                        fats: 100,
                        prots: 100
                    },
                    {
                        name: 'steamed chicken',
                        totalCal: 300,
                        carbs: 100,
                        fats: 100,
                        prots: 100
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className = "componentWorkingAreaWrapper">
                <h2>Calories Managment</h2>
                <div className = "componentWorkingArea componentWorkingArea-calories">
                    <div className = "componentWorkingArea__sideMenu">
                        <SideMenu menuTree = {this.data.menuList} title = {'Your Menu'}/>
                    </div>
                    <div className = "componentWorkingArea__mainArea"></div>
                </div>
            </div>
        )
    }
}

export default CaloriesCalsComponent
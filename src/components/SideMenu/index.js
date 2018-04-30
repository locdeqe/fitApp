import React from 'react'
import SideMenuCaloriesPoint from '../SideMenuCaloriesPoint'

class SideMenu extends React.Component {
    render() {
        let menuBody = []
        for (let key in this.props.menuTree) {
            menuBody.push(
                <div className = "card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link">
                                {this.props.menuTree[key].title}
                            </button>
                        </h5>
                    </div>
                    <div clasclassNames="collapse show" >
                        <SideMenuCaloriesPoint elements = {this.props.menuTree[key].menu}/>
                    </div>
                </div>
            )
        }

        return (
            <div className = "sideBar">
                <div className = "sideBar__title">{this.props.title}</div>
                <div className = "sideBar__body">
                    {menuBody}
                </div>
            </div>
        )
    }
}

export default SideMenu
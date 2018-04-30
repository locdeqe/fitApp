import React from 'react'
import {Link } from "react-router-dom"
import './style.css'

class TopBar extends React.PureComponent {
  render () {
    const menuList = [
      {href: '/', text: 'Пункт 1', 'id': 1},
      {href: 'point1', text: 'Пункт 2', 'id': 2},
      {href: 'point2', text: 'Пункт 3', 'id': 3},
    ]

    const menuListElement = menuList.map((element) => (
      <li key={element.id} className = "nav-item">
        <Link to = {element.href} className="nav-link">{element.text}</Link>
      </li>
    ))

    return (
      <div>
        <ul className = 'topBar nav nav-tabs'>
          {menuListElement}
        </ul>
      </div>
    )
  }
}

export default TopBar

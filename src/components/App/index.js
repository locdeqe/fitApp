import React from 'react'
import { BrowserRouter as Router} from "react-router-dom"
import WorkArea from '../WorkArea'
import './style.css'

class App extends React.PureComponent {
	render () {
		return (
			<Router>
				<WorkArea/>
			</Router>
		)
	}
}

export default App

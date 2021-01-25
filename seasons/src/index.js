import React from 'react'
import ReactDOM from 'react-dom'

// const App = () => {
// 	window.navigator.geolocation.getCurrentPosition(
// 		position => console.log(position),
// 		err => console.log(err)
// 	)

// 	return <div>Hi There</div>
// }

class App extends React.Component {
	state = { lat: null, errorMessage: '' }

	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>
		} else if (!this.state.errorMessage && this.state.lat) {
			return <div>Latitude: {this.state.lat}</div>
		}
		return <div>Loading!</div>
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errorMessage: err.message })
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#root'))

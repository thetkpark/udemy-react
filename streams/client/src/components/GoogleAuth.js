import React from "react"

class GoogleAuth extends React.Component {
	state = { isSignedIn: null }

	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"754641816853-op2uapjckqquls77s32sc8th4lf14lh7.apps.googleusercontent.com",
					scope: "email"
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance()
					this.setState({ isSignedIn: this.auth.isSignedIn.get() })
					this.auth.isSignedIn.listen(this.onAuthChanged)
				})
		})
	}

	onAuthChanged = () => {
		this.setState({ isSignedIn: this.auth.isSignedIn.get() })
	}

	onSignInClick = () => {
		this.auth.signIn()
	}

	onSignOutClick = () => {
		this.auth.signOut()
	}

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return null
		} else if (this.state.isSignedIn) {
			return (
				<button className="ui red google button" onClick={this.onSignOutClick}>
					<i className="google icon" />
					Sign Out
				</button>
			)
		}
		return (
			<button className="ui red google button" onClick={this.onSignInClick}>
				<i className="google icon" />
				Sign In With Google
			</button>
		)
	}

	render() {
		return <div>{this.renderAuthButton()}</div>
	}
}

export default GoogleAuth

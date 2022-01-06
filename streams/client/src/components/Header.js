import React from "react"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link to="/" className="item">
				Streamers
			</Link>
			<div className="right menu">
				<Link to="/" className="item">
					All Streams
				</Link>
			</div>
		</div>
	)
}

export default Header

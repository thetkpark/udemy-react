import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./components/App"

const PageOne = () => <div>Page One</div>
const PageTwo = () => <div>Page Two</div>

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<PageOne />} />
			<Route path="/pagetwo" element={<PageTwo />} />
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
)

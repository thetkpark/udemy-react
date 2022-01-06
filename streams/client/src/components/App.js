import { BrowserRouter, Routes, Route } from "react-router-dom"
import StreamCreate from "./streams/StreamCreate"
import StreamEdit from "./streams/StreamEdit"
import StreamDelete from "./streams/StreamDelete"
import StreamList from "./streams/StreamList"
import StreamShow from "./streams/StreamShow"

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<StreamList />} />
					<Route path="/streams/new" element={<StreamCreate />} />
					<Route path="/streams/edit" element={<StreamEdit />} />
					<Route path="/streams/delete" element={<StreamDelete />} />
					<Route path="/streams/show" element={<StreamShow />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App

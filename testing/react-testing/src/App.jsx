import { useState, useReducer } from "react"

function App() {
	const [s, f] = useState("")

	fetch("").then(data => f(data))

	return <button>Click me</button>
}

export default App

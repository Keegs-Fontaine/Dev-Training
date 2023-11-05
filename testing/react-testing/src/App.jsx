import { createContext, useState } from "react"
import CountComponent from "./CountComponent"
import CountConsumer from "./CountConsumer"
import "./App.css"

export const CountContext = createContext(null)

function App() {
	const countState = useState(0)

	return (
		<CountContext.Provider value={countState}>
			<h1>Count: {countState[0]}</h1>
			<button onClick={() => countState[1](prev => prev - 1)}>--</button>
			<CountComponent />
			<CountConsumer />
		</CountContext.Provider>
	)
}

export default App

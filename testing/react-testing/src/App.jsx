import { useState, useReducer } from "react"

function App() {
	const [countState, setCountState] = useState(0)
	const [state, dispatch] = useReducer((state, actions) => {
		if (actions.type === "inc") return state + 1
		if (actions.type === "dec") return state - 1
	}, 0)

	return (
		<main style={{ width: "100vw", display: "grid", placeContent: "center" }}>
			<h1 style={{ textAlign: "center" }}>{countState}</h1>
			<button onClick={() => setCountState(countState + 1)}>Increment</button>

			<h2 style={{ textAlign: "center" }}>{state}</h2>
			<button onClick={() => dispatch({ type: "inc" })}>Increment</button>
			<button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
		</main>
	)
}

export default App

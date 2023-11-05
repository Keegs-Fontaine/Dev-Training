import { useContext } from "react"
import { CountContext } from "./App"

export default function CountComponent() {
	const count = useContext(CountContext)

	return (
		<>
			<h1>COUNT: {count[0]}</h1>
			<button onClick={() => count[1](prev => prev + 1)}>++</button>
		</>
	)
}

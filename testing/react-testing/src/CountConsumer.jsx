import { CountContext } from "./App"

export default function CountConsumer() {
	return (
		<CountContext.Consumer>
			{countContext => (
				<>
					<div>CONSUMER COUNT: {countContext[0]}</div>
					<button onClick={() => countContext[1](prev => prev ** 2)}>**</button>
				</>
			)}
		</CountContext.Consumer>
	)
}

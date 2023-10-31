// Hooks
import { useState, useEffect, useRef } from "react"

// Components
import Header from "./components/sections/Header"
import Person from "./components/Person"

// Assets
import defaultImg from "./assets/placeholder.svg"

export default function App() {
	const [studentListData, setStudentListData] = useState([])
	const fullStudentListData = useRef([])

	useEffect(() => {
		const fetchWorkData = async () => {
			const res = await fetch("https://digitalcorps.s3.amazonaws.com/training/dev/students.json")
			const { students } = await res.json()

			fullStudentListData.current = students
			setStudentListData(students)
		}

		fetchWorkData()
	}, [])

	return (
		<>
			<Header
				students={fullStudentListData.current}
				filterStudentsFunc={filteredData => setStudentListData(filteredData)}
			/>
			<main className="main | wrapper">
				{studentListData.length ? (
					studentListData.map(({ name, thumbnail, team, id }) => (
						<Person name={name} team={team} thumbnail={thumbnail ? thumbnail : defaultImg} key={id} />
					))
				) : (
					<h1>No One Found :(</h1>
				)}
			</main>
		</>
	)
}

// Image Assets
import logo from "../../assets/logo-bsu.svg"

export default function Header(props) {
	const teamNames = Array.from(new Set(students.map(student => student.team)))

	return (
		<header className="main-header">
			<div className="main-header__logo">
				<img src={logo} alt="BALL STATE" />
			</div>
			<section className="main-header__page-filtering-section | wrapper">
				<input
					type="text"
					placeholder="search by name"
					onChange={e =>
						filterStudentsFunc(
							students.filter(student =>
								student.name.toLowerCase().includes(e.target.value.toLowerCase())
							)
						)
					}
				/>

				<section className="main-header__btn-container">
					<button
						className="main-header__filter-btn main-header__filter-btn--all"
						onClick={e => filterStudentsFunc(students)}
					>
						ALL
					</button>
					{teamNames.map((name, i) => (
						<button
							className="main-header__filter-btn"
							data-team={name}
							onClick={e => filterStudentsFunc(students.filter(student => student.team === name))}
							// Using dangerouslySetInnerHTML because of the html codes in team names
							dangerouslySetInnerHTML={{ __html: name }}
							key={i}
						></button>
					))}
				</section>
			</section>
		</header>
	)
}

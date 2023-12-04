// Styles
import "./SectionHeader.scss"

export default function SectionHeader({ text, lineThrough = true }: { text: string; lineThrough?: boolean }) {
	return (
		<header className={`| main-style-header ${lineThrough && "main-style-header--line"}`}>
			<h1 className="main-style-header__text">{text}</h1>
		</header>
	)
}

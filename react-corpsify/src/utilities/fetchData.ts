export default async function fetchData(url: string) {
	try {
		const res = await fetch(url)
		return res.json()
	} catch (error) {
		console.log("ERROR" + error)
	}
}

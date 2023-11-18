// The length of this function name is crazy. I can't imagine what a dev who had never touched js would think when seeing this
export default async function fetchData<APIResType>(url: string): Promise<APIResType | undefined> {
	try {
		const res = await fetch(url)
		const data: Promise<APIResType> = res.json()

		return data
	} catch (error) {
		console.log("THERE WAS AN ERROR" + error)
	}
}

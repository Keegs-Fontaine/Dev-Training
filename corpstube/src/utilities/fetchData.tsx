// Types
type PostType = {
	name: string
	comment: string
}

// The length of this function name is crazy. I can't imagine what a dev who had never touched js would think when seeing this
export default async function fetchData<APIResType>(url: string): Promise<APIResType> {
	try {
		const res = await fetch(url)
		const data: Promise<APIResType> = res.json()

		return data
	} catch (error) {
		throw new Error("Failed to fetch data: " + error)
	}
}

export async function postData<APIResType>(url: string, postBody: PostType): Promise<APIResType> {
	try {
		const res = await fetch(url, {
			method: "POST",

			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"x-api-key": "8zF_}d}d05QiB;peTOj[PHWu-/fLuw~(",
			},

			body: JSON.stringify(postBody),
		})
		const data: Promise<APIResType> = res.json()

		return data
	} catch (error) {
		throw new Error("Failed to fetch data: " + error)
	}
}

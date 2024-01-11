import { data } from '../lib/playList'

export async function GET({ params, request }) {
	const { url } = request
	const urlObject = new URL(url)
	const q = urlObject.searchParams.get('q')

	const singer = data.find((artist) => artist.name === q)

	return new Response(JSON.stringify({ singer }), {
		headers: {'content-type': 'application/json'},
	})
}
export async function fetchMusicData(idMusic) {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
			'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST,
		},
	};

	const urlweb = 'https://deezerdevs-deezer.p.rapidapi.com/track/'

	try {
		const response = await fetch(`${urlweb}${idMusic}`, options);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
		return null;
	}
}
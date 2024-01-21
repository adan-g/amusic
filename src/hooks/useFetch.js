//import { useState, useEffect } from "react";

const fetchMusicData = async (urlweb, idMusic) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
			'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST,
		},
	};

	try {
		const response = await fetch(`${urlweb}${idMusic}`, options);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
		return null;
	}
};


// export function useFetch(url) {
// 	const [data, setData] = useState(null)

// 	const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
//       'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST
//     }
//   };

// 	useEffect(() => {
// 		fetch(url, options)
// 			.then((response) => response.json())
// 			.then((data) => setData(data))
// 	}, [])

// 	return { data }
// }


export default fetchMusicData
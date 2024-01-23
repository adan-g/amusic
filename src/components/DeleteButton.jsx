import React from 'react'
import { RiDeleteBin2Line } from "react-icons/ri";
import { deleteSong } from '../api/getInfoPlayList.api';

const DeleteButton = ({ id }) => {

	const btnDelete = async () => {
		try {
			const res = await deleteSong(id);
			console.log(res);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<button onClick={btnDelete}>
			<RiDeleteBin2Line className='text-2xl' />
		</button>
	)
}

export default DeleteButton
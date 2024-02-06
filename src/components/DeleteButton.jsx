import { RiDeleteBin2Fill } from "react-icons/ri";
import { deleteSong } from '../api/getInfoPlayList.api';
import { usePlayerStore } from "../hooks/playerStore";

const DeleteButton = ({ id }) => {
	const {
		setPlayListModified,
		setAlertMsg
	} = usePlayerStore(state => state)

	const btnDelete = async () => {
		try {
			const res = await deleteSong(id);
			if (res.status == 204) {
				setAlertMsg({ type: `success`, message: `Music removed!` })
				setPlayListModified(true)
			}
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<button onClick={btnDelete}>
			<RiDeleteBin2Fill className='text-2xl' />
		</button>
	)
}

export default DeleteButton
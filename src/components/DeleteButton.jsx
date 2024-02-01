import { RiDeleteBin2Fill } from "react-icons/ri";
import { deleteSong } from '../api/getInfoPlayList.api';
import { usePlayerStore } from "../hooks/playerStore";

const DeleteButton = ({ id }) => {
	const {
    setPlayListModified
  } = usePlayerStore(state => state)

	const btnDelete = async () => {
		try {
			const res = await deleteSong(id);
			console.log(res)
			if (res.status == 204) {
        alert('music deleted')		
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
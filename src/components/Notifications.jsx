import * as React from 'react';
import { usePlayerStore } from "../hooks/playerStore";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export const Notifications = () => {
	const { alertMsg, setAlertMsg } = usePlayerStore(state => state)
	const [open, setOpen] = React.useState(false);
	
	React.useEffect(() => {
		if (alertMsg.type) {
			setOpen(true);
		}
	}, [alertMsg]);

	const handleClose = () => {
		setOpen(false);
		setAlertMsg('');
	};

	
	return (
		<div>
			<Snackbar 
			open={open} 
			autoHideDuration={2000} 
			onClose={handleClose} 
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			>
				<Alert
					severity={alertMsg.type}
					variant="filled"
					sx={{ width: '100%' }}
				>
					{alertMsg.message}
				</Alert>
			</Snackbar>
		</div>
	);
}
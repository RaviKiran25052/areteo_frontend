const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center">
			<div className="bg-white rounded-lg p-6 w-96 max-w-[90vw]">
				<h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
				<p className="text-gray-600 mb-4">Are you sure you want to log out?</p>
				<div className="flex gap-2 justify-end">
					<button
						onClick={onClose}
						className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
					>
						Cancel
					</button>
					<button
						onClick={onConfirm}
						className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
					>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
};

export default LogoutModal
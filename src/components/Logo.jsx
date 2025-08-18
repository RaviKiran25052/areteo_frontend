import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logo = () => {
	const navigate = useNavigate();
	return (
		<div className='flex item-center gap-2 cursor-pointer' onClick={() => navigate('/')}>
			<img src="/logo/black-logo.png" className='h-12' alt="icon" />
			<div className="flex flex-col gap-1">
				<img src="/logo/text.png" className='h-8 w-fit mx-auto' alt="text" />
				<p className='text-xs font-semibold'>Teach · Learn · Grow</p>
			</div>
		</div>
	)
}

export default Logo
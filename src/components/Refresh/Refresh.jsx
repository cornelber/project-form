import './Refresh.css'
import React from 'react'
import { Button } from 'react-bootstrap'

const Refresh = ({ handleUsersList }) => {
	return (
		<div className='refresh-section'>
			<p className='refresh-title'>
				Clicking on 'Refresh' will generate the list of default users
				again
			</p>
			<Button onClick={handleUsersList} className='refresh-btn'>
				Refresh
			</Button>
		</div>
	)
}

export default Refresh

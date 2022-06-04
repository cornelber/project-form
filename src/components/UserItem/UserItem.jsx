import './UserItem.css'
import React from 'react'
import { Button } from 'react-bootstrap'

const UserItem = ({ id, name, username, email, phone, removeUser }) => {
	const removeSpecificUser = () => {
		removeUser(id)
	}

	return (
		<div className='user-item'>
			<div className='user-name'>
				<h2>{name}</h2>
				<Button
					onClick={removeSpecificUser}
					className='user-delete-btn'
				>
					Delete User
				</Button>
			</div>
			<div className='user-info'>
				<p>{username}</p>
				<p>{email}</p>
				<p>{phone}</p>
			</div>
		</div>
	)
}

export default UserItem

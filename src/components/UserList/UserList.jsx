import './UserList.css'
import React from 'react'
import UserItem from '../UserItem/UserItem'

const UserList = ({ users, removeUser }) => {
	return (
		<div className='user-list'>
			{users.map(user => (
				<UserItem key={user.id} {...user} removeUser={removeUser} />
			))}
		</div>
	)
}

export default UserList

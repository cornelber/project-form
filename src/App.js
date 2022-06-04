import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import Loading from './components/Loading/Loading.jsx'
import UserList from './components/UserList/UserList.jsx'
import UserAddForm from './components/UserAddForm/UserAddForm.jsx'
import Refresh from './components/Refresh/Refresh.jsx'

const url = 'https://jsonplaceholder.typicode.com/users'

function App() {
	const [loading, setLoading] = useState(true)
	const [users, setUsers] = useState([])

	const fetchData = () => {
		fetch(url).then(res =>
			res.json().then(data => {
				try {
					setLoading(false)
					setUsers(data)
				} catch (error) {
					setLoading(false)
					console.log(error)
				}
			})
		)
	}

	const addUser = user => {
		setUsers([user, ...users])
	}

	const removeUser = id => {
		const newUsers = users.filter(user => user.id !== id)
		setUsers(newUsers)
	}

	const handleUsersList = () => {
		fetchData()
	}

	useEffect(() => {
		fetchData()
	}, [])

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		)
	}

	return (
		<main>
			<div className='home-title'>
				<h2>Form Project</h2>
				<div className='underline'></div>
			</div>
			<UserAddForm addUser={addUser} />
			<div className='home-subtitle'>
				<h2>{users.length} Users</h2>
				<div className='underline'></div>
			</div>
			{users.length === 0 ? (
				<Refresh handleUsersList={handleUsersList} />
			) : (
				<UserList users={users} removeUser={removeUser} />
			)}
		</main>
	)
}

export default App

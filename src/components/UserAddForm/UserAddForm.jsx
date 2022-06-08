import './UserAddForm.css'
import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const UserAddForm = ({ addUser }) => {
	const [formName, setFormName] = useState('')
	const [formEmail, setFormEmail] = useState('')
	const [formUserName, setFormUserName] = useState('')
	const [formPhone, setFormPhone] = useState('')

	const handleNameChange = ({ target }) => {
		setFormName(target.value)
	}

	const handleEmailChange = ({ target }) => {
		setFormEmail(target.value)
	}

	const handleUserNameChange = ({ target }) => {
		setFormUserName(target.value)
	}

	const handlePhoneChange = ({ target }) => {
		setFormPhone(target.value)
	}

	const resetFormInputs = () => {
		setFormName('')
		setFormEmail('')
		setFormUserName('')
		setFormPhone('')
	}

	const handleFormSubmit = e => {
		e.preventDefault()

		if (
			formName === '' &&
			formEmail === '' &&
			formUserName === '' &&
			formPhone === ''
		) {
			alert('Please fill in all the cells in the form!')
		} else {
			const user = {
				id: Date.now(),
				name: formName,
				email: formEmail,
				username: formUserName,
				phone: formPhone,
			}

			addUser(user)
		}
	}

	return (
		<div className='form-section'>
			<Form onSubmit={handleFormSubmit}>
				<Form.Group className='mb-3' controlId='formName'>
					<Form.Label>Name, Surname</Form.Label>
					<Form.Control
						onChange={handleNameChange}
						type='text'
						placeholder='Ex: John Doe'
						value={formName}
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						onChange={handleEmailChange}
						type='email'
						placeholder='Ex: johndoe@gmail.com'
						value={formEmail}
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formUserName'>
					<Form.Label>Username</Form.Label>
					<Form.Control
						onChange={handleUserNameChange}
						type='text'
						placeholder='Ex: JohnDOO'
						value={formUserName}
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formPhone'>
					<Form.Label>Phone</Form.Label>
					<Form.Control
						onChange={handlePhoneChange}
						type='tel'
						placeholder='Ex: 0728917723'
						value={formPhone}
					/>
					<p className='insights'>
						{formPhone === ''
							? ''
							: 'Is this really your phone number ?'}
					</p>
				</Form.Group>
				<Button className='mt-3 mb-2 form-btn-submit' type='submit'>
					Submit
				</Button>
				<Button onClick={resetFormInputs} className='form-btn-reset'>
					Reset
				</Button>
			</Form>
		</div>
	)
}

export default UserAddForm

import React, { useState } from 'react';

const Form = props => {
    console.log(props);
    const [person, setPerson] = useState({
        name: '',
        email: '',
        role: '',
        id: ''
    })
    const handleChanges = e => {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        });
    };
    const submitForm = e => {
        e.preventDefault()
        const newMember = {
            ...person,
            id: Date.now()
        }
        props.addNewMember(newMember)
        setPerson(newMember)
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Member's Name</label>
                <input id="name" name="name" onChange={handleChanges} value={person.name} type="text" placeholder="Name"></input>

                <label htmlFor="email">Member's Email</label>
                <input id="email" name="email" onChange={handleChanges} value={person.email} type="text" placeholder="Email"></input>

                <label htmlFor="role">Member's Role</label>
                <input id="role" name="role" onChange={handleChanges} value={person.role} type="text" placeholder="Role"></input>

                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form;
import React, { useState } from 'react'

const genId = (() => {
    let id = 1;
    return () => {
        return id++;
    }
})()

export default function ContactForm() {
    const [people, setPeople] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = { id: genId(), firstName, lastName, phone }
        console.log(newPerson);

        setPeople([...people, newPerson])
    }

    return (
        <div>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <div>First name</div>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </label>
                <label>
                    <div>Last name</div>
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                </label>
                <label>
                    <div>Phone</div>
                    <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
                </label>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map(person => {
                        const { id, firstName, lastName, phone } = person;
                        return <tr key={id}>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{phone}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

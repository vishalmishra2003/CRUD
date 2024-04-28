import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateUser() {
    const { id } = useParams()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = () => {
            axios.get('http://localhost:3000/getUser/' + id)
                .then(res => {
                    setName(res.data.name)
                    setEmail(res.data.email)
                    setAge(res.data.age)
                })
                .catch(err => console.log(err))
        }
        fetchData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/updateUser/' + id, { name, email, age })
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="center">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Age:
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UpdateUser

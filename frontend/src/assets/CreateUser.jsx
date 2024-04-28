import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CreateUser = () => {

    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [age, setAge] = useState([])
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/putDetail', { name, email, age })
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
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Age:
                    <input type="number" onChange={(e) => setAge(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateUser

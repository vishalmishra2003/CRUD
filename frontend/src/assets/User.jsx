import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function User() {

    const [user, setUser] = useState([])

    useEffect(() => {
        const fetch = () => {
            axios.get('http://localhost:3000/fetchData')
                .then(res => setUser(res.data))
                .catch(err => console.log(err))

        }
        fetch()
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/deleteUser/' + id)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div>
                <Link to="./CreateUser" className='create-btn'>Create New User</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((data) => {
                                return <>
                                    <tr>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.age}</td>
                                        <td>
                                            <Link to={`/UpdateUser/${data._id}`} className='btn'>Update</Link>
                                            <button className='del-btn' onClick={(e) => { handleDelete(data._id) }}>Delete</button>
                                        </td>
                                    </tr>
                                </>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default User

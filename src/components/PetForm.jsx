import React, { useState } from 'react'

const PetForm = ({handleAddPet}) => {

    const [formData, setFormData] = useState({
        name: "",
        breed: "",
        age: 0
    })

    const handleChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const handleSubmit = async e => {
        e.preventDefault()
        await handleAddPet(formData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id='name'
                    name='name'
                    onChange={handleChange}
                    value={formData.name}
                />
                <label htmlFor="breed">Breed</label>
                <input
                    type="text"
                    id='breed'
                    name='breed'
                    onChange={handleChange}
                    value={formData.breed}
                />
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    id='age'
                    name='age'
                    onChange={handleChange}
                    value={formData.age}
                />

                <button type='submit'>Add new pet</button>
            </form>
        </div>
    )
}

export default PetForm
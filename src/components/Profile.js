import React, { useState} from 'react'

function Profile() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")
    const [country, SetCountry] = useState("Kenya")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("pup")
    }
  return (
    <div className='container'>
        <form className='form-container' onSubmit={handleSubmit}>
            <h1>Let's get started 👋 </h1>
            <label htmlFor='name'>Username</label>
            <input 
            type="text" name="name" placeholder="Enter your name"  value={name}
            onChange={(e) => setName(e.target.value)} />
            <label htmlFor='email'>Email</label>
            <input type="email" name="email" placeholder='email' 
            value={email}
            onChange={(e) => setEmail(e.target.value) }
            />
            <label htmlFor='country'>Country</label>
            <select name='country'
            value={country}
            onChange={(e) => SetCountry(e.target.value)}
            >
                <option>Kenya</option>
                <option>Uganda</option>
                <option>Tanzania</option>
                <option>Rwanda</option>
                <option>Sudan</option>
                <option>Ethopia</option>
            </select>
            <label htmlFor='description'>Description</label>
            <input type="text" name="description"  placeholder='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </form>
        <button type="submit">Submit</button>
    </div>
  )
}

export default Profile
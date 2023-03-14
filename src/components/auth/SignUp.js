import React from 'react'
import { useState } from 'react'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
      console.log(email);
      console.log(password);
      console.log(firstname);
      console.log(lastname);
  }
  
    return (
    <div className="container">
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' value={password}  onChange={(e) => setPassword(e.target.value)} />
         </div>
        <div className="input-field">
            <label htmlFor="firstname">firstname</label>
            <input type="text" id='firstname' value={firstname}  onChange={(e) => setFirstname(e.target.value)} />
        </div>
        <div className="input-field">
            <label htmlFor="lastname">lastname</label>
            <input type="text" id='lastname' value={lastname}  onChange={(e) => setLastname(e.target.value)} />
        </div>
        <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
        </form>
      </div>
  )
}

export default SignUp
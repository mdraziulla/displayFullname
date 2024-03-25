import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName]= useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    const full = `${firstName} ${lastName}`;
    setFullName(full);
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} method="post">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type='text' value={firstName} onChange={(e)=> setFirstName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type='text' value={lastName} onChange={(e)=> setLastName(e.target.value)} required />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
        {
          fullName && <p>Full Name : {fullName}</p>
        }
        </div>
    </>
  )
}

export default App

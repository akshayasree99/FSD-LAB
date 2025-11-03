import React, { useState } from 'react'; 
 
const Register = () => { 
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
 
    const handleRegister = (e) => { 
        e.preventDefault(); 
        console.log('Registering user', username); 
        // Implement registration logic here 
    }; 
 
    return ( 
        <div> 
            <h2>Register</h2> 
            <form onSubmit={handleRegister}> 
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                /> 
                <input 
                    type="password"
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                /> 
                <button type="submit">Register</button> 
            </form> 
        </div> 
    ); 
}; 
 
export default Register;
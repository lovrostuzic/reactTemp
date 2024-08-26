import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook 
import {
    MDBContainer,
    MDBInput
} from 'mdb-react-ui-kit';

function AddAdmin() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(''); // State to manage error messages 
    const history = useNavigate(); // Get the history object for redirection 

    const handleAddAdmin= async () => {
        try {
            // Check for empty fields 
            if (!firstName || !lastName || !email || !password || !confirmPassword ) {
                setError('Please fill in all fields.');
                return;
            }

            if (password !== confirmPassword) {
                throw new Error("Passwords do not match");
            }

            const response = await axios.post('http://localhost:8080/auth/addAdmin', {
                firstName,
                lastName,
                email,
                password
        
    
            });
            // Handle successful signup 
            console.log(response.data);
            history('/dashboard');
        } catch (error) {
            // Handle signup error 
            console.error('AddAdmin failed:', error.response ? error.response.data : error.message);
            setError(error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="border rounded-lg p-4" style={{ width: '600px', height: 'auto' }}>
                <MDBContainer className="p-3">
                    <h2 className="mb-4 text-center">Sign Up Page</h2>
                    {/* Render error message if exists */}
                    {error && <p className="text-danger">{error}</p>}
                    <MDBInput wrapperClass='mb-3' id='firstName' placeholder={"First Name"} value={firstName} type='text'
                        onChange={(e) => setFirstName(e.target.value)} />
                    <MDBInput wrapperClass='mb-3' id='lastName' placeholder={"Last Name"} value={lastName} type='text'
                        onChange={(e) => setLastName(e.target.value)} />
                    <MDBInput wrapperClass='mb-3' placeholder='Email Address' id='email' value={email} type='email'
                        onChange={(e) => setEmail(e.target.value)} />
                    <MDBInput wrapperClass='mb-3' placeholder='Password' id='password' type='password' value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <MDBInput wrapperClass='mb-3' placeholder='Confirm Password' id='confirmPassword' type='password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    {/*       <MDBInput wrapperClass='mb-2' placeholder='Mobile Number' id='mobileNumber' value={mobile} 
                              type='text'
                              onChange={(e) => setMobileNumber(e.target.value)}/> 
                  <label className="form-label mb-1">Role:</label> 
                    <select className="form-select mb-4" value={role} onChange={(e) => setRole(e.target.value)}> 
                        <option value="ROLE_USER">User</option> 
                        <option value="ROLE_ADMIN">Admin</option> 
                    </select> */}
                    <button className="mb-4 d-block mx-auto fixed-action-btn btn-primary"
                        style={{ height: '40px', width: '100%' }}
                        type='submit'
                        onClick={handleAddAdmin}>Add Admin
                    </button>

                
                </MDBContainer>
            </div>
        </div>
    );
}

export default AddAdmin; 
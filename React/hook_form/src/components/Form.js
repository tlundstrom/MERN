import React, {useState} from "react";

const Form = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    return(
        <div>
            <form>
                <p>First Name:</p>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                {
                    firstName.length < 2 && firstName.length>0?
                    <p>First Name must be at least than 2 characters.</p>:
                    null
                }
                <p>Last Name:</p>
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                {
                    lastName.length < 2 && lastName.length>0?
                    <p>Last Name must be at least than 2 characters.</p>:
                    null
                }
                <p>Email:</p>
                {
                    email.length < 5 && email.length>0?
                    <p>First Name must be at least than 5 characters.</p>:
                    null
                }
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <p>Password:</p>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <p>Confirm Password:</p>
                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                {
                    confirmPassword !== password && confirmPassword.length >0?
                    <p>Passwords must match</p>:
                    null
                }
            </form>
            <p>Your Form Data</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    )
}

export default Form
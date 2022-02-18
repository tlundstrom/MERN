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
                <p>Last Name:</p>
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                <p>Email:</p>
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <p>Password:</p>
                <input type="password" onChange={(e) => setPassword(e.target.value)} alue={password}/>
                <p>Confirm Password:</p>
                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} alue={confirmPassword}/>
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
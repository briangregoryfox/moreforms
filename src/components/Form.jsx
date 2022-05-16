import React, {useState} from 'react'


const Form =(props) => {

    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")

    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const[emailError, setEmailError] = useState("")
    const[passwordError, setPasswordError] = useState("")
    const[confirmPasswordError, setConfirmPasswordError] = useState("")

    const submitHandler = (event) => {
        event.preventDefault()
        setFirstName("")
        setLastName("")


    }

    const firstNameHandler = (event) => {
        setFirstName(event.target.value)
        if(event.target.value.length < 1){
            setFirstNameError("FIRST NAME REQUIRED")
        }
        else if (event.target.value.length < 2){
            setFirstNameError("FIRST NAME MUST BE LONGER THAN 2 CHARACTERS")
        }
        else{
            setFirstNameError("")
        }
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value)
        if(event.target.value.length < 1){
            setLastNameError("LAST NAME REQUIRED")
        }
        else if (event.target.value.length < 2){
            setLastNameError("LAST NAME MUST BE LONGER THAN 2 CHARACTERS")
        }
        else{
            setLastNameError("")
        }
    }

    const emailHandler = (event) => {
        setEmail(event.target.value)
        if(event.target.value.length < 1){
            setEmailError("EMAIL REQUIRED")
        }
        else if (event.target.value.length < 5){
            setEmailError("EMAIL MUST BE LONGER THAN 5 CHARACTERS")
        }
        else{
            setEmailError("")
        }
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
        if(event.target.value.length < 1){
            setPasswordError("PASSWORD REQUIRED")
        }
        else if (event.target.value.length < 8){
            setPasswordError("PASSWORD MUST BE LONGER THAN 8 CHARACTERS")
        }
        else{
            setPasswordError("")
        }
    }

    const confirmPasswordHandler = (event) => {
        setConfirmPassword(event.target.value)
        if(event.target.value.length < 1){
            setConfirmPasswordError("CONFIRM PASSWORD REQUIRED")
        }
        else if (event.target.value.length < 8){
            setConfirmPasswordError("PASSWORDS MUST PASS MUST MATCH AND BE LONGER THAN 8 CHARACTERS")
        }
        else{
            setConfirmPasswordError("")
        }
    }


    return (
        <div className="container mx-auto">
                <div className="mt-1 relative rounded-md shadow-sm p-3">
                    <form onSubmit={submitHandler}>
                        <div className="firstname p-1">
                            <input 
                                onChange={firstNameHandler}
                                value={firstName}
                                type="text"
                                name="firstName"
                                id="firstName"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                placeholder="first name"
                            />
                            {
                                firstNameError ? <p style={{color:'red'}}>{firstNameError}</p> : null 
                            }
                        </div>
                        <div className="p-1">
                            <input 
                                onChange={lastNameHandler}
                                type="text"
                                value={lastName}
                                name="lastname"
                                id="lastname"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                placeholder="last name"
                            />
                            {
                                lastNameError ? <p style={{color:'red'}}>{lastNameError}</p> : null 
                            }
                        </div>
                        <div className="p-1">
                            <input 
                                onChange={emailHandler}
                                value={email}
                                type="email"
                                name="email"
                                id="email"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                placeholder="email"
                            />
                            {
                                emailError ? <p style={{color:'red'}}>{emailError}</p> : null 
                            }
                        </div>
                        <div className="firstname p-1">
                            <input
                                onChange={passwordHandler}
                                value={password}
                                type="password"
                                name="password"
                                id="passwrd"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                placeholder="password"
                            />
                            {
                                passwordError ? <p style={{color:'red'}}>{passwordError}</p> : null 
                            }
                        </div>
                        <div className="firstname p-1">
                            <input
                                onChange={confirmPasswordHandler}
                                value={confirmPassword}
                                type="text"
                                name="confirmPassword"
                                id="confirmPassword"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                placeholder="confirm password"
                            />
                            {
                                confirmPasswordError ? <p style={{color:'red'}}>{confirmPasswordError}</p> : null 
                            }
                        </div>
                    </form>
                </div>
                <fieldset>
                <legend>Your Form Details</legend>
                <p>First Name:    {firstName}</p>
                <p>Last Name:</p>
                <p>Email:</p>
                <p>Password:</p>
                <p>Confirm Password:</p>
            </fieldset>
        </div>
    )
    
}

export default Form

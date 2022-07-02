import * as React from "react"
import "./RegistrationForm.css"
import {Link} from "react-router-dom"
import {useState} from "react"

export default function RegistrationForm(props){
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        email: "",
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirm: "",
    })
    const handleOnInputChange = (event) =>{
        if(event.target.name === "password"){
            if(form.passwordConfirm && form.passwordConfirm !== event.target.value){
                setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match"}))
            }else{
                setErrors((e) => ({ ...e, passwordConfirm: null}))
            }
        }
        if(event.target.name === "passwordConfirm"){
            if(form.password && form.password !== event.target.value){
                setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match"}))
            }else{
                setErrors((e) => ({ ...e, passwordConfirm: null}))
            }
        }
        if(event.target.name === "email"){
            if(event.target.value.indexOf("@") === -1){
                setErrors((e) => ({ ...e, email: "Please enter a valid email."}))
            }else{
                setErrors((e) => ({ ...e, email: null}))
            }
        }

        setForm((f) => ({ ...f, [event.target.name]: event.target.value}))
    }
    console.log(form)
    console.log(errors)
    return (
        <div className="registeration-form">
            <div className="container">
                <h2 className="title">Register</h2>
                <br/>
                <div className="inputs">
                    <div className="form-input">
                        <label form="email">Email</label>
                        <input type="email" name="email" placeholder="Enter a valid email" value={form.email} onChange={handleOnInputChange}/>
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-input">
                        <label form="username">Username</label>
                        <input type="text" name="username" placeholder="your_username" value={form.username} onChange={handleOnInputChange}/>
                        {errors.username && <span className="error">{errors.username}</span>}
                    </div>
                    <div className="split-form-input">
                        <div className="form-input">
                            <input type="text" name="firstName" placeholder="First Name" value={form.first_name} onChange={handleOnInputChange}/>
                            {errors.firstName && <span className="error">{errors.firstName}</span>}
                        </div>
                        <div className="form-input">
                            <input type="text" name="lastName" placeholder="Last Name" value={form.last_name} onChange={handleOnInputChange}/>
                            {errors.lastName && <span className="error">{errors.lastName}</span>}
                        </div>
                    </div>
                    <div className="form-input">
                        <label for="password">Password</label>
                        <input type="password" name="password" placeholder="Enter a secure password" value={form.password} onChange={handleOnInputChange}/>
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <div className="form-input">
                        <label for="passwordConfirm">Confirm Password</label>
                        <input type="password" name="passwordConfirm" placeholder="Confirm your password" value={form.password_confirm} onChange={handleOnInputChange}/>
                        {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
                    </div>
                    <button className="btn">Create Account</button>
                </div>
                <div className="footer">
                    <p>
                        Already have an account? Login
                        <span className="blank">_</span>
                        <Link to="/login">here</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
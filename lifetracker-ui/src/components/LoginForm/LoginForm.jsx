import * as React from "react"
import "./LoginForm.css"
import {Link} from "react-router-dom"
import {useState} from "react"

export default function Navbar(props){
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const handleOnInputChange = (event) =>{
        if(event.target.name === "email"){
            if(event.target.value.indexOf("@") === -1){
                setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
            }else{
                setErrors((e) => ({...e, email: null}))
            }
        }
        setForm((f) => ({ ...f, [event.target.name]: event.target.value}))
    }
    return(
        <div className="login-form">
            <div className="container">
                <h2>Login</h2>
                <br/>
                <div className="inputs">
                    <div className="form-input">
                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="user@gmail.com" value={form.emai} onChange={handleOnInputChange}/>
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-input">
                        <label for="password">Password</label>
                        <input type="password" name="password" placeholder="password" value={form.password} onChange={handleOnInputChange}/>
                    </div>
                    <button className="btn">Login</button>
                </div>
                <div className="footer">
                    <p>
                        Don't have an account? Sign up
                        <span className="blank">_</span>
                        <Link className="link" to="/register">
                            here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
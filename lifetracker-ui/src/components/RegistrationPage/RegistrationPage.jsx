import * as React from "react"
import "./RegistrationPage.css"
import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import RegistrationForm from "../RegistrationForm/RegistrationForm"

export default function RegistrationPage(props){
    const navigate = useNavigate()
    return (
        <div className="registration-page">
            {props.isLogin ?
            React.useEffect(() => {
                navigate("/activity"), []
            })
            : <RegistrationForm></RegistrationForm>}
        </div>
    )
}
import * as React from "react"
import "./ActivityPage.css"
import {useState} from "react"
import LoginForm from "../LoginForm/LoginForm"
import { useNavigate } from "react-router-dom"
import ActivityFeed from "../ActivityFeed/ActivityFeed"

export default function ActivityPage(props){
    const navigate = useNavigate()
    return (
        <div className="activie-page">
            {true ?
            <ActivityFeed></ActivityFeed>
            :
            <LoginForm></LoginForm>
            }
        </div>
    )
}
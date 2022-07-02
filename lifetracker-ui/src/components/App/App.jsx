import * as React from "react"
import "./App.css"
import Navbar from "../Navbar/Navbar"
import Landing from "../Landing/Landing"
import LoginForm from "../LoginForm/LoginForm"
import RegistrationFrom from "../RegistrationForm/RegistrationForm"
import ActivityFeed from "../ActivityFeed/ActivityFeed"
import NutritionPage from "../NutritionPage/NutritionPage"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {useState} from "react"
import LoginPage from "../LoginPage/LoginPage"
import RegistrationPage from "../RegistrationPage/RegistrationPage"
import ActivityPage from "../ActivityPage/ActivityPage"

export default function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div className="app">
      <React.Fragment>{

          <BrowserRouter>
            <Navbar isLogin={isLogin} />
            <Routes>
              <Route path="/" element={<Landing/>}></Route>
              <Route path="/login" element={<LoginPage isLogin={isLogin} ></LoginPage>}></Route>
              <Route path="/register" element={<RegistrationPage isLogin={isLogin}></RegistrationPage>}></Route>
              <Route path="/activity" element={<ActivityPage isLogin={isLogin}></ActivityPage>}></Route>
              <Route path="/nutrition/*" element={<NutritionPage isLogin={isLogin}></NutritionPage>}></Route>
            </Routes>
          </BrowserRouter>

      }</React.Fragment>
    </div>
  )
}

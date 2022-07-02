import * as React from "react"
import "./NutritionPage.css"
import {useState} from "react"
import { Routes, Route} from "react-router-dom"
import NutritionOverview from "../NutritionOverview/NutritionOverview"
import NutritionNew from "../NutritionNew/NutritionNew"
import NutritionDetail from "../NutritionDetail/NutritionDetail"
import LoginForm from "../LoginForm/LoginForm"

export default function NutritionPage(props){
    return (
        <div className="nutrition-page">
            {true ? 
            <main>
                <div className="banner">
                    <h1>Nutrition</h1>
                </div>
                <Routes>
                    <Route path="/" element={<NutritionOverview></NutritionOverview>}></Route>
                    <Route path="/create" element={<NutritionNew></NutritionNew>}></Route>
                    <Route path="/id/:nutritionId" element={<NutritionDetail></NutritionDetail>}></Route>
                </Routes>
            </main>
            :
            <LoginForm></LoginForm>}
        </div>
    )
}
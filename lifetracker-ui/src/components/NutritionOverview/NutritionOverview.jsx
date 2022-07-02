import * as React from "react"
import "./NutritionOverview.css"
import NutritionFeed from "../NutritionFeed/NutritionFeed"
import {Link} from "react-router-dom"

export default function NutritionOverview(props){
    return (
        <div className="content">
            <div className="nutrition-overview">
                <div className="header">
                    <h3>Overview</h3>
                    <Link className="add" to="/nutrition/create">Record Nutrition</Link>
                </div>
                <NutritionFeed></NutritionFeed>
            </div>
        </div>
    )
}
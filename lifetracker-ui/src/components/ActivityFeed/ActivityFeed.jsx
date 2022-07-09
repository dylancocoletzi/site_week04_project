import * as React from "react"
import "./ActivityFeed.css"
import {useState} from "react"
import SummaryStat from "components/SummaryStat/SummaryStat"
import {Link} from "react-router-dom"

export default function ActivityFeed(props){
    console.log("propsA", props)
    const avgCaloriesPerCategory = [
        {category: "candy", avgCaloriesPerCategory: 100.0},
        {category: "drink", avgCaloriesPerCategory: 300.0},
        {category: "fruit", avgCaloriesPerCategory: 266.6},
        {category: "dairy", avgCaloriesPerCategory: 400.0},
        {category: "carbs", avgCaloriesPerCategory: 500.0},
        {category: "vegetables", avgCaloriesPerCategory: 330.0},
        {category: "protein", avgCaloriesPerCategory: 550.0}
    ]
    const totalCaloriesPerDay = [
        {date: "12-22-2022", totalCaloriesPerDay: 300},
        {date: "12-23-2022", totalCaloriesPerDay: 1000},
        {date: "12-24-2022", totalCaloriesPerDay: 800}
    ]
    return (
        <div className="activity-feed">
                <div className="actions">
                    <h2>Activity Feed</h2>
                    <div className="btnd">
                        {/* <button className="button">Record Nutrition</button> */}
                        <Link className="button" to="/nutrition/create">Record Nutrition</Link>
                    </div>
                </div>
                <div className="stats">
                    <h4>Average Calories Per Category</h4>
                    <div className="per-category">
                        {props.activity.length > 6 ?
                        props.activity.slice(0, 6).map((element, idx) =>{
                            return <SummaryStat type={"card-cat"} stat={element.sum / element.count} label={"calories"} substat={element.category} key={idx} ></SummaryStat>
                        }):
                        props.activity.map((element, idx) => {
                            return <SummaryStat type={"card-cat"} stat={element.sum / element.count} label={"calories"} substat={element.category} key={idx} ></SummaryStat>
                        })}
                    </div>
                    <h4>Total Calories Per Day</h4>
                    <div className="per-day">
                        {totalCaloriesPerDay.map((element, idx) => {
                            return <SummaryStat key={idx} type={"card-day"}stat={element.totalCaloriesPerDay} label={"calories"} substat={element.date}></SummaryStat>
                        })}
                    </div>
                </div>
        </div>
    )
}

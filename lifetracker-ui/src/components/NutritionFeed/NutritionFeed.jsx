import * as React from "react"
import "./NutritionFeed.css"
import NutritionCard from "../NutritionCard/NutritionCard"

export default function NutritionFeed(props){
    const overview = [
        {id: 1, name : "apple", url : "", calories : 500, quantity: 2, date: "01/11/2000", category: "fruit"},
        {id: 2, name : "milk", url : "", calories : 100, quantity: 3, date: "12/11/2055", category: "dairy"},
        {id: 3, name : "carrot", url : "", calories : 220, quantity: 1, date: "01/16/2023", category: "vegetables"},
        {id: 4, name : "bread", url : "", calories : 660, quantity: 1, date: "01/16/2023", category: "carbs"}
    ]
    // console.log(nut)
    return (
        <div className="nutrition-feed">
            {props.nutrition.map((element, idx) => {
                const date = new Date(element.created_at)
                console.log("dateE", date)
                const enUSFormatter = new Intl.DateTimeFormat('en-US')
                return <NutritionCard key={idx} quantity={element.quantity} imageUrl={element.image_url} name={element.name} calories={element.calories} category={element.category} createdAt={enUSFormatter.format(date)} id={element.id}></NutritionCard>
            })}
        </div>
    )
}
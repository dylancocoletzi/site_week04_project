import * as React from "react"
import "./NutritionForm.css"

export default function NutritionForm(props){
    return (
        <div className="nutrition-form">
            <div className="container">
                <h2>Record Nutrition</h2>
                <br/>
                <div className="inputs">
                    <div className="form-input">
                        <label for="name">Name</label>
                        <input type="text" name="name" placeholder="Nutrition name"/>
                    </div>
                    <div className="form-input">
                        <label for="category">Category</label>
                        <input type="text" name="category" placeholder="Nutrition category"/>
                    </div>
                    <div className="split-form-input">
                        <div className="form-input">
                            <label for="quantity">Quantity</label>
                            <input type="number" name="quantity" min="1" max="10000000000"/>
                        </div>
                        <div className="form-input">
                            <label for="calories">Calories</label>
                            <input type="number" name="calories" min="0" max="1000000000" step="10"/>
                        </div>
                    </div>
                    <div className="form-input">
                        <label for="imageUrl">Image URL</label>
                        <input type="text" name="imageURL" placeholder="http://www.food-image.com/1"/>
                    </div>
                </div>
                <button className="save-btn">Save</button>
            </div>
        </div>
    )
}
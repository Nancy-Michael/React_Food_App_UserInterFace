import { useState } from "react"
import { categories, mealData } from "../data/data"

function Meal() {
    const [foods, setFoods] = useState(mealData);

    const fillterCat = (category) => {
        setFoods(
            mealData.filter((item) => {
                return item.category === category;
            })
        )
    }
    return (
        <div className="meal-content">
            <h1 className="meal-heading">Our Meal</h1>
            <div className="btns-wrapper">
                <button onClick={() => setFoods(mealData)}
                    className="meal-btn">All</button>
                <button onClick={() => fillterCat("pizza")}
                    className="meal-btn">Pizza</button>
                <button onClick={() => fillterCat("chicken")}
                    className="meal-btn">Chicken</button>
                <button onClick={() => fillterCat("salad")}
                    className="meal-btn">Salad</button>
            </div>
            <div className="meals">
                {
                    foods.map((item) => (
                        <div key={item.id} className="each-meal">
                            <img src={item.image} alt={item.name} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '0.5rem' }}>
                                <p style={{ fontWeight: 'bold' }}>{item.name}</p>
                                <p className="meal-price">{item.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Meal

import React, {useState} from 'react';
import Recipe from "./Recipe";

function RecipeList() {
    const initialRecipes = [
        {
            id: "greek-salad",
            name: "Greek Salad",
            ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
        },
        {
            id: "hawaiian-pizza",
            name: "Hawaiian Pizza",
            ingredients: [
                "pizza crust",
                "pizza sauce",
                "mozzarella",
                "ham",
                "pineapple",
            ],
        },
        {
            id: "hummus",
            name: "Hummus",
            ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
        },
    ];
    const [recipes, setRecipes] = useState(initialRecipes);

    const handleRemoveRecipe = (id) => {
        setRecipes((prevRecipes) => prevRecipes.filter(recipe => recipe.id !== id));
    }

    return (
        <>
            <h1>Recipes!🍎 </h1>
            <ul>
                {
                    recipes.map((recipe) => {
                        return (
                            <Recipe
                                key={recipe.id}
                                recipes={recipe}
                                handleRemoveRecipe={handleRemoveRecipe}
                            />
                        )
                    })
                }
            </ul>
        </>
    );
}

export default RecipeList;
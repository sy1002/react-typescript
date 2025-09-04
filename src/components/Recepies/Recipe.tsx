import React from 'react';


interface RecipeType {
    id : string;
    name: string;
    ingredients: string[];
}

interface RecipeProps {
    recipes: RecipeType;
    handleRemoveRecipe: (id: string) => void;
}

function Recipe(props :RecipeProps) {
    
    
    return (
        <>
            <li>
                <h2>{props.recipes.name}</h2>
                <ul>
                    {props.recipes.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <button onClick={() => props.handleRemoveRecipe(props.recipes.id)}>
                    Remove Recipe
                </button>
            </li>
        </>
    );
}

export default Recipe;
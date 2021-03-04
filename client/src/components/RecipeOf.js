import React from 'react'

export const RecipeOf = ({ recipe }) => {
    return (
        <>
            <h2>{recipe.recipename}</h2>

            <p>{recipe.recipetext}</p>
            <p>Дата создания: <strong>{new Date(recipe.date).toLocaleDateString()}</strong></p>
        </>
    )
}
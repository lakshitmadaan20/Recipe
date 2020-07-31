import React, {useState, useEffect} from 'react'
import CardRecipe from './CardRecipe'

export default function SingleRecipe(props) {

    const [recipes, setRecipes] = useState([])

    const response = async () => {
        let response = await fetch('http://starlord.hackerearth.com/recipe')
        let data = await response.json()
        setRecipes(data)
        console.log(data);
    }


    useEffect(() => {
    const recipeId = props.match.params.recipeId
    response()
    loadSingleRecipe(recipeId)
    }, [props])

    const loadSingleRecipe = (recipeId) => {
       recipes.map(recipe => {
        if(recipe.id === recipeId){
            return (
              <CardRecipe recipe={recipe}/>
            )
          }
        })
    }
    return (
        <div>
            {loadSingleRecipe()}
        </div>
    )
}

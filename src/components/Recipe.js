import React, {useState, useEffect, Fragment} from 'react'
import CardRecipe from './CardRecipe'



export default function Recipe() {

    const [recipes, setRecipes] = useState([])

    const response = async () => {
        let response = await fetch('http://starlord.hackerearth.com/recipe')
        let data = await response.json()
        setRecipes(data)
        console.log(data);
    }

    useEffect(() => {
       response()
    }, [])

    return (
        <Fragment>
            {recipes.map(recipe => (
               <div className="col-3 mb-3">
                <CardRecipe  recipe={recipe}/>
              </div>
            ))}
        </Fragment>
    )
}

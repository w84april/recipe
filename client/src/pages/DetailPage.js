import React, { useCallback, useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/Loader'
import {RecipeOf} from '../components/RecipeOf'

export const DetailPage = () => {
  const {token} = useContext(AuthContext)
  const {request, loading} = useHttp()
  const [recipe, setRecipe] = useState(null)
  const recipeId = useParams().id

  const getRecipe = useCallback(async () => {
    try {
      const fetched = await request(`/api/recipe/${recipeId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setRecipe(fetched)
    } catch (e) {
    }
  }, [token, recipeId, request])

  useEffect( () => {
    getRecipe()
  }, [getRecipe])

  if (loading){
    return <Loader />
  }

  return (
    <>
      { !loading && recipe && <RecipeOf recipe={recipe} />}
    </>
  )
}
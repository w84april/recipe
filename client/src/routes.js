import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
import { RecipesPage } from './pages/RecipesPage'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                {/*мб пути поменять надо...*/}
                <Route path="/myrecipes" exact>
                    <RecipesPage />
                </Route>
                <Route path="/newrecipe" exact>
                    <CreatePage />
                </Route>
                <Route path="/r/:id">
                    <DetailPage />
                </Route>

                <Redirect to="/newrecipe" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}
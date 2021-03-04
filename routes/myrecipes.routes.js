const {Router} = require('express')
const Recipe = require('../models/Recipe')
const router = Router()
const auth = require('../middleware/auth.middleware')
const {check, validationResult} = require('express-validator')

router.post(
    '/loadrecipe',
    auth,
    [
        check('recipename', 'Некорректное название рецепта').isLength( {min: 6} ),
        check('recipetext', 'Некорректный текст рецепта').isLength( {min: 6} )
    ],
    async(req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные'
            })
        }

        const {recipename, recipetext} = req.body

        const recipe = new Recipe({
            recipename, recipetext, owner: req.user.userId
        })

        await recipe.save()

        res.status(201).json({ recipe })

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.get('/', auth, async (req, res) => {
    try {
        const recipes = await Recipe.find({ owner: req.user.userId }) 
        res.json(recipes)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.get('/:id', auth, async (res, req) => {
    try {
        const recipe = await Recipe.findById( req.params.id ) 
        res.json(recipe)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router
const express = require('express');
const { getRecipes, addRecipe } = require('../controllers/recipeController');
const { auth } = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, getRecipes);
router.post('/', auth, addRecipe);

module.exports = router;

const auth = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send('Access denied');
    try {
        const verified = jwt.verify(token, 'secret_key');
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('Invalid token');
    }
};

router.post('/', auth, async (req, res) => {
    try {
        const { title, ingredients, instructions } = req.body;
        const recipe = new Recipe({ title, ingredients, instructions, author: req.user.id });
        await recipe.save();
        res.status(201).send('Recipe added');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;

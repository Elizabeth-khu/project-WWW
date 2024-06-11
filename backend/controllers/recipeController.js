const Recipe = require('../models/Recipe');

exports.getRecipes = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const recipes = await Recipe.find()
        .skip((page - 1) * limit)
        .limit(Number(limit));
    res.json(recipes);
};

exports.addRecipe = async (req, res) => {
    const { name, description } = req.body;
    const newRecipe = new Recipe({ name, description });
    await newRecipe.save();
    res.status(201).json(newRecipe);
};

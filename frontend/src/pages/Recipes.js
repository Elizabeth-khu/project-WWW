import React, { useState, useEffect } from 'react';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchRecipes();
    }, [page]);

    const fetchRecipes = async () => {
        const response = await fetch(`/api/recipes?page=${page}`);
        const data = await response.json();
        setRecipes([...recipes, ...data]);
    };

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            setPage(page + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [page]);

    return (
        <div>
            <h1>Recipes</h1>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>
                        <h2>{recipe.name}</h2>
                        <p>{recipe.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recipes;

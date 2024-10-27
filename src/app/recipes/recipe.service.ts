import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Test Recipe 1', 'For testing purposes', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Test Recipe 2', 'For testing purposes', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
    ];   

    // returns a copy of the recipes array, 
    // not a direct reference, using slice
    getRecipes() {
        return this.recipes.slice();
    }
}
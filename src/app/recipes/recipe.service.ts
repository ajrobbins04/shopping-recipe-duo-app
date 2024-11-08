import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Banana Bread', 
            'A family favorite recipe!', 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
            [
                new Ingredient('bananas', 4),
                new Ingredient('sugar', 1),
                new Ingredient('flour', 2)
            ]),
        new Recipe(
            'Vanilla Bean Ice Cream', 
            'Is better than any store-bought brand (truly)', 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
            [
                new Ingredient('milk', 3),
                new Ingredient('vanilla', 1),
                new Ingredient('cream', 2)
            ])
    ];   

    constructor(private slService: ShoppingListService) {}

    // returns a copy of the recipes array, 
    // not a direct reference, using slice
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
      }
    
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
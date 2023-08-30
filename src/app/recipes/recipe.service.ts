import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Parm',
      'Yummy chicken parm',
      'https://www.sipandfeast.com/wp-content/uploads/2021/07/chicken-parmigiana-recipe-snippet.jpg',
      [
        new Ingredient('chicken breast', '1'),
        new Ingredient('mozzarella', '2'),
        new Ingredient('sauce', '3'),
      ]
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }
}

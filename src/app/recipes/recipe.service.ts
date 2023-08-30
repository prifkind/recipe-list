import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Parm',
      'Yummy chicken parm',
      'https://www.sipandfeast.com/wp-content/uploads/2021/07/chicken-parmigiana-recipe-snippet.jpg'
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>()

  getRecipes() {
    return this.recipes.slice();
  }

}

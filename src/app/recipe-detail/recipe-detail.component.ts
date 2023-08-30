import { Component, Input } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetail {
  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {}
  @Input() recipe: Recipe = {
    name: '',
    description: '',
    imagePath: '',
    ingredients: [],
  };

  addToList = (ingredients: Ingredient[]) => {
    for (const ingredient of ingredients) {
      this.shoppingListService.addIngredient(
        ingredient.name,
        ingredient.amount
      );
    }
  };
}

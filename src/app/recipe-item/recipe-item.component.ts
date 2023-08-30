import { Component, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  constructor (private recipeService: RecipeService) {}
  @Input() recipe: Recipe = { name: '', description: '', imagePath: '' };

  recipeClickHandler() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}

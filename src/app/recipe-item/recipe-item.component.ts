import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe = { name: '', description: '', imagePath: '' };
  @Output() recipeEmit: EventEmitter<Recipe> = new EventEmitter();

  recipeClickHandler() {
    this.recipeEmit.emit(this.recipe);
  }
}

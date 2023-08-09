import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter();
  recipes: Recipe[] = [
    new Recipe(
      'Chicken Parm',
      'Yummy chicken parm',
      'https://www.sipandfeast.com/wp-content/uploads/2021/07/chicken-parmigiana-recipe-snippet.jpg'
    ),
  ];

  onRecipeSelect(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

  constructor() {}
  ngOnInit() {}
}

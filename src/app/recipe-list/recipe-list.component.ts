import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter();
  recipes: Recipe[] = [];

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}

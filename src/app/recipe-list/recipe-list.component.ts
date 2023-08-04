import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Chicken Parm',
      'Yummy chicken parm',
      'https://www.sipandfeast.com/wp-content/uploads/2021/07/chicken-parmigiana-recipe-snippet.jpg'
    ),
  ];

  constructor() {}
  ngOnInit() {}
}

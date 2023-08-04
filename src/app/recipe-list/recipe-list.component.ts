import { Component } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    {
      name: 'Chicken Parm',
      description: 'Yummy chicken parm',
      imagePath:
        'https://www.sipandfeast.com/wp-content/uploads/2021/07/chicken-parmigiana-recipe-snippet.jpg',
    },
  ];

  constructor() {}
  ngOnInit() {}
}

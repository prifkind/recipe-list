import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients = [
    new Ingredient('chicken breast', '1'),
    new Ingredient('mozzarella', '2'),
    new Ingredient('sauce', '3'),
  ];

  addIngredients(ingredient: Ingredient): void {
    this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));

    console.log(this.ingredients);
  }

  constructor() {}
  ngOnInit(): void {}
}

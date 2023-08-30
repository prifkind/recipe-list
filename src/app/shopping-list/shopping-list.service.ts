import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  constructor() {}

  private ingredients: Ingredient[] = [
    new Ingredient('chicken breast', '1'),
    new Ingredient('mozzarella', '2'),
    new Ingredient('sauce', '3'),
  ];

  getIngredients = (): Ingredient[] => {
    return this.ingredients.slice();
  };

  addIngredient = (name: string, amount: string) => {
    const ingredient = new Ingredient(name, amount);
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(ingredient);
  };

  ingredientAdded = new Subject<Ingredient>();
}

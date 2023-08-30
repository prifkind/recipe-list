import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  ingredients: Ingredient[] = [];
  private ingredientAddedSubscription!: Subscription;

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientAdded.subscribe(
      (ingredient: Ingredient) => {
        this.ingredients = [...this.ingredients, ingredient];
      }
    );
  }

  ngOnDestroy(): void {
    this.ingredientAddedSubscription.unsubscribe();
  }
}

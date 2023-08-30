import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent  {
  constructor (private shoppingListService: ShoppingListService) {}
  @ViewChild('nameInput', { static: true }) ingredientNameRef!: ElementRef;
  @ViewChild('amountInput', { static: true }) ingredientAmountRef!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddIngredients() {
    const ingredientName = this.ingredientNameRef.nativeElement.value;
    const ingredientAmount = this.ingredientAmountRef.nativeElement.value;
    this.shoppingListService.addIngredient(ingredientName, ingredientAmount)
  }
}

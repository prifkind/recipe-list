import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent  {
  @ViewChild('nameInput', { static: true }) ingredientNameRef!: ElementRef;
  @ViewChild('amountInput', { static: true }) ingredientAmountRef!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddIngredients() {
    const ingredientName = this.ingredientNameRef.nativeElement.value;
    const ingredientAmount = this.ingredientAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount)
    this.ingredientAdded.emit(newIngredient)
  }
}

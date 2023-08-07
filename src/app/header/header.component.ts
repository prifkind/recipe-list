import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showRecipes: boolean = true;
  showShoppingList: boolean = false;

  @Output() showRecipesEmitter: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() showShoppingListEmitter: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  handleShowRecipes() {
    this.showRecipes = !this.showRecipes;
    this.showRecipesEmitter.emit(this.showRecipes);
  }

  handleShowShoppingList() {
    this.showShoppingList = !this.showShoppingList;
    this.showShoppingListEmitter.emit(this.showShoppingList);
  }
}

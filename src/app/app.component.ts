import { Component } from '@angular/core';
import categoriesData from '../../data/menu'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template : '<app-category [childMessage]="category1"></app-category>
  // ',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories;
constructor() {
  this.categories = categoriesData["categories"]
}



}

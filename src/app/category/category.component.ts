import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
name : any
products : any;
@Input() data;
@Output() messageEvent = new EventEmitter<string>();
  constructor() {
   }

  ngOnInit() {
    this.name = this.data.name;
    this.products = this.data.products;
  }

modo(p){
  this.messageEvent.emit(p);
}

}

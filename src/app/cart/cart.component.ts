import { Component, OnInit, Input } from '@angular/core';
import categoriesData from '../../../data/menu'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
categories;
prix = 0;
items = [];
  command = [];
  @Input() selectedItem : any;
  constructor() {
  this.categories = categoriesData["categories"]
 }

  ngOnInit() {
  }

  findPrice(obj, item, cb){
    Object.keys(obj).forEach(key => {
      if(obj && obj[key].name == item){
        cb(obj[key].price)
      }
      if(obj && obj[key].name != item){
        //console.log('objlkslkn')
        if(typeof obj[key] == 'object'){
          this.findPrice(obj[key], item, cb)
        }
      }
    })
  }

  momo(item){
    let s = this.items.find(i => i['item'] === item)
    let index = this.items.findIndex(i => i['item'] === item)

    this.findPrice(categoriesData.categories, item, (price) => {
      if (index && index>-1)
        this.items[index].price = price;

      if(this.items.length == 0){
        index = 0
        this.items = [{
            item,
            occurence: 1,
            price
          }]
          return
      }
     if (!s) {
      this.items = [...this.items, {
        item,
        occurence: 1,
        price
      }]
      index = this.items.length
    }
      else if (s) {
        this.items[index]['occurence'] = this.items[index]['occurence'] + 1
      }
    })
    this.calculatePrice();
}


calculatePrice(){
this.prix = 0;
var j
for (j = 0; j < this.items.length; j++) {
this.prix = this.prix + this.items[j].price * this.items[j].occurence;
}
}

}

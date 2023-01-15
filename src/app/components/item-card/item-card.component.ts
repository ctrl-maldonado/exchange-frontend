import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/items/item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  text = "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.";

  @Input() item:Item;

  constructor() { }

  ngOnInit() {
  }

  nameFunction(item){
    //console.log("hit");
    let name = item.itemName;
    if (name.includes("ü")) {
      name = name.replace("ü", "ue");
    } else if (name.includes("ä")) {
      name = name.replace("ä", "ae");
    } else if (name.includes("ö")) {
      name = name.replace("ö", "oe");
    }

    return name;
  }
}

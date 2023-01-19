import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/items/item';
import { ItemService } from 'src/app/items/item.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  item:Item;

  constructor(private router: Router, private itemService:ItemService) { }

  ngOnInit(): void {
    console.log(this.router.url);
    this.getItemById();
  }

  getItemById(){
    var id = /[^/]*$/.exec(this.router.url)[0];
    console.log(id);
    this.getByItemId(id).subscribe(res => {
      this.item = res;
    })
  }

  getByItemId(id): Observable<Item>{
    return this.itemService.getItemById(id);
  }

  nameFunction(item) {
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

  getDate(){
    const dateInMil = this.item.date;
    const date = (new Date(dateInMil)).toLocaleDateString();
    return date;
  }
}

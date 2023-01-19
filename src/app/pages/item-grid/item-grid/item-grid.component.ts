import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/items/item';
import { ItemService } from 'src/app/items/item.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/users/user';

@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.css']
})

@Injectable({
  providedIn: "root"
})

export class ItemGridComponent implements OnInit {

  public items: Item[];

  constructor(private itemService: ItemService, private user: AuthService, private router: Router) { }

  ngOnInit() {
    //console.log(this.router.url);
    if (this.router.url === "/itemGrid") {
      this.getItems().subscribe(res => {
        this.items = res;
      });
    } else if (this.router.url === "/itemGrid/1") {
      this.getItemsByCategory(1).subscribe(res => {
        this.items = res;
      });
    } else if (this.router.url === "/itemGrid/2") {
      this.getItemsByCategory(2).subscribe(res => {
        this.items = res;
      });
    } else if (this.router.url === "/itemGrid/3") {
      this.getItemsByCategory(3).subscribe(res => {
        this.items = res;
      });
    }
  }

  getItems(): Observable<Item[]> {
    return this.itemService.getItems();
  }

  getItemsByCategory(num): Observable<Item[]> {
    return this.itemService.getItemsByCategory(num);
  }

  updateItems(items) {
    this.items = items;

  }
}

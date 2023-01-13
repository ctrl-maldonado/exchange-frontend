import { Component, OnInit } from '@angular/core';
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
export class ItemGridComponent implements OnInit {

  public items: Item[];

  constructor(private itemService:ItemService, private user:AuthService) { }

  ngOnInit() {
    this.getItems().subscribe(res => {
      this.items = res;
    });
  }

  getItems(): Observable<Item[]>{
    return this.itemService.getItems();
  }
}

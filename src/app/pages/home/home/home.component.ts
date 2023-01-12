import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/items/item';
import { User } from 'src/app/users/user';
import { ItemService } from 'src/app/items/item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public items: Item[];

  constructor(private itemService:ItemService) { }

  ngOnInit() {
    this.getItems().subscribe(res => {
      this.items = res;
    });
  }

  getItems(): Observable<Item[]>{
    return this.itemService.getItems();
  }
}

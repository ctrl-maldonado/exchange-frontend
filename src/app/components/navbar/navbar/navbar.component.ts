import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/items/item';
import { ItemService } from 'src/app/items/item.service';
import { ItemGridComponent } from 'src/app/pages/item-grid/item-grid/item-grid.component';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/users/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navUser: User;
  items: Item[];
  newItems: Item[];
  constructor(public user: AuthService, private router: Router, private itemService: ItemService, private itemGrid: ItemGridComponent) { }

  ngOnInit() {
    this.navUser = JSON.parse(window.sessionStorage.getItem('loggedInUser'));
  }

  logout() {
    window.sessionStorage.clear();
    this.router.navigateByUrl('/home');
  }

  login() {
    this.router.navigateByUrl('/login')
  }

  search(event) {
    console.log(event.target.value);
    let itemArr = new Array();

    this.items.forEach(item => {
      if (event.target.value !== '') {
        if (item.itemName.startsWith(event.target.value)) {
          itemArr.push(item);
          //this.newItems.push(item);
        }
      }
    })
    if (itemArr.length != 0) {
      this.newItems = itemArr;
    } else {
      this.newItems = this.items;
    }

    console.log(this.newItems);
    this.itemGrid.updateItems(this.newItems);
  }

  fetchData() {
    console.log(this.router.url);
    
    if (this.router.url.includes("/itemGrid/")) {
      let categoryNum = this.router.url.substring(this.router.url.length - 1);
      this.itemService.getItemsByCategory(categoryNum).subscribe(res => {
        this.items = res;
        console.log(this.items);
      });
    } else {
      this.itemService.getItems().subscribe(res => {
        this.items = res;
        console.log(this.items);
      });
    }
    
  }

  inItemGrid() {
    if (this.router.url.includes("itemGrid")) {
      return true;
    }
  }
}

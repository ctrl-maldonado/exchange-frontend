import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/items/item';
import { User } from 'src/app/users/user';
import { ItemService } from 'src/app/items/item.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Category } from 'src/app/categories/category';
import { CategoryService } from 'src/app/categories/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public items: Item[];
  public categories: Category[]
  public loggedInUser: User;
  constructor(private itemService:ItemService, private user:AuthService, private categoryService:CategoryService, private router:Router) { }

  ngOnInit() {
    this.getItems().subscribe(res => {
      this.items = res;
    });

    this.getCategories().subscribe(res => {
      this.categories = res;
    })
    //this.loggedInUser = this.user.loggedInUser;
    //console.log(this.loggedInUser);
  }

  getCategories(): Observable<Category[]>{
    return this.categoryService.getCategories();
  }

  getItems(): Observable<Item[]>{
    return this.itemService.getItems();
  }

  goToAll(){
    this.router.navigateByUrl('/itemGrid');
  }
}

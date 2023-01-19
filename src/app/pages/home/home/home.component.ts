import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/items/item';
import { User } from 'src/app/users/user';
import { ItemService } from 'src/app/items/item.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Category } from 'src/app/categories/category';
import { CategoryService } from 'src/app/categories/category.service';
import { ItemGridComponent } from '../../item-grid/item-grid/item-grid.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public items: Item[];
  public categories: Category[]
  public loggedInUser: User;

  constructor(private itemService:ItemService, private user:AuthService, private itemGrid:ItemGridComponent, private categoryService:CategoryService, private router:Router) { }

  ngOnInit() {

    this.getCategories().subscribe(res => {
      this.categories = res;
    });
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

  goToElektronik(){
    this.router.navigate(['/itemGrid/1']);
  }

  goToHaushalt(){
    this.router.navigate(['/itemGrid/2']);
  }

  goToKleidung(){
    this.router.navigate(['/itemGrid/3']);
  }
}

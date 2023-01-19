import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NgbModule } from 'node_modules/@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { ItemCardComponent } from '../components/item-card/item-card.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule }from '@angular/material/input';
import { ItemGridComponent } from './item-grid/item-grid/item-grid.component';
import { ItemPageComponent } from './item-page/item-page/item-page.component';


@NgModule({
  declarations: [HomeComponent, LoginComponent, ItemGridComponent, ItemPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
    // FontAwesomeModule
  ],
  exports: [HomeComponent, LoginComponent, ItemGridComponent, ItemPageComponent]
})
export class PagesModule { }

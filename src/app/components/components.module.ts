import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NgbModule } from 'node_modules/@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ItemCardComponent } from './item-card/item-card.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule }from '@angular/material/input';
import { RouterModule } from '@angular/router';

// import { AlertModule } from './_alert/alert.module';


@NgModule({
  declarations: [ItemCardComponent, NavbarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule
  ],
  exports: [ItemCardComponent, NavbarComponent]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { ItemGridComponent } from './pages/item-grid/item-grid/item-grid.component';
import { LoginComponent } from './pages/login/login/login.component';


export const routes: Routes = [
    { path:'login', component: LoginComponent },
    { path:'itemGrid', component: ItemGridComponent },
    { path:'itemGrid/:categoryId', component: ItemGridComponent },
    { path: "", component: HomeComponent },
    { path:"**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy',
    onSameUrlNavigation: 'reload'
   })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

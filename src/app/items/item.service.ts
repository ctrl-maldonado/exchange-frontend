import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiServerUrl}/items`)
  }
  
  public getItemsByCategory(num) {
    console.log(`${this.apiServerUrl}/item/${num}`)
    return this.http.get<Item[]>(`${this.apiServerUrl}/item/${num}`)
  }

  public getItemById(num) {
    console.log(`${this.apiServerUrl}/findByItemId/${num}`);
    return this.http.get<Item>(`${this.apiServerUrl}/findByItemId/${num}`);
  }
}

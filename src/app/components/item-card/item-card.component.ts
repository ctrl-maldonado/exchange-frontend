import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/items/item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() item:Item;

  constructor() { }

  ngOnInit() {
  }

}

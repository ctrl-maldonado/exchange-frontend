import { Item } from "../items/item";

export interface Category {
    categoryId:number;
    categoryName:string;
    items:Array<Item>;
}
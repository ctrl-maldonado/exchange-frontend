import { Item } from "../items/item";

export interface User {
    userId: number;
    userName: string;
    address: string;
    mail: string;
    rating: number;
    itemList: Array<Item>
    savedItems: Array<Item>
}
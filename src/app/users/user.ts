import { Item } from "../items/item";

export interface User {
    userId: number;
    userName: string;
    address: string;
    mail: string;
    rating: number;
    password: string;
    token: string;
    email: string;
    itemList: Array<Item>;
    savedItems: Array<Item>;
}
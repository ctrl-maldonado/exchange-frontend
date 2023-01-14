import { User } from "../users/user";

export interface Item {
    itemId: number;
    itemName: string;
    user: User;
    userSaved: User;
    description: string;
    color: string;
    brand: string;
    date: number;
    //category: Category;
}
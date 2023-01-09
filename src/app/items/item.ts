import { User } from "../users/user";

export interface Item {
    itemId: number;
    itemName: string;
    user: User;
    userSaved: User;
    //category: Category;
}
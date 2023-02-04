import { Injectable } from "@nestjs/common";
import { User, UserListItem } from "./user";
import USER_DATA from './user-data';

@Injectable()
export class UsersService {

    async getAllUsers(): Promise<UserListItem[]> {
        return Promise.resolve(
            USER_DATA.map(user => {
                const { description, ...userListItemFields} = user;

                return userListItemFields;
            })
        );
    }

    async getUserDetailById(id: string): Promise<User | null> {
        return Promise.resolve(
            USER_DATA.find(user => user.id === id) ?? null
        );
    }
}

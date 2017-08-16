import { Injectable } from '@angular/core'
import { IUser } from '../models/UserModel'

@Injectable()

export class UserLoginService {
    currentUser: IUser;
    AuthenticateUser(userName: string, password: string) {
        this.currentUser = {
            firstName: "Waleed",
            secondName: "Hammad"
        }
    }
    IsAuthenticated() {
        return !!this.currentUser;
    }

    UpdateUser(firstName: string, secondName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.secondName = secondName;
    }
}
import {Component}  from '@angular/core'
import {IUser} from './models/UserModel'
import {UserLoginService} from './services/userlogin'
import {Router} from '@angular/router'
@Component({
    templateUrl:'app/User/UserLogin.html',
})

export class UserLogin{
    /**
     *
     */
    constructor(private userloginService:UserLoginService, private router:Router) {
        
    }

    SubmitForm(formVales){
        this.userloginService.AuthenticateUser(formVales.userName,formVales.password);
        this.router.navigate(["/events"]);
    }
    cancel(){
        this.router.navigate(["/events"]);
        
    }
}
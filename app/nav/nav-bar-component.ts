import {Component} from '@angular/core'
import {UserLoginService} from '../User/services/userlogin'
@Component({
    selector:'nav-bar',
    templateUrl:'app/nav/navbar.html', 
    styles:[`
        li>a.active{color:red;}
    `]
})
export class NavBar{
    /**
     *
     */
    constructor(private auth:UserLoginService) {
        
        
    }
}
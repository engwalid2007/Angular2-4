import {Component} from '@angular/core'

@Component({
    selector:'nav-bar',
    templateUrl:'app/nav/navbar.html', 
    styles:[`
        li>a.active{color:red;}
    `]
})
export class NavBar{}
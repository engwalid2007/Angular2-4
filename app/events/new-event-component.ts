import {Component } from '@angular/core'
import {Router} from '@angular/router'
@Component({
    templateUrl:'app/events/NewEvent.html'
})
export class NewEvent{
    /**
     *
     */
    constructor(private router:Router) {
        
        
    }
    cancel(){
        this.router.navigate(["/events"])
    }
}
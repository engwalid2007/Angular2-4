import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { EventService } from './eventService'
@Injectable()

export class ValidateEventIsExist implements CanActivate {

    /**
     *
     */
    constructor(private eventService: EventService, private router: Router) {


    }
    canActivate(route: ActivatedRouteSnapshot) {
        const isEventExist = !!this.eventService.getEvent(+route.params["id"]);
        if (isEventExist)
            return true;
        else {
            this.router.navigate(["/error404"]);
        }
    }

}
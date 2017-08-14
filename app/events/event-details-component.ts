import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/eventService'
import {ActivatedRoute} from '@angular/router'

@Component({
    templateUrl: 'app/events/eventDetails.html'
})

export class Eventdetails {

    ngOnInit(): void {
        this.event = this.eventSerice.getEvent(+this.route.snapshot.params["id"]);
    }

    constructor(private eventSerice: EventService,private route:ActivatedRoute) { }
    event: any;
}
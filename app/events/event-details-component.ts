import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/eventService'

@Component({
    templateUrl: 'app/events/eventDetails.html'
})

export class Eventdetails {

    ngOnInit(): void {
        this.event = this.eventSerice.getEvent(1);
    }

    constructor(private eventSerice: EventService) { }
    event: any;
}
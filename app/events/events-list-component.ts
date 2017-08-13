import { Component, OnInit } from '@angular/core'
import { EventService } from './Shared/eventService'

@Component({
  selector: 'event-list',
  templateUrl: 'app/events/eventlist.html',

})
export class EventsListComponent implements OnInit {

  constructor(private eventService: EventService) {

  }
  events: any;
  handleEvent(data): void {
    console.log(data);
  }
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
}
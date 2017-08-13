import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/eventService'
@Component({
  selector: 'event-list',
  templateUrl: 'app/events/eventlist.html',

})
export class EventsListComponent implements OnInit {
  constructor(private eventService: EventService) { }
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  events: any;
  handleEvent(data): void {
    console.log(data);
  }
}
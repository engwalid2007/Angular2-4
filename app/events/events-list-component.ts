import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/eventService'
import { ToastrService } from './shared/toastrService'


@Component({
  selector: 'event-list',
  templateUrl: 'app/events/eventlist.html',

})
export class EventsListComponent implements OnInit {
  constructor(private eventService: EventService,private toasterService:ToastrService) { }
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  events: any;
  handleEvent(data): void {
    console.log(data);
  }
  handleClick(message:string){
    this.toasterService.DisplaySuccess(message);
  }
}
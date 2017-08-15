import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/eventService'
import { ToastrService } from './shared/toastrService'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'event-list',
  templateUrl: 'app/events/eventlist.html',

})
export class EventsListComponent implements OnInit {
  constructor(private eventService: EventService,private toasterService:ToastrService,private route:ActivatedRoute) { }
  ngOnInit(): void {
    //  this.eventService.getEvents().subscribe(e=>{this.events=e});
    this.events = this.route.snapshot.data["events"]
  }

  events: any;
  handleEvent(data): void {
    console.log(data);
  }
  handleClick(message:string){
    this.toasterService.DisplaySuccess(message);
  }
}
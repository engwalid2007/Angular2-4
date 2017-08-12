import { Component } from '@angular/core'

@Component({
    selector: 'event-list',
    templateUrl: 'app/events/eventlist.html'
})
export class EventsListComponent {
    event = {
        name: 'Test Event',
        date: '12/8/2017',
        time: '11:46 PM',
        price: '20',
        location: {
            city: 'Arriyadh',
            country: 'Saudi Arabia',
            address: 'Almalaz'
        }
    }
}
import { Routes } from '@angular/router'
import { Eventdetails } from './event-details-component'
import { EventsListComponent } from './events-list-component'
import { NewEvent } from './new-event-component'
import { Error404 } from '../errors/error-404-component'
import { ValidateEventIsExist } from './shared/validateEventIsExistService'
import { EventListResolver } from './shared/event-list-resolver-service'
export const appRoutes: Routes = [
    { path: 'events/new', component: NewEvent, canDeactivate: ['CanDeactivate'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/:id', component: Eventdetails, canActivate: [ValidateEventIsExist] },
    { path: 'error404', component: Error404 },
    { path: '', redirectTo: 'events', pathMatch: 'full' }
]

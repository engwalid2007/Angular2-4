import {Routes} from '@angular/router'
import {Eventdetails} from './event-details-component' 
import {EventsListComponent} from './events-list-component'
import {NewEvent} from './new-event-component'


export const appRoutes:Routes=[
    {path:'events/new',component:NewEvent},
    {path:'events',component:EventsListComponent},
    {path:'events/:id',component:Eventdetails},
    {path:'',redirectTo:'events',pathMatch:'full'}
]
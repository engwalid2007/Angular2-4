import {Routes} from '@angular/router'
import {Eventdetails} from './event-details-component' 
import {EventsListComponent} from './events-list-component'
export const appRoutes:Routes=[
    {path:'events',component:EventsListComponent},
    {path:'events/:id',component:Eventdetails},
    {path:'',redirectTo:'events',pathMatch:'full'}
]
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app-component.js'
import { EventsListComponent } from './events/events-list-component.js'
import { EventThumbnail } from './events/event-thumbnail-component'
import { NavBar } from './nav/nav-bar-component'
import { EventService } from './events/shared/eventService'
import { ToastrService } from './events/shared/toastrService'
import { Eventdetails } from './events/event-details-component'
import { appRoutes } from './events/rotes'
@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnail,
        NavBar,
        Eventdetails
    ],
    providers: [EventService, ToastrService],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }
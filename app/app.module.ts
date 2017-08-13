import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app-component.js'
import { EventsListComponent } from './events/events-list-component.js'
import { EventThumbnail } from './events/event-thumbnail-component'
import { NavBar } from './nav/nav-bar-component'
@NgModule({
    imports: [BrowserModule],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnail,
        NavBar
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }
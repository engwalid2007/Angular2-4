import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {EventsAppComponent} from './events-app-component.js'
import{EventsListComponent} from './events/events-list-component.js'
import {EventThumbnail} from './events/event-thumbnail-component'
@NgModule({
    imports:[BrowserModule],
    declarations:[EventsAppComponent,EventsListComponent,EventThumbnail],
    bootstrap:[EventsAppComponent]
})
export class AppModule{}
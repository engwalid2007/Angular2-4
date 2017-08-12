import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {EventsAppComponent} from './events-app-component.js'
import{EventsListComponent} from './events/events-list-component.js'
@NgModule({
    imports:[BrowserModule],
    declarations:[EventsAppComponent,EventsListComponent],
    bootstrap:[EventsAppComponent,EventsListComponent]
})
export class AppModule{}
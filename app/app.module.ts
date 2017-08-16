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
import {NewEvent} from './events/new-event-component'
import {Error404} from './errors/error-404-component'
import {ValidateEventIsExist} from './events/shared/validateEventIsExistService'
import {EventListResolver} from './events/shared/event-list-resolver-service'
import { UserLoginService } from './User/services/userlogin'
@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnail,
        NavBar,
        Eventdetails,
        NewEvent,
        Error404
    ],
    providers: [
        EventService, 
        ToastrService,
        ValidateEventIsExist,
        EventListResolver,
        UserLoginService,
    {
     provide:'CanDeactivate',
     useValue: CheckDirty   
    }],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }
function CheckDirty(component:NewEvent){
    if(component.isDirty){
        return window.confirm('Do you want to leave this page');
    }
    return true;
}
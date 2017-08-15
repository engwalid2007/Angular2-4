import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {ProfileComponent} from './user-profile-component'
import {userRouts} from './user-routes'
@NgModule({
    imports:[CommonModule,RouterModule.forChild(userRouts)],
    declarations:[ProfileComponent],
    providers:[],
    
})
export class UserModule{}
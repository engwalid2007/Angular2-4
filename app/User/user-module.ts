import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { ProfileComponent } from './user-profile-component'
import { userRouts } from './user-routes'
import { UserLogin } from './userlogin-component'

@NgModule({
    imports: [CommonModule,ReactiveFormsModule,FormsModule, RouterModule.forChild(userRouts)],
    declarations: [ProfileComponent, UserLogin],
    providers: [],

})
export class UserModule { }
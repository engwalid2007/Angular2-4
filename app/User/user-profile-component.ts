import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import {Router} from '@angular/router'
import { UserLoginService } from './services/userlogin'

@Component({
  templateUrl: 'app/User/UserProfile.html',
})
export class ProfileComponent implements OnInit {

  /**
   *
   */
  profileForm: FormGroup;

  constructor(private userLoginService: UserLoginService,private router:Router) {

  }

  ngOnInit(): void {
    let firstName= new FormControl(this.userLoginService.currentUser.firstName);
    let secondName=new FormControl(this.userLoginService.currentUser.secondName);

    this.profileForm = new FormGroup({
      firstName: firstName,
      secondName: secondName
    })
  }

  SaveUser(profile){
    this.userLoginService.UpdateUser(profile.firstName,profile.secondName);
    
    this.router.navigate(['/events']);
  }
  cancel(){
    this.router.navigate(['/events']);    
  }

}
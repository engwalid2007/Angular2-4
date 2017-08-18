import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { UserLoginService } from './services/userlogin'

@Component({
  templateUrl: 'app/User/UserProfile.html',
  styles: [`
    em{float:right;color:#E05C65;padding-left:10px}
    .error input{background-color:#E3C3C5;}
    .error::-webkit-input-placeholder{color:#999;}
    .error::-moz-placeholder{color:#999;}
    .error:-moz-placeholder{color:#999;}
    .error:-ms-input-placeholder{color:#999;}
  `

  ]
})
export class ProfileComponent implements OnInit {
  private firstName = new FormControl();
  private secondName = new FormControl();
  /**
   *
   */
  profileForm: FormGroup;

  constructor(private userLoginService: UserLoginService, private router: Router) {

  }

  ngOnInit(): void {
    this.firstName = new FormControl(this.userLoginService.currentUser.firstName, Validators.required);
    this.secondName = new FormControl(this.userLoginService.currentUser.secondName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      secondName: this.secondName
    })
  }

  SaveUser(profile) {
    if (this.profileForm.valid) {
      this.userLoginService.UpdateUser(profile.firstName, profile.secondName);


      this.router.navigate(['/events']);
    }
  }
  cancel() {
    this.router.navigate(['/events']);
  }

  validateFirstName(){
    return this.firstName.dirty && !this.firstName.valid;
  }
  validateSecondName(){
    return this.secondName.dirty && !this.secondName.valid;
  }

}
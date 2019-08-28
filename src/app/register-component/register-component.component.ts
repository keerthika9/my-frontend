import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  public userName: any = '';
  public password: any = '';
  private user: SocialUser;
  private loggedIn: boolean;
  private loginStatus: boolean = true;
  loginForm: FormGroup;
  signUpForm: FormGroup;
  submitted1 = false;
  submitted2 = false;

  constructor(private userService: UserserviceService,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      userid: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  changeLoginStatus() {
    this.router.navigate(['/']);
  }

  saveUser() {
    // console.log(this.userName, this.password);
    this.submitted2 = true;
    if (this.signUpForm.valid) {
      this.userService.saveUser(this.userName, this.password).subscribe(
        response => {
          // console.log(response);
          if (response) {
            this.router.navigate(['homepage']);
          }
        },
        err => {
          console.log(err);
        }
      );
    } else {

    }
  }

}

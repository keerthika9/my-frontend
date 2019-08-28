import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userName: any = '';
  public password: any = '';

  private user: SocialUser;
  private loggedIn: boolean;
  private loginStatus: boolean = true;
  loginForm: FormGroup;
  signUpForm: FormGroup;
  submitted1 = false;
  submitted2 = false;

  constructor(
    private userService: UserserviceService,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });

    // this.signUpForm = this.formBuilder.group({
    //   firstname: ['', Validators.required],
    //   lastname: ['', Validators.required],
    //   username: ['', Validators.required],
    //   userid: ['', Validators.required],
    //   password: ['', Validators.required],
    //   mobile: ['', Validators.required],
    //   date: ['', Validators.required]
    // });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
      // console.log(user);
      this.user = user;
      this.loggedIn = user != null;
      if (this.loggedIn) {
        this.router.navigate(['homepage']);
      }
    });
  }

  changeLoginStatus() {
    this.router.navigate(['/register']);
  }

  signOut(): void {
    this.authService.signOut();
  }
  login() {
    this.submitted1 = true;
    if (this.loginForm.valid) {
      this.userService.login(this.userName, this.password).subscribe(response => {
        // console.log(response);
        if (response) {
          // console.log(response);
          this.router.navigate(['homepage']);
        }
      });
    } else {
      console.log(this.loginForm);
    }
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

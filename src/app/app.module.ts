import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponentComponent } from './register-component/register-component.component';

const config = new AuthServiceConfig([
   {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
         '1081501418390-bl2nvde2qposrhgnrnegfknkk2cicf7g.apps.googleusercontent.com'
      )
   }
]);

export function provideConfig() {
   return config;
}

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      HomepageComponent,
      ProfileComponent,
      RegisterComponentComponent
   ],
   imports: [
      BrowserAnimationsModule,
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      SocialLoginModule,
      HttpClientModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatCheckboxModule,
      MatDatepickerModule,
      MatNativeDateModule
   ],
   providers: [
      {
         provide: AuthServiceConfig,
         useFactory: provideConfig
      }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

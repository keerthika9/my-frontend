import { RegisterComponentComponent } from './register-component/register-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: '', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },{path: 'register', component: RegisterComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents = [HomepageComponent]

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes=[
  { path: '', component:LoginComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomepageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

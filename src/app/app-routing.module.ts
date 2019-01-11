import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecureLoginComponent } from './secure-login/secure-login.component';
import { SecureLoginGuard } from './guards/secure-login.guard';

const routes: Routes = [
  { path: 'home', 
  component: HomeComponent,
  canActivate: [SecureLoginGuard]
  },
  { path: 'login', component: SecureLoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

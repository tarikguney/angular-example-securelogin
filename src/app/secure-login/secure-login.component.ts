import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../services/user-session.service';
import { IUserModel } from '../Models/IUserModel';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './secure-login.component.html',
  styleUrls: ['./secure-login.component.css']
})
export class SecureLoginComponent implements OnInit {

  users: IUserModel[];
  errorMessage: string;
  userName: string = "";
  password: string = "";
  verdict: boolean;
  subscribe: Subscription;

  constructor(private session: UserSessionService, private router: Router) { 
    this.session.GetAllUsers().subscribe(
      p => this.users = p,
      error => this.errorMessage = <any>error);
  }

  ngOnInit() {    
  }

  onSubmit(): void {
        let stream1 = this.filterUsername();
        this.verdict = this.filterByPassword(stream1[0]);
        
        this.session.SetUserSession(this.verdict);

        if (this.verdict){
          console.log('I should route you to home');
          this.router.navigate(["/home"]);
        } else {
          this.errorMessage = "Check your user name and password";
        }
  }

  onCancel(): void {
    this.subscribe.unsubscribe();
  }

  filterUsername(): IUserModel[] {
    return this.users.filter((user: IUserModel) =>
    user.userName.toLocaleLowerCase().indexOf(this.userName.toLocaleLowerCase()) !== -1);
  }

  filterByPassword(stream: IUserModel): boolean {
    return stream.password === this.password;
  }

}

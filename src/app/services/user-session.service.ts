import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { IUserModel } from '../Models/IUserModel';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  private url = 'assets/users.json';
  validSession: boolean;

  constructor(private http: HttpClient) { }

  GetAllUsers(): Observable<IUserModel[]> {
    return this.http.get<IUserModel[]>(this.url).pipe(
      tap(data => console.log('Users: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

 private handleError(err: HttpErrorResponse)
 {
   let errorMessage = '';

   if (err.error instanceof ErrorEvent) {
      // Client side Error Occurred
      errorMessage = `An error occurred: ${err.error.message}`;
   } else {
     errorMessage = `Server returned error: ${err.status}, error message is ${err.message}`;
   }

   console.log(errorMessage);
   return throwError(errorMessage);
 }

 SetUserSession(verdict: boolean): void {
   this.validSession = verdict;
 }

 IsValidSession(): boolean {
   return this.validSession;
 }

}

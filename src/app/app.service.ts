import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendResponse, Expense, User } from './app.module';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  getLoginStatus(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  setLoginStatus(status: boolean): void {
    this.isLoggedInSubject.next(status);
  }

  verifyLogin(data: User): Observable<BackendResponse> {
    return this.http.post<BackendResponse>('http://localhost:3000/api/users/login', data, { withCredentials: true });
  }

  signup(data: User): Observable<BackendResponse> {
    return this.http.post<BackendResponse>('http://localhost:3000/api/users/signup', data, { withCredentials: true });
  }

  getExpenses():Observable<BackendResponse>{
    return this.http.get<BackendResponse>('http://localhost:3000/api/expenses/all',{withCredentials:true});
  }

  postExpenses(data: Expense):Observable<BackendResponse>{
    return this.http.post<BackendResponse>('http://localhost:3000/api/expenses/create', data, {withCredentials:true})
  }

  logout():Observable<BackendResponse>{
    return this.http.get<BackendResponse>('http://localhost:3000/api/users/logout', {withCredentials:true})
  }
}
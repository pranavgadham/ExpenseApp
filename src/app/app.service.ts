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
    return this.http.post<BackendResponse>('https://expensetracker2-cxkt.onrender.com/api/users/login', data, { withCredentials: true });
  }

  signup(data: User): Observable<BackendResponse> {
    return this.http.post<BackendResponse>('https://expensetracker2-cxkt.onrender.com/api/users/signup', data, { withCredentials: true });
  }

  getExpenses(url: string):Observable<BackendResponse>{
    return this.http.get<BackendResponse>(url,{withCredentials:true});
  }

  postExpenses(data: Expense):Observable<BackendResponse>{
    return this.http.post<BackendResponse>('https://expensetracker2-cxkt.onrender.com/api/expenses/create', data, {withCredentials:true})
  }

  logout():Observable<BackendResponse>{
    return this.http.get<BackendResponse>('https://expensetracker2-cxkt.onrender.com/api/users/logout', {withCredentials:true})
  }
}
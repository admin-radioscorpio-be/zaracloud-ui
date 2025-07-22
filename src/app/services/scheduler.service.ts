import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { SchedulerResponse } from '../models/event.model';


@Injectable({
  providedIn: 'root',
})
export class SchedulerService {
  private apiUrl = '/api/scheduler/status'; // Replace with actual API URL

  private authRedirectUrl = '/api/login'; // Replace with your authentication URL

  constructor(private http: HttpClient, private router: Router) {}

  getSchedulerData(): Observable<SchedulerResponse> {
    return this.http
      .get<SchedulerResponse>(this.apiUrl)
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401) {
      console.warn('Unauthorized (401) - Redirecting to login...');
      window.location.href = this.authRedirectUrl; // Redirect to authentication page
    }
    return throwError(() => new Error(error.message));
  }
}

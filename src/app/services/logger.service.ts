import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Track } from '../models/track.model';


@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private apiUrl = '/api/tracklogger/status'; // Replace with actual API URL

  private authRedirectUrl = '/api/login'; // Replace with your authentication URL

  constructor(private http: HttpClient, private router: Router) {}

  getLoggerData(logDate?: string): Observable<Track[]> {

    const body = logDate ? { logdate: logDate } : {}; // Only include logdate if it's provided

    return this.http
    .post<Track[]>(this.apiUrl, body) // Change GET to POST
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

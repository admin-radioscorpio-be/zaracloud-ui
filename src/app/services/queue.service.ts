import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { QueueResponse } from '../models/queue.model';


@Injectable({
  providedIn: 'root',
})
export class QueueService {
  private apiUrl = 'https://zaracloud.radioscorpio.be/api/playqueue/status'; // Replace with actual API URL

  private authRedirectUrl = 'https://zaracloud.radioscorpio.be/api/login'; // Replace with your authentication URL

  constructor(private http: HttpClient, private router: Router) {}

  getQueueData(): Observable<QueueResponse> {
    return this.http
      .get<QueueResponse>(this.apiUrl)
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

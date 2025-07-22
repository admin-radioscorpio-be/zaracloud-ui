import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MixerStatus } from '../models/mixer.model';


@Injectable({
  providedIn: 'root',
})
export class MixerService {
  private apiUrl = '/api/mixer/status'; // Replace with actual API URL

  private authRedirectUrl = '/api/login'; // Replace with your authentication URL

  constructor(private http: HttpClient, private router: Router) {}

  getMixerData(): Observable<MixerStatus> {
    return this.http
      .get<MixerStatus>(this.apiUrl)
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

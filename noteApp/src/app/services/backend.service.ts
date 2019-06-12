import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
// import { AppConfig } from '../app.config';

@Injectable()
export class BackendService {

  constructor(private http: HttpClient) { }

  processGet(get_url: string, query_params: any) {
    get_url = 'http://localhost:6543'  + get_url;
    return this.http.get(get_url, {params: query_params})
      .pipe(
        catchError(this.handleError)
      );
  }

  processPost(post_url: string, post_body: any) {
    post_url = 'http://localhost:6543' + post_url;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post(post_url, JSON.stringify(post_body), httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}

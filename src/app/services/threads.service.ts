import { AllUserData } from './../../../shared/to/all-user-data';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { Http } from '@angular/http';


@Injectable()
export class ThreadsService {

  constructor(private http: Http) { }

  loadUserThreads(): Observable<AllUserData> {
    return this.http.get('/api/threads')
    .map(res => res.json());
  }
}

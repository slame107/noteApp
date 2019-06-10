import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private subject = new Subject<any>();

  constructor() { }

  updateNotes(value: any[]) {
    this.subject.next({ notes: value });
  }

  getNotes(): Observable<any> {
    return this.subject.asObservable();
  }

}
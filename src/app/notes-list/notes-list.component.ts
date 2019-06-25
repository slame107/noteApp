import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from '../services/backend.service'; //added import to pull
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  displayedColumns: string[]= ['title', 'noteContent', 'lastModified'];
  note_list: any[];

  constructor(private _dataservice:BackendService) { } 

  ngOnInit() {
    this.getNotesList();
  }

  getNotesList() {
    this._dataservice.processPost('/get-notes-list', {
    })
      .subscribe(res => {
        this.note_list = res['list'];
      });

}

//click method

}

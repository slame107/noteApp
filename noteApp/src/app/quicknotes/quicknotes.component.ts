import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { NotesService } from '../notes.service';
import { BackendService } from '../services/backend.service';
 
export class Quicknotes {
  title: String;
  content: String;
}
 
@Component({
  selector: 'app-quicknotes',
  templateUrl: './quicknotes.component.html',
  styleUrls: ['./quicknotes.component.css']
})
export class QuicknotesComponent implements OnInit {
 
  title = 'Note Generator';
  titleModel: String;
  contentModel: String;
  quicknotes: Quicknotes[];
 
  constructor(private notesService: NotesService, private _dataservice:BackendService) {
    this.titleModel = '';
    this.contentModel = '';

 
    const defaultQuicknotes: Quicknotes = {
      title: 'Title',
      content: 'Enter note',
    };
 
    this.quicknotes = [defaultQuicknotes];
  }
  ngOnInit() {
    this.getQuicknotes();
  }
 
  createQuicknotes() {
 
    const newQuicknotes: Quicknotes = {
      title: this.titleModel,
      content: this.contentModel,
    };

 
    this.quicknotes.push(newQuicknotes);

    this.notesService.updateNotes(this.quicknotes);
 
    this.titleModel = this.contentModel = '';
  }
 
  getQuicknotes() {
    this._dataservice.processPost('/get-note', {id:25
    })
      .subscribe(res => {
        console.log(res)
      });
  }
}

import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { NotesService } from '../notes.service';
import { BackendService } from '../services/backend.service';
import {MatIconModule} from '@angular/material/icon';
import { text } from '@angular/core/src/render3';
 
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
  @Output() addNewClassEvent = new EventEmitter();
  @Output() cancelAddNewEvent = new EventEmitter();
 
  title = 'Note Generator';
  titleModel: String;
  contentModel: String;
  quicknotes: Quicknotes[];
  add_class = false;
  submitted = false;
 
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

  addNewClass() {
    this.add_class = true;
    this.addNewClassEvent.emit(true);
  }

  cancelAddNew() {
    this.add_class = false;
    this.cancelAddNewEvent.emit(true);
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
    this._dataservice.processPost('/get-notes-list', {
    })
      .subscribe(res => {
        console.log(res)
      });
  }
  
  addNote() {
    this._dataservice
      .processPost('/add-note', {
        titleModel: this.titleModel,
        contentModel: this.contentModel,
      })
      .subscribe(res => {
        if(res['success']) {
          console.log('success');
  
        }else {
          
        }
          });
  }

}

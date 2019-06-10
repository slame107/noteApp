import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  note_array: any[];
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.getNotes().subscribe(notes =>{
      this.note_array = notes['notes'];
    } );
  }

}

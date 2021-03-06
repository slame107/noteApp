// https://bteamg.wildcardcorp.com/Wildcard/survey/src/branch/master/frontend/survey/src/app/app.module.ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {QuicknotesComponent} from './quicknotes/quicknotes.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { SearchBoxComponent } from './search-box/search-box.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BackendService } from './services/backend.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesListComponent } from './notes-list/notes-list.component';
import { AppRoutingModule } from './app-routing.module';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { Pipe, PipeTransform } from '@angular/core';
import { TruncatePipe } from './truncate.pipe';
import {MatIconModule} from '@angular/material/icon';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    AppComponent,
    QuicknotesComponent,
    SearchBoxComponent,
    NotesListComponent,
    TruncatePipe,
    EditNoteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    AppRoutingModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MomentModule,
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]

})
export class AppModule {}

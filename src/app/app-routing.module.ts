// https://bteamg.wildcardcorp.com/Wildcard/survey/src/branch/master/frontend/survey/src/app/app-routing.module.ts
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicknotesComponent }  from './quicknotes/quicknotes.component';
import { NotesListComponent }   from './notes-list/notes-list.component';
import { EditNoteComponent }    from './edit-note/edit-note.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'noteslist', component: QuicknotesComponent, pathMatch: 'full'},
  { path: 'home', component: NotesListComponent, pathMatch: 'full'},
  { path: 'editNote', component: EditNoteComponent, pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

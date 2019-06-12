// https://bteamg.wildcardcorp.com/Wildcard/survey/src/branch/master/frontend/survey/src/app/app-routing.module.ts
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicknotesComponent }  from './quicknotes/quicknotes.component';
import { NotesListComponent }   from './notes-list/notes-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: QuicknotesComponent, pathMatch: 'full'},
  { path: 'noteslist', component: NotesListComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

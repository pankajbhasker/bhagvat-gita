import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { VerseComponent } from './verse/verse.component';
import { VerseListingComponent } from './verselisting/verselisting.component';
import { LessonsComponent } from './lessons/lessons.component';

const approutes: Routes = [
  {path: 'verse', component: VerseComponent},
  {path: 'verselisting/:id', component: VerseListingComponent},
  {path: '', component: LessonsComponent}
];

@NgModule({
  imports: [
   // RouterModule.forRoot(approutes)
   RouterModule.forRoot(approutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

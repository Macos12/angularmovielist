import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ListofpopularComponent } from './listofpopular/listofpopular.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{path: 'listofpopular', component: ListofpopularComponent}];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

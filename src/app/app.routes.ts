import { Routes } from '@angular/router';
import { ListMovieComponent } from './list-movie/list-movie.component';

export const routes: Routes = [
    { path: 'movies/:id', component: ListMovieComponent }
];
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';
import { ListMovieComponent } from './app/list-movie/list-movie.component';

const routes: Routes = [
  { path: 'movies/:id', component: ListMovieComponent }
];

bootstrapApplication(AppComponent, {providers: [provideHttpClient(), provideRouter(routes)]})
  .catch((err) => console.error(err));

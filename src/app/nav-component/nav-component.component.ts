import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './nav-component.component.html',
  styleUrl: './nav-component.component.css'
})

export class NavComponent implements OnInit {
  genres: any[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.movieService.getGenres().subscribe(
      (data) => {
        this.genres = data.genres;
        // console.log(`genres ${JSON.stringify(data.genres)}`);
      },
      (error) => {
        console.error(`O seguinte erro foi apresentado: ${error}`);
      }
    );
  }

  onGenreClick(genreId : number) : void {
    this.router.navigate(['/movies', genreId]);
  }
  
}

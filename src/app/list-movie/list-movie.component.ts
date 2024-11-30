import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-list-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-movie.component.html',
  styleUrl: './list-movie.component.css'
})

export class ListMovieComponent implements OnInit {
  movies: any[] = [];
  genreId!: number;

  constructor (private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.genreId = +params['id'];
        this.getMoviesByGenre(this.genreId);
      }
    );
  }

  getMoviesByGenre(genreId: number): void {
    this.movieService.getMoviesByGenre(genreId).subscribe(
      (data) => {
        this.movies = data.results;
      },
      (error) => {
        console.error(`O seguinte erro foi apresentado: ${error}`);
      }
    );
  }

}

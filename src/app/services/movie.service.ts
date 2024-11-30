import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // O serviço estará disponível globalmente na aplicação
})

export class MovieService {
  private api = 'https://api.themoviedb.org'; // URL da API
  private version = '3';
  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjI0ODY4NGQwNzlhNDBkZWE2NjBlYzA1YzQwNWIzYiIsIm5iZiI6MTczMjQ1MTQ3NS4xMjg5OTA0LCJzdWIiOiI2NzQzMWJkYjdiODI1ZTY4NWI0ZTg5M2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9lxzgwzz7fXA7ZHJzqiCEBimLeh0q1xyejPYUM8SWcA';

  constructor(private http: HttpClient) {}

  /**
   * Obtém uma lista do gênero dos filmes.
   * @returns Observable com a resposta da API.
   */
  getGenres(): Observable<any> {
    const endpoint = `${this.api}/${this.version}/genre/movie/list`;
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      Accept: 'application/json',
    });

    const params = {
      language: 'pt-BR'
    };

    return this.http.get<any>(endpoint, { headers, params });
  }

  /**
   * Obtém uma lista de filmes a partir do gênero informado.
   * @param genreId ID do gênero.
   * @returns Observable com a resposta da API.
   */
  getMoviesByGenre(genreId: number): Observable<any> {
    const endpoint = `${this.api}/${this.version}/discover/movie`;
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      Accept: 'application/json',
    });

    const params = {
      include_adult: 'false',
      include_video: 'false',
      language: 'pt-BR',
      page: '1',
      sort_by: 'popularity.desc',
      with_genres: genreId.toString(),
    };

    return this.http.get<any>(endpoint, { headers, params });
  }
}

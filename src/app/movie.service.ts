import { Observable, of } from 'rxjs';
import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apikey='9198fa6d9a9713bc6b03ee9582525917';
  url='https://api.themoviedb.org/3/discover/movie?api_key='+this.apikey+'&sort_by=popularity.desc';

  constructor(private http: HttpClient) {}
    getMovies(): Observable<Movie>{
      return this.http.get<Movie>(`${this.url}`);
  }
}

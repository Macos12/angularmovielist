import { Movie } from '../movie';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from './../movie.service';
@Component({
  selector: 'app-listofpopular',
  templateUrl: './listofpopular.component.html',
  styleUrls: ['./listofpopular.component.css']
})
export class ListofpopularComponent implements OnInit {
  apikey='9198fa6d9a9713bc6b03ee9582525917';
  url='https://api.themoviedb.org/3/discover/movie?api_key='+this.apikey+'&sort_by=popularity.desc';
  // PopularMovies: any = [];
  myForm: FormGroup;
  Movies: any =[];
  movies: Movie[];
  selectedMovie: Movie;
  selectedItems={};

  constructor(
    private http: HttpClient,private _router : Router,private MovieService: MovieService) { }

  public ngOnInit(): void {
    this.getMovies();
    // this.http.get(this.url).subscribe(Response =>{
    //   /**this.li=data;*/
    //   // this.PopularMovies=Response;

    // });
    // this.myForm = new FormGroup({
    //   id: new FormControl(),
    //   title: new FormControl(),
    //   poster_path: new FormControl(),
    //   overview: new FormControl()
    // });
  }
  onSelect(movie: Movie):void{
    this.selectedMovie=movie;
  }
  getMovies(): void{
   //this.MovieService.getMovies().subscribe(movies=>this.movies=movies);
    this.MovieService.getMovies().subscribe((data: {}) =>{
      this.Movies=data
    });
  }
  getMovieDetail(id: string){
    this.http.get(this.url).subscribe(Response =>{
      /**this.li=data;*/
      // this.PopularMovies=Response;
      // this.myForm=new FormGroup({
      //   id: new FormControl(this.PopularMovies.id),
      //   title:new FormControl(this.PopularMovies.title),
      //   poster_path:new FormControl(this.PopularMovies.poster_path),
      //   overview:new FormControl(this.PopularMovies.overview)
      // });

    });
  }
  getID(id: string) {
    this._router.navigate(['/movie-detail', id]);
  
  }
}

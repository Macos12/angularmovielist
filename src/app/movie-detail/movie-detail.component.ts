import { Component, OnInit, Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Movie } from './../movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  
  @Input() movie: Movie;
  constructor(
    private route:ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {    
      }
    
 
    
  

}

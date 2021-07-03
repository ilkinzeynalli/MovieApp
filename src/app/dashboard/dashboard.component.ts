import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies:Movie[] =[];
  moviesCount:number;
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies.slice(0,4);
      this.moviesCount = movies.length;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { Movies } from '../models/movies.datasource';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.css'],
})
export class MoviesComponent implements OnInit {
  title = 'Movie List';
  selectedItem: Movie;
  movies:Movie[];

  constructor(private movieService:MovieService){}

  ngOnInit(): void {
    this.getMovies();
  }

  getTitle() {
    return this.title;
  }

  onSelect(movie: Movie){
    this.selectedItem = movie;
  }

  getMovies(): void{
    this.movieService.getMovies().subscribe(movies => this.movies = movies );
  }
}

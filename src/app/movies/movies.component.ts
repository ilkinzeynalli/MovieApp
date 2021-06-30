import { Component } from '@angular/core';
import { Movie } from '../models/movie';
import { movies } from '../models/movies.datasource';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.css'],
})
export class MoviesComponent {
  title = 'Movie List';
  
  movies:Movie[] = movies;

  getTitle() {
    return this.title;
  }
}

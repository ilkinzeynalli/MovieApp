import { Component } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.css'],
})
export class MoviesComponent {
  title = 'Movies List';
  
  movie:Movie = {
        id:1,
        name: "Askin Gucu"
  };

  getTitle() {
    return this.title;
  }
}

import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { Movies } from '../models/movies.datasource';
import { Observable,of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private loggingService: LoggingService) { }

  getMovies():Observable<Movie[]>{
    this.loggingService.add("Message: Movies Listed")
    return of(Movies);
  }
}

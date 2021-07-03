import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { Movies } from '../models/movies.datasource';
import { Observable,of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiBaseUrl = "api/movies";
  constructor(private loggingService: LoggingService,private httpClient:HttpClient) { }

  getMovies():Observable<Movie[]>{
    this.loggingService.add("Message: Movies Listed")
    return this.httpClient.get<Movie[]>(this.apiBaseUrl);
  }

  getMovie(id: Number): Observable<Movie>{
    this.loggingService.add("Message: Movie get by id: " + id);

    return this.httpClient.get<Movie>(this.apiBaseUrl + "/" + id);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie:Movie;
  
  constructor(private movieService: MovieService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const movieId = <number>(this.activatedRoute.snapshot.paramMap.get('id') ?? -1);
    this.getMovie(movieId);
  }

  getMovie(id:Number){
    this.movieService.getMovie(id).subscribe(movie=> this.movie = movie);
  }
}

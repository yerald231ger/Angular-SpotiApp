import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nuevasCansiones: any[] = [];
  loading: boolean = true;
  error: boolean;
  mensajeError : string;

  constructor(private http: HttpClient, private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;
    this.mensajeError = '';

    spotify.getNewReleases()
      .subscribe((data: any) => {
        this.nuevasCansiones = data;
        this.loading = false;
      }, (errorServicio) => {
        this.loading = false;
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
      });

  }

  ngOnInit(): void {
  }

}

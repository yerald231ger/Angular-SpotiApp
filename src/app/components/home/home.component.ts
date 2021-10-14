import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nuevasCansiones: any[] = [];

  constructor(private http: HttpClient, private spotify: SpotifyService) {
    spotify.getNewReleases()
      .subscribe((data : any) => {
        console.log(data.albums.items);

        this.nuevasCansiones = data.albums.items;
      });

  }

  ngOnInit(): void {
  }

}

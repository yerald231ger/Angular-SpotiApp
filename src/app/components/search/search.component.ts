import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  constructor(private spotify: SpotifyService) { }

  search = (termino: string) => {
    this.spotify.getArtista(termino).subscribe((data: any) => {
      this.artistas = data;
    })
  }

  ngOnInit(): void {
  }

}

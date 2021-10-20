import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  loaded: boolean = false;

  constructor(private router: ActivatedRoute, private sporityService: SpotifyService) {
    this.loaded = false;
    this.router.params.subscribe(params => {
      this.getArtist(params.id);
    });
  }

  getArtist(id: string) {
    this.sporityService.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.loaded = true;
    });
  }

  ngOnInit(): void {
  }

}

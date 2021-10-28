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
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute, private sporityService: SpotifyService) {
    this.loaded = false;
    this.router.params.subscribe(params => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtist(id: string) {
    this.sporityService.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.loaded = true;
    });
  }

  getTopTracks(id: string) {
    this.sporityService.getTopTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks;
      this.loaded = true;
      console.log(topTracks);
    });
  }

  ngOnInit(): void {
  }

}

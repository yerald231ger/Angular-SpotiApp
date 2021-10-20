import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo')
  }

  private getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD9LgNfXG92LW82n8hu0oGHpf3LnET0hEzFcZ-BAjZJC0SpGNP_tAQO6-yX30j-xNc-XDgMvZYUTDgtAnbomIHUjd-vZL0oTswQVeRELf3DUpxErP4KTwDWhB_SbAi3VGJaq4RxiMTshjZTVQ'
    });

    return this.http.get(url, { headers })
  }

  getNewReleases(): Observable<Object> {
    return this.getQuery('browse/new-releases')
      .pipe(map((data: any) => data.albums.items));
  }

  getArtists(termino: string): Observable<Object> {

    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map((data: any) => data.artists.items));
  }

  getArtist(idArtist: string): Observable<Object> {

    return this.getQuery(`artists/${idArtist}`);
      // .pipe(map((data: any) => data.artists.items));
  }

  
}



// 6 dias
// 31-mil
// 
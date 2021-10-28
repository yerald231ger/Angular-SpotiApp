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
      'Authorization': 'Bearer BQCDh58qG4LNt21dIHC-_ZfBeRPqgJ6oEDjZ9AVRnYeyusR6GWh7oNcPJj8M4LQvzeM6Oe6N6OC2Y845o-coeo0Zhq0n6A70eEtLdtk3z6HyDSV3sSd7Sa28A9VLYgGavR4httcsCczY0LWL5g'
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

  getTopTracks(idArtist: string): Observable<any[]> {

    return this.getQuery(`artists/${idArtist}/top-tracks?country=us`)
      .pipe(map((data: any) => data.tracks));
  }

  
}



// 6 dias
// 31-mil
// 
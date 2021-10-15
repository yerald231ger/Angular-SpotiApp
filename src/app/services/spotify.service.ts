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
      'Authorization': 'Bearer BQC3qmhkMpXYz_-MAg3b2U0s-ULLIq7Hs2Y6MdGpQzfh4xIIPG3HXeac3eID9YErN0P-PHDLfYCIBZjAX5gYusmOMUu6FFgoTCTkBnYsLCGAkD3dNIBDX9LeTHpgC-1aw-SyKb3ew5bA2xXxnA'
    });

    return this.http.get(url, { headers })
  }

  getNewReleases(): Observable<Object> {
    return this.getQuery('browse/new-releases')
      .pipe(map((data: any) => data.albums.items));
  }

  getArtista(termino: string): Observable<Object> {

    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map((data: any) => data.artists.items));
  }
}



// 6 dias
// 31-mil
// 
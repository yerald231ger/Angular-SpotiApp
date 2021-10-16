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
      'Authorization': 'Bearer BQCX8fWXGo1rEabCswDiN3DiZnnSD2fKA1qH91Cy8qjn9i2D7WcC_cm7HtR4Xdiah_UbpRShhYJb0k2S1YMddhh6gk3e5Lc8cmh2vxXT9JwConCzVX_1cBzW_nPeMqTMvnIJXP7_EU7AcxK1ZA'
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
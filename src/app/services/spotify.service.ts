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
      'Authorization': 'Bearer BQDtjDTrAyq2H51N_y0Xy0Vht0LtML-Z8fJX0BW8tOD4q6g94Fffp2TsKh15jcrgIoHYt4XcF54KcuRRwGDekTbizGjb_fucGbs8qhb3_fzkZv2T8ptSy-84qf-i-F50z4sFAJlZJC1Y7NxFUQ'
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
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
      'Authorization': 'Bearer BQB5Ho4bpt1RF56KigHm1O0Uci_qcLKEYfnhum3_dYAK1KYaaIa_-NvD7EBTrILB1aa_hCpSuQAr0N_PR69pOC-qU4-EBze2Ic5VTAxkaZzaWHnLA7K2ch7owGeadDanhzalIoD0Q08BULHwIw'
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
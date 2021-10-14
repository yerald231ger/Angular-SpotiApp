import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo')
  }

  getNewReleases() : Observable<Object>{

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCjqYcx8ZeBpWPghVGcRgav7UJeV2Hnk_xfC_v40QAFBPpDC_MR2RoMKaVN_opc3iX5TPuCQNJPwX5euVSa7EhLlCBfCOXR5fhDjDRtSSIbKGN3rNyT910dcJtigz0cTeaLA9c6EhXy124HqA'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}



// 6 dias
// 31-mil
// 
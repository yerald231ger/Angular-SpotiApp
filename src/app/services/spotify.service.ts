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

  getNewReleases(): Observable<Object> {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCCkFS0G63pzFdWMteE4WdT8ahXUF1tS-AQTodForxUB2yw5yIl3zq0SOZO8BNCIkThVgUzKl7pdrZhYIb1x4vfnfB2MyFNvnKa5CNp0gq0tBeOzaUZPhrzkkNBP-Y8MbcrBYaGxZJ3mkjH_w'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCCkFS0G63pzFdWMteE4WdT8ahXUF1tS-AQTodForxUB2yw5yIl3zq0SOZO8BNCIkThVgUzKl7pdrZhYIb1x4vfnfB2MyFNvnKa5CNp0gq0tBeOzaUZPhrzkkNBP-Y8MbcrBYaGxZJ3mkjH_w'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers });
  }
}



// 6 dias
// 31-mil
// 
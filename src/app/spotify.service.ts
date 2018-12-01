import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD9k2-i5SEIHQUFKSFGCN4S-XcLJhol_vNIeXfA2Fd4hBRo5_VSnRPQ8mvP47MDGMEKHmnHrhp6HFILBP0'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}

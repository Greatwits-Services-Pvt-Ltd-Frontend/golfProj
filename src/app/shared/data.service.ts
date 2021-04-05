import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private _http: HttpClient,) { }

    post(url:any, data:any) {
      // this.setHttpHeaders();
      // return this._http.post(url, { ...data }, { headers: this.headers });
      return this._http.post(url, { ...data });
    }
  
    get(url:any) {
      // this.setHttpHeaders();
      // return this._http.get(url, { headers: this.headers });
      return this._http.get(url);
    }

}

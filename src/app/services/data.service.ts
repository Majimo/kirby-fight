import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private _url = "assets/data/data.json";
  
  constructor(private _http: HttpClient) { }

  getPlayers() {
    return this._http.get(this._url).map((res: Response) => res);
  }
}

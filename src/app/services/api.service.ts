import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getTabs() {
    return [
      {name: 'Market Analysis', link: 'dfadfdf'},
      {name: 'Competitive Analysis', link: 'ghjghgf'}
    ];
  }
}

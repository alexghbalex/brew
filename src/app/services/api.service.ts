import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BrewData} from "../app.models";
import {Observable, of} from "rxjs";

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

  getData(filters: Record<string, string>): Observable<BrewData> {
    return of({
      id: '123',
      name: 'analysis',
      data: [
        {field: 'aaa', link1: 'bbb', link2: 'ccc'},
        {field: 'aaa', link1: 'bbb', link2: 'ccc'},
        {field: 'aaa', link1: 'bbb', link2: 'ccc'},
        {field: 'aaa', link1: 'bbb', link2: 'ccc'},
        {field: 'aaa', link1: 'bbb', link2: 'ccc'},
      ]
    });
  }
}

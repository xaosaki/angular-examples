import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  getData(): Observable<Object>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=20');
  }
  getDataSorted(field: string, order: number, page: number = 1): Observable<Object>{
    if(order == -1){
      return this.http.get('https://jsonplaceholder.typicode.com/photos?_sort='+ field +'&_order=desc&_page='+ page +'&_limit=20');
    }
    if(order == 1){
      return this.http.get('https://jsonplaceholder.typicode.com/photos?_sort='+ field +'&_order=asc&_page='+ page +'&_limit=20');
    }
    if(order == 0){
      return this.http.get('https://jsonplaceholder.typicode.com/photos?_page='+ page +'&_limit=20');
    }
  }
}

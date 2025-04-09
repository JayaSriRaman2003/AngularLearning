import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  private url = 'https://jsonplaceholder.typicode.com/users';

  getData(): Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
}

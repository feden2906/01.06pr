import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {User} from '../models/User';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService implements Resolve<User[]>{
  url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  resolve(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  getUser(id: string): Observable<User> {                           // TODO невикористаний код
    return this.httpClient.get<User>(this.url + '/' + id);
  }
}

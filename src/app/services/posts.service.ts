import {Injectable} from '@angular/core';
import {Resolve} from "@angular/router";
import {Post} from "../models/Post";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService implements Resolve<Post[]>{
  url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  resolve(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url);
  }

  getPost(id: string): Observable<Post> {                             // TODO невикористаний код
    return this.httpClient.get<Post>(this.url + '/' + id);
  }
}

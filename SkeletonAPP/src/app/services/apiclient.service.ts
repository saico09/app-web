import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {retry,catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class APIClientService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  apiURL = 'https://apis.digital.gob.cl/dpa';
  constructor(public http:HttpClient) { }

  getUsuarios():Observable<any>{
    return this.http.get(this.apiURL+'/regiones/').pipe(
      retry(3)
    );
  }

  getUsuario(codigo):Observable<any>{
    return this.http.get(this.apiURL+'/regiones/'+codigo).pipe(
      retry(3)
    );
  }

  getPosts():Observable<any>{
    return this.http.get(this.apiURL+'/posts/').pipe(
      retry(3)
    );
  }

  getPost(id):Observable<any>{
    return this.http.get(this.apiURL+'/posts/'+id).pipe(
      retry(3)
    );
  }

  createPost(post):Observable<any>{
    return this.http.post(this.apiURL+'/posts/',post,this.httpOptions).pipe(
      retry(3)
    );
  }

  updatePost(id,post):Observable<any>{
    return this.http.put(this.apiURL+'/posts/'+id,post,this.httpOptions).pipe(
      retry(3)
    );
  }

  deletePost(id):Observable<any>{
    return this.http.delete(this.apiURL+'/posts/'+id,this.httpOptions);
  }

}

  


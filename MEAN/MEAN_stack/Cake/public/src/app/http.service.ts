import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getCakes() {
    return this._http.get('/cakes');
  }
  getShowCake(id){
    return this._http.get('/show/cake/'+ id);
  }
  postNewCake(newcake){
    return this._http.post('/new/cake/', newcake);
  }
  getComment() {
    return this._http.get('/rate/comment/');
  }
  getShowComment(id){
    return this._http.get('/show/comment/'+ id);
  }
  postNewComment(id ,newcomment){
    return this._http.post('/new/comment/'+ id, newcomment);
  }
}

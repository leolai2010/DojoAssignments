import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getTask() {
    return this._http.get('/tasks');
  }
  getShowTask(id){
    return this._http.get('/show/task/'+ id);
  }
  postNewTask(newtask){
    return this._http.post('/new/task/', newtask);
  }
  deleteTask(id){
    return this._http.get('/remove/task/'+ id);
  }
  editTask(edit){
    return this._http.post('/edit/task/'+ edit._id, edit);
  }
}

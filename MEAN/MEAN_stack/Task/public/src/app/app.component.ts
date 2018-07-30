import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  tasks:any;
  desc:any;
  newTask:any;
  delete:any;
  edit:any;
  constructor(private _httpService: HttpService) {
  }
  ngOnInit(){
    this.newTask = { title: "", description: "" }
  }
  taskClick(): void{
    let observable = this._httpService.getTask();
    observable.subscribe(data =>{
      this.tasks = data;
    });
  }
  descClick(id): void{
    let observable = this._httpService.getShowTask(id);
    observable.subscribe(data =>{
      this.desc = data;
      console.log(this.desc);
    });
  }
  onSubmit(){
    let observable = this._httpService.postNewTask(this.newTask);
    observable.subscribe(data=>{
      console.log(data);
      this.newTask = { title: "", description: "" }
    })
  }
  deleteClick(id): void{
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data =>{
      this.delete = data;
      console.log("I love jeff")
    })
  }
  editClick(id): void{
    let observable = this._httpService.getShowTask(id);
    observable.subscribe(data =>{
      this.edit = data;
    });
  }
  onEditSubmit(edit){
    let observable = this._httpService.editTask(edit);
    observable.subscribe(data=>{
    })
  }
}

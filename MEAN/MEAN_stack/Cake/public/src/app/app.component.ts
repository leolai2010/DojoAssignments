import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  cakes:any;
  comments:any;
  newCake:any;
  newComment:any;
  showComment:any;
  constructor(private _httpService: HttpService) {
  }
  ngOnInit(){
    this.getAllCake();
    this.newCake = { baker: "", imageurl: "" }
    this.newComment = { name:"", comment:"", rating:""}
  }
  getAllCake(){
    let observable = this._httpService.getCakes();
    observable.subscribe(data=>{
      this.cakes = data;
    })
  }
  onCakeSubmit(){
    let observable = this._httpService.postNewCake(this.newCake);
    observable.subscribe(data=>{
      console.log(data);
      this.newCake = { baker: "", imageurl: "" }
      console.log(this.newCake);
    })
  }
  onCommentSubmit(id){
    let observable = this._httpService.postNewComment(id, this.newComment);
    observable.subscribe(data=>{
      console.log(this.newComment);
    })
  }
  showCommentClick(id): void{
    let observable = this._httpService.getShowComment(id);
    observable.subscribe(data=>{
      this.showComment = data;
      console.log(this.showComment);
    })
  }
}

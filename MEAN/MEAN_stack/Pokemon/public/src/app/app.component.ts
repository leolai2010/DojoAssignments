import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  bulbasaur:any;
  constructor(private _httpService: HttpService) {
  }
  ngOnInit(){
    this.getTask();
  }
  getTask(){
    this._httpService.getPokemon().subscribe(data=>{
      this.bulbasaur = data;
      console.log(data);
    });
  }
}
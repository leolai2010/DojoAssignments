import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() content:any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    console.log(this.content);
  }

}

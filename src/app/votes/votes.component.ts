import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Input('like') like: number = 0;
  @Input('dislike') dislike: number = 0;
  @Output('voteEmitter') voteEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  inLike(){
   this.voteEmitter.emit({status:'like',value: this.like});
  }
  inDislike(){
   this.voteEmitter.emit({status:'dislike',value: this.dislike});
  }


}

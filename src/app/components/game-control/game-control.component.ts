import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<number>();
  myNum = 0;
  gameTimer;
  @Output() gameStopped = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onGameStart() {
    this.gameTimer = setInterval(() => {
      this.gameStarted.emit(this.myNum);
      this.myNum++;
      // console.log(this.myNum);
    }, 1000);
  }

  onGameStop() {
    this.gameStopped.emit(this.myNum);
    clearInterval(this.gameTimer);
    console.log('Game Stopped', this.myNum);
  }
}

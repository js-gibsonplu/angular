import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() myNum = 0;
  @Output() gameStarted = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onGameStart(data) {
    const gameTimer = setInterval(() => {
      this.gameStarted.emit(this.myNum);
      this.myNum++;
      console.log(this.myNum);
    }, 1000);
  }
  // TODO this needs work to stop the interval - this current config doesn't work
  onGameStop(func) {
    clearInterval(func.gameTimer);
  }
}

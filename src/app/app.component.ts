import { Component,ContentChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Jonathan';

  // *This doesn't work for some reason
  sayNumber(myNum: number) {
    console.log(`GAME STARTED ${myNum}`);
  }
}

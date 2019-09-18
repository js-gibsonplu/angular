import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverID = 1546;
  status = 'online';
  newInstance = true;
  moreText = 'Show even more!';
  text = '';

  constructor() {
    setTimeout(()=> {
      this.newInstance = false;
    }, 3000);
  }

  onMoreTextClick() {
    console.log('more text button clicked')
    this.moreText += ' YES MOAR!!!!!!!!!!!!'
  }

  inputText(event: any) {
    this.text = event;
  }
}

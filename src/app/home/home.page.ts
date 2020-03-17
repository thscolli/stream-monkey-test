import { Component, OnInit, Pipe, PipeTransform, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

@ViewChild('streamMonkeyPlayer', {static: false}) public iframe: ElementRef;

  @HostListener('window:message', ['$event'])
onMessage(event) {

   if (event.origin === 'https://player.streammonkey.com') {
        var response = event.data;
        console.log(response);
        // Do something with the response
    } else {
      console.log('uh oh');
        // Not from Stream Monkey! No need to do anything.
    }
        // Do something with the response
 
}

  constructor() {}

  getOrigin(event: any){
console.log(origin);
this.iframe.nativeElement.contentWindow.postMessage('player.getCurrentTime', event.origin);

}

}

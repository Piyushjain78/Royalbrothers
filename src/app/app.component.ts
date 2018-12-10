import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    closed() {
    document.getElementById("mynav").style.width = "0px";}
    opened() {
    document.getElementById("mynav").style.width = "80%";
  }
}

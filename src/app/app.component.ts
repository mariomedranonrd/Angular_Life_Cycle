import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  someProperty: boolean = true;
  person: Object = {
    name: 'Mario'
  };
  account: Object = {
    id: 123456,
    name: 'Mario Too And More'
  };

  onToggleTest() {
    this.someProperty = !this.someProperty;
  }
  manualUpdate() {
    this.account = {};
  }
}

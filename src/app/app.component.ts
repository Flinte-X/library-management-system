import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public UI = 'common';

  onActivate(componentReference: any): void {
    this.UI = componentReference.UI;
  }
}

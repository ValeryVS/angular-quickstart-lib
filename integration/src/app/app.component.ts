import { Component } from '@angular/core';
import { LibService } from '@valeryvs/quickstart-lib';

@Component({
  selector: 'app-integration',
  template: `
    <lib-component></lib-component>
    <h3>Meaning is: {{meaning}}</h3>
  `,
})
export class AppComponent {
  public meaning: number;
  constructor(libService: LibService) {
    this.meaning = libService.getMeaning();
  }
}

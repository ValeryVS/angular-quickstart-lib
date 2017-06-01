import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'lib-component',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.css'],
})
export class LibComponent {
  public name = 'Angular Library';
}

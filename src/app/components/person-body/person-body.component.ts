import { Component, Input } from '@angular/core';
import { Person } from '../../interfaces';

@Component({
  selector: '[app-person-body]',
  templateUrl: './person-body.component.html',
  styleUrls: ['./person-body.component.scss']
})
export class PersonBodyComponent {
  @Input() person: Person;
  constructor() { }

}

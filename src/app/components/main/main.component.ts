import { Component, OnInit } from '@angular/core';
import { DataLoaderService } from '../../services/data-loader.service'
import { Person } from '../../interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title: string;
  persons: Person[];

  constructor(private service: DataLoaderService) { }

  ngOnInit(): void {
    if (!this.service.loadedData) {
      return;
    }

    const { title, persons } = this.service.loadedData;

    if (title && persons) {
      this.title = title;
      this.persons = persons;
    }
  }
}

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DataLoaderService } from './data-loader.service';

@Injectable()
export class Resolver implements Resolve<Promise<any>> {
  constructor(private service: DataLoaderService) { }

  resolve() {
    return this.service.getData();
  }
}

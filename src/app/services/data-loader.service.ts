import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { TeamSection, Person } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  private sourceUrl: string = 'https://cobiro-website-builder.s3-eu-west-1.amazonaws.com/task/index.json';
  public loadedData: TeamSection;

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.sourceUrl, this.httpOptions)
      .toPromise()
      .then((data: any) => this.toModel(data))
      .catch(console.error);
  }

  toModel(dataApi) {
    if (!dataApi || !dataApi.data || !dataApi.data.length || !dataApi.data[0].attributes) {
      return;
    }

    const { title, memberCards: persons } = dataApi.data[0].attributes || {};

    this.loadedData = {
      title,
      persons: <Person[]>Object
        .entries(persons)
        .map((item: any) => ({ ...item[1].block, ...item[1].imageUrl }))
        .map((item: any) => ({
          profession: item.description,
          email: item.link,
          phone: item.text,
          name: item.title,
          image_sm: item.w200,
          image_md: item.w400,
        }))
    };
  }
}

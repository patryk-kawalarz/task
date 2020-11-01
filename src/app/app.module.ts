import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { Routes } from '@angular/router';
import { SpinnerComponent } from './components/shared/spinner.component';
import { Resolver } from './services/resolver';
import { DataLoaderService } from './services/data-loader.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './components/person/person.component';
import { PersonBodyComponent } from './components/person-body/person-body.component';

const AppRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: { message: Resolver }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    MainComponent,
    PersonComponent,
    PersonBodyComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [Resolver, DataLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

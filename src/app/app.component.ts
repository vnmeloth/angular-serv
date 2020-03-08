import { Component,OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = '';
  data :object;

  constructor( serv:AppService)
  {
    
  }
  ngOnInit( )
  {

   this.name = 'angular2';

  }
}


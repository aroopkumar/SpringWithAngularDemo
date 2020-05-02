import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons:Array<Person>;
  constructor(private http: HttpClient){
   
  }

  onButtonClick(){
    this.http.get("http://localhost:8080/persons")
    .subscribe((res:Array<Person>)=>{
      console.log('Person Objects1: '+JSON.stringify(res));
      this.persons=res;
      console.log('Person Objects2: '+this.persons);
    });
  }
}

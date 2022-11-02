import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Mi primera aplicación';
  welcome: string = 'Gran bienvenida!';
  isRunning: boolean = false;
  messages: string[] = [];
  people: { firstName: string; lastName: string; age: number }[] = [
    { firstName: 'Fabián', lastName: 'Degouveia', age: 26 },
    { firstName: 'Ana', lastName: 'García', age: 20 },
    { firstName: 'Melina', lastName: 'Toro', age: 26 },
    { firstName: 'Paola', lastName: 'Argüelles', age: 29 },
  ];

  url: string = 'http://localhost:3005/api/getPets';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('Page loaded');
    this.http.get<any>(this.url).subscribe(data =>{
      console.log(data);
    })
  }

  testFunction(value: string): void {
    console.log(`testFunction called! ${value}`);
    this.messages.push('testFunction called');
    console.log(this.messages);
  }
}

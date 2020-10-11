import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  baseUrl = 'https://localhost:5001/api/users';// 'https://localhost:5001/users';
  users: any;
  corsHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200/'
  });

  constructor(private http: HttpClient) {   this.getUsers(); }


  // tslint:disable-next-line: typedef
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response => { this.users = response; },
      error => {
        console.log(error);
      });
  }
}

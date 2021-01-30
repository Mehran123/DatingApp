import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  // users: any;
  // constructor(private http: HttpClient) { }
  constructor() { }

  ngOnInit(): void {
    // this.getUser();
  }

  registerTogggle(){
    this.registerMode = !this.registerMode;
  }

  // getUser(){
  //   this.http.get('http://localhost:5000/users').subscribe(response => this.users = response);
  // }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }
}

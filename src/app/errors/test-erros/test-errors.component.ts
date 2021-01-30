import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-erros',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrosComponent implements OnInit {
  baseUrl ="http://localhost:5000/";
  validationErrors: string[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

   get400Error(){
    this.http.get(this.baseUrl+'buggy/bad-request').subscribe(resonse => {
      console.log(resonse);
    }, error =>{
      console.log(error);
    })
  }
  get401Error(){
    this.http.get(this.baseUrl+'buggy/auth').subscribe(resonse => {
      console.log(resonse);
    }, error =>{
      console.log(error);
    })
  }
  get404Error(){
    this.http.get(this.baseUrl+'buggy/not-found').subscribe(resonse => {
      console.log(resonse);
    }, error =>{
      console.log(error);
    })
  }
  
  get400ValidationError(){
    this.http.post(this.baseUrl+'account/register', {}).subscribe(resonse => {
      console.log(resonse);
    }, error =>{
      console.log(error);
      this.validationErrors= error;
    })
  }
  get500Error(){
    this.http.get(this.baseUrl+'buggy/server-error').subscribe(resonse => {
      console.log(resonse);
    }, error =>{
      console.log(error);
    })
  }
    
  

}

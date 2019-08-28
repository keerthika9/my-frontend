import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) {
  }
  public request: any = {
  };


  saveUser(user: any, password: any): Observable<any> {
    console.log('message');
    this.request.userName = user;
    this.request.password = password;
    console.log(this.request);
    return this.http.post('http://localhost:8888/register', this.request);
  }


  login(userName: string, password: string) {
    console.log({ userName, password }, 'ID THIS THE METHOD??');
    // this.http.get('http://localhost:8080/welcome', {responseType: 'text'}).subscribe(console.log);
    return this.http.post(`http://localhost:8888/authenticate`, { userName, password });

  }

}

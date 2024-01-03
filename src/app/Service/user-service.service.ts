import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  
  constructor(private http:HttpClient) { }

  createuser(data:any):Observable<any>{
    return this.http.post("http://localhost:5098/api/LoginAndRegister/RegisterNew",data);
  }

}





